<?php
/**
 * Terranova Instagram — configuration & token helpers.
 *
 * Requires the following constants in wp-config.php:
 *   TERRANOVA_IG_APP_ID       — Instagram App ID (not secret, safe in code too)
 *   TERRANOVA_IG_APP_SECRET   — Instagram App Secret (KEEP SECRET)
 *   TERRANOVA_IG_REDIRECT_URI — exactly the OAuth redirect registered in the Meta dashboard
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!defined('TERRANOVA_IG_GRAPH_HOST')) {
    define('TERRANOVA_IG_GRAPH_HOST', 'https://graph.instagram.com');
}

/* Option / transient keys — single source of truth. */
if (!defined('TERRANOVA_IG_OPT_TOKEN'))   define('TERRANOVA_IG_OPT_TOKEN', 'terranova_ig_token');        // long-lived access token
if (!defined('TERRANOVA_IG_OPT_EXPIRES')) define('TERRANOVA_IG_OPT_EXPIRES', 'terranova_ig_token_expires'); // unix ts of expiry
if (!defined('TERRANOVA_IG_OPT_USER_ID')) define('TERRANOVA_IG_OPT_USER_ID', 'terranova_ig_user_id');       // ig professional account id
if (!defined('TERRANOVA_IG_FEED_CACHE'))  define('TERRANOVA_IG_FEED_CACHE', 'terranova_ig_feed_cache');     // transient key for the feed

/**
 * True only when all required credentials exist.
 */
function terranova_ig_has_config() {
    return defined('TERRANOVA_IG_APP_ID')
        && defined('TERRANOVA_IG_APP_SECRET')
        && defined('TERRANOVA_IG_REDIRECT_URI')
        && TERRANOVA_IG_APP_ID
        && TERRANOVA_IG_APP_SECRET
        && TERRANOVA_IG_REDIRECT_URI;
}

/**
 * Persist a freshly issued / refreshed long-lived token.
 */
function terranova_ig_store_token($access_token, $expires_in) {
    update_option(TERRANOVA_IG_OPT_TOKEN, $access_token, false);
    update_option(TERRANOVA_IG_OPT_EXPIRES, time() + (int) $expires_in, false);
    // A new token may surface new media — drop the cached feed.
    delete_transient(TERRANOVA_IG_FEED_CACHE);
}

function terranova_ig_get_token() {
    return get_option(TERRANOVA_IG_OPT_TOKEN, '');
}

/**
 * Refresh the long-lived token when it is within a buffer of expiry.
 * Safe to call often; only hits the network when a refresh is actually due.
 */
function terranova_ig_maybe_refresh_token() {
    $token = terranova_ig_get_token();
    if (!$token) {
        return;
    }

    $expires = (int) get_option(TERRANOVA_IG_OPT_EXPIRES, 0);
    $buffer  = 10 * DAY_IN_SECONDS; // refresh ~10 days before the 60-day expiry

    if ($expires && (time() < $expires - $buffer)) {
        return; // still fresh
    }

    $url = add_query_arg(
        array(
            'grant_type'   => 'ig_refresh_token',
            'access_token' => $token,
        ),
        TERRANOVA_IG_GRAPH_HOST . '/refresh_access_token'
    );

    $res = wp_remote_get($url, array('timeout' => 15));
    if (is_wp_error($res) || (int) wp_remote_retrieve_response_code($res) !== 200) {
        error_log('[terranova-ig] token refresh failed: ' . terranova_ig_error_text($res));
        return;
    }

    $body = json_decode(wp_remote_retrieve_body($res), true);
    if (!empty($body['access_token'])) {
        terranova_ig_store_token($body['access_token'], $body['expires_in'] ?? 5184000);
    }
}

/**
 * Extract a readable message from a wp_remote_* result (for logs / debug).
 */
function terranova_ig_error_text($res) {
    if (is_wp_error($res)) {
        return $res->get_error_message();
    }
    return wp_remote_retrieve_body($res);
}

/* Keep the token alive via WP-Cron (weekly check is well inside the 60-day window). */
add_action('terranova_ig_refresh_cron', 'terranova_ig_maybe_refresh_token');

add_action('init', function () {
    if (!wp_next_scheduled('terranova_ig_refresh_cron')) {
        wp_schedule_event(time() + DAY_IN_SECONDS, 'weekly', 'terranova_ig_refresh_cron');
    }
});
