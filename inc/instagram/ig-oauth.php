<?php
/**
 * Terranova Instagram — OAuth callback (Business Login for Instagram).
 *
 * Registers a clean endpoint:
 *   https://<site>/ig-oauth-callback/
 * Register THAT exact URL as the OAuth Redirect URI in:
 *   Meta App Dashboard > Instagram > API setup with Instagram login
 *     > 4. Set up Instagram business login > Business login settings
 */

if (!defined('ABSPATH')) {
    exit;
}

/* 1) Route the clean callback URL. */
add_action('init', function () {
    add_rewrite_rule('^ig-oauth-callback/?$', 'index.php?terranova_ig_oauth=1', 'top');
});

add_filter('query_vars', function ($vars) {
    $vars[] = 'terranova_ig_oauth';
    return $vars;
});

add_action('template_redirect', function () {
    if (get_query_var('terranova_ig_oauth')) {
        terranova_ig_handle_oauth();
        exit;
    }
});

/* One-time rewrite flush (no plugin activation hook available from the theme). */
add_action('init', function () {
    if (get_option('terranova_ig_rewrite_v') !== '1') {
        flush_rewrite_rules(false);
        update_option('terranova_ig_rewrite_v', '1', false);
    }
}, 20);

/**
 * Build the authorization (embed) URL you send to the client.
 */
function terranova_ig_authorize_url() {
    return add_query_arg(
        array(
            'client_id'     => TERRANOVA_IG_APP_ID,
            'redirect_uri'  => TERRANOVA_IG_REDIRECT_URI,
            'response_type' => 'code',
            'scope'         => 'instagram_business_basic',
        ),
        'https://www.instagram.com/oauth/authorize'
    );
}

/**
 * Admin-only helper: visit  https://<site>/?terranova_ig_authurl=1  while logged in
 * as an administrator to print the exact embed URL to hand to the client.
 */
add_action('init', function () {
    if (isset($_GET['terranova_ig_authurl']) && current_user_can('manage_options')) {
        wp_die(
            '<p>Send this link to the client:</p><p><code>'
            . esc_html(terranova_ig_authorize_url())
            . '</code></p>',
            'Instagram authorize URL',
            array('response' => 200)
        );
    }
});

/**
 * Handle the redirect back from Instagram after the user taps "Allow".
 */
function terranova_ig_handle_oauth() {
    if (!terranova_ig_has_config()) {
        wp_die('Instagram: missing app configuration (check wp-config.php constants).');
    }

    // Instagram may return an error instead of a code.
    if (isset($_GET['error'])) {
        $desc = isset($_GET['error_description'])
            ? sanitize_text_field(wp_unslash($_GET['error_description']))
            : sanitize_text_field(wp_unslash($_GET['error']));
        wp_die('Instagram authorization was cancelled or failed: ' . esc_html($desc));
    }

    $code = isset($_GET['code']) ? sanitize_text_field(wp_unslash($_GET['code'])) : '';
    if (!$code) {
        wp_die('Instagram: no authorization code received.');
    }
    // Instagram sometimes appends "#_" — strip it defensively.
    $code = preg_replace('/#_$/', '', $code);

    /* Step 1 — exchange code -> short-lived token. */
    $res = wp_remote_post('https://api.instagram.com/oauth/access_token', array(
        'timeout' => 15,
        'body'    => array(
            'client_id'     => TERRANOVA_IG_APP_ID,
            'client_secret' => TERRANOVA_IG_APP_SECRET,
            'grant_type'    => 'authorization_code',
            'redirect_uri'  => TERRANOVA_IG_REDIRECT_URI,
            'code'          => $code,
        ),
    ));
    if (is_wp_error($res) || (int) wp_remote_retrieve_response_code($res) !== 200) {
        wp_die('Instagram: token exchange failed. ' . esc_html(terranova_ig_error_text($res)));
    }

    $short = json_decode(wp_remote_retrieve_body($res), true);
    if (isset($short['data'][0])) { // response may be nested
        $short = $short['data'][0];
    }
    $short_token = $short['access_token'] ?? '';
    $user_id     = $short['user_id'] ?? '';
    if (!$short_token) {
        wp_die('Instagram: no access token in exchange response.');
    }

    /* Step 2 — exchange short-lived -> long-lived (60 days). */
    $url = add_query_arg(
        array(
            'grant_type'    => 'ig_exchange_token',
            'client_secret' => TERRANOVA_IG_APP_SECRET,
            'access_token'  => $short_token,
        ),
        TERRANOVA_IG_GRAPH_HOST . '/access_token'
    );
    $res = wp_remote_get($url, array('timeout' => 15));
    if (is_wp_error($res) || (int) wp_remote_retrieve_response_code($res) !== 200) {
        wp_die('Instagram: long-lived token exchange failed. ' . esc_html(terranova_ig_error_text($res)));
    }

    $long = json_decode(wp_remote_retrieve_body($res), true);
    if (empty($long['access_token'])) {
        wp_die('Instagram: no long-lived token in response.');
    }

    terranova_ig_store_token($long['access_token'], $long['expires_in'] ?? 5184000);

    /* Step 3 — resolve & store the IG user id (nice to have; /me/media works without it). */
    if (!$user_id) {
        $me = wp_remote_get(add_query_arg(
            array(
                'fields'       => 'user_id,username',
                'access_token' => $long['access_token'],
            ),
            TERRANOVA_IG_GRAPH_HOST . '/me'
        ), array('timeout' => 15));
        if (!is_wp_error($me) && (int) wp_remote_retrieve_response_code($me) === 200) {
            $me      = json_decode(wp_remote_retrieve_body($me), true);
            $user_id = $me['user_id'] ?? '';
        }
    }
    if ($user_id) {
        update_option(TERRANOVA_IG_OPT_USER_ID, $user_id, false);
    }

    wp_die(
        'Instagram connected successfully. You can close this window.',
        'Instagram connected',
        array('response' => 200)
    );
}
