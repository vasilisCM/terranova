<?php
/**
 * Terranova Instagram — feed endpoint.
 *
 * Exposed to the front-end JS as:
 *   admin-ajax.php?action=terranova_ig_media
 * The access token stays server-side and is never sent to the browser.
 * Returns: { "data": [ { id, media_type, media_url, permalink }, ... ] }  (max 8)
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('wp_ajax_terranova_ig_media',        'terranova_ig_media_endpoint');
add_action('wp_ajax_nopriv_terranova_ig_media', 'terranova_ig_media_endpoint');

function terranova_ig_media_endpoint() {
    // Serve the cached feed when available (keeps us far under the 200/hr limit).
    $cached = get_transient(TERRANOVA_IG_FEED_CACHE);
    if (is_array($cached)) {
        wp_send_json(array('data' => $cached));
    }

    $token = terranova_ig_get_token();
    if (!$token) {
        // Not connected yet — front-end keeps the placeholder images.
        wp_send_json(array('error' => 'not_connected'), 503);
    }

    $url = add_query_arg(
        array(
            // children{...} lets us pull a cover image for CAROUSEL_ALBUM posts in one call.
            'fields'       => 'id,media_type,media_url,permalink,thumbnail_url,timestamp,children{media_type,media_url,thumbnail_url}',
            'limit'        => 25, // over-fetch so reels/videos can be dropped and still reach 8
            'access_token' => $token,
        ),
        TERRANOVA_IG_GRAPH_HOST . '/me/media'
    );

    $res = wp_remote_get($url, array('timeout' => 15));
    if (is_wp_error($res) || (int) wp_remote_retrieve_response_code($res) !== 200) {
        wp_send_json(array('error' => 'api_error', 'detail' => terranova_ig_error_text($res)), 502);
    }

    $body  = json_decode(wp_remote_retrieve_body($res), true);
    $items = (isset($body['data']) && is_array($body['data'])) ? $body['data'] : array();

    $photos = array();
    foreach ($items as $item) {
        $type = $item['media_type'] ?? '';

        // Only still-image posts: photos and carousels. Skip VIDEO (reels).
        if ($type !== 'IMAGE' && $type !== 'CAROUSEL_ALBUM') {
            continue;
        }

        $img = $item['media_url'] ?? '';

        // Carousel parents often have no media_url — take a child's image as the cover.
        if (!$img && $type === 'CAROUSEL_ALBUM' && !empty($item['children']['data'])) {
            foreach ($item['children']['data'] as $child) {
                if (($child['media_type'] ?? '') === 'IMAGE' && !empty($child['media_url'])) {
                    $img = $child['media_url'];
                    break;
                }
            }
            if (!$img) { // last resort: first child's image/thumbnail
                $first = $item['children']['data'][0];
                $img   = $first['media_url'] ?? ($first['thumbnail_url'] ?? '');
            }
        }

        if (!$img) {
            $img = $item['thumbnail_url'] ?? '';
        }
        if (!$img) {
            continue;
        }

        $photos[] = array(
            'id'         => $item['id'] ?? '',
            'media_type' => $type,
            'media_url'  => esc_url_raw($img),
            'permalink'  => esc_url_raw($item['permalink'] ?? ''),
        );

        if (count($photos) >= 8) {
            break;
        }
    }

    // Cache even a short/empty result to avoid hammering the API on every hit.
    set_transient(TERRANOVA_IG_FEED_CACHE, $photos, HOUR_IN_SECONDS);

    wp_send_json(array('data' => $photos));
}
