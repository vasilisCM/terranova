<?php
/**
 * Instagram feed: server-side token storage, self-refresh, and a cached
 * public proxy — so no Instagram access token is ever shipped to the browser.
 *
 * Uses "Instagram API with Instagram Login" (graph.instagram.com), which
 * requires the target Instagram account to be a Business or Creator account
 * (a personal account cannot authorize this API — convert it for free in
 * the Instagram app under Settings > Account type first, if needed).
 *
 * One-time setup:
 * 1. Create a Meta app at https://developers.facebook.com/apps, then add
 *    the "Instagram" product (Instagram API with Instagram Login).
 * 2. In that product's settings, set the Valid OAuth Redirect URI to the
 *    exact URL printed by terranova_ig_redirect_uri() below (visit
 *    /wp-admin/admin-ajax.php?action=terranova_ig_oauth_callback with no
 *    "code" param to see the expected value echoed back, or just read it
 *    from this file: admin_url('admin-ajax.php') . '?action=terranova_ig_oauth_callback').
 * 3. Copy the app's Instagram App ID / App Secret into wp-config.php
 *    (NOT this repo):
 *      define('TERRANOVA_IG_APP_ID', '...');
 *      define('TERRANOVA_IG_APP_SECRET', '...');
 * 4. While logged into Instagram as the account you want to feature, visit
 *    once:
 *      https://api.instagram.com/oauth/authorize?client_id=<APP_ID>&redirect_uri=<REDIRECT_URI>&scope=instagram_business_basic&response_type=code
 *    Approving it redirects back to this file's callback, which exchanges
 *    the code for a 60-day token and stores it.
 *
 * After that, a daily cron job refreshes the token before it expires —
 * this file is self-sufficient from then on.
 */

function terranova_ig_app_id()
{
  return defined('TERRANOVA_IG_APP_ID') ? TERRANOVA_IG_APP_ID : '';
}

function terranova_ig_app_secret()
{
  return defined('TERRANOVA_IG_APP_SECRET') ? TERRANOVA_IG_APP_SECRET : '';
}

function terranova_ig_redirect_uri()
{
  return admin_url('admin-ajax.php') . '?action=terranova_ig_oauth_callback';
}

function terranova_ig_store_token($access_token, $expires_in_seconds)
{
  update_option('terranova_ig_access_token', $access_token, false);
  update_option('terranova_ig_token_expires_at', time() + intval($expires_in_seconds), false);
  delete_transient('terranova_ig_media_cache');
}

// Step 1: one-time OAuth callback. Exchanges Instagram's ?code= for a
// short-lived token, then immediately exchanges that for a 60-day
// long-lived token and stores it.
add_action('wp_ajax_nopriv_terranova_ig_oauth_callback', 'terranova_ig_oauth_callback');
add_action('wp_ajax_terranova_ig_oauth_callback', 'terranova_ig_oauth_callback');

function terranova_ig_oauth_callback()
{
  $code = isset($_GET['code']) ? sanitize_text_field(wp_unslash($_GET['code'])) : '';

  if (!$code) {
    wp_die(
      'This is the Instagram OAuth callback. Visit it via the authorize URL described in api/instagram.php — ' .
        'redirect URI to register with Meta: <code>' . esc_html(terranova_ig_redirect_uri()) . '</code>'
    );
  }

  $app_id = terranova_ig_app_id();
  $app_secret = terranova_ig_app_secret();

  if (!$app_id || !$app_secret) {
    wp_die('TERRANOVA_IG_APP_ID / TERRANOVA_IG_APP_SECRET are not defined in wp-config.php.');
  }

  $short_lived_response = wp_remote_post('https://api.instagram.com/oauth/access_token', [
    'body' => [
      'client_id' => $app_id,
      'client_secret' => $app_secret,
      'grant_type' => 'authorization_code',
      'redirect_uri' => terranova_ig_redirect_uri(),
      'code' => $code,
    ],
  ]);

  if (is_wp_error($short_lived_response)) {
    wp_die('Short-lived token request failed: ' . esc_html($short_lived_response->get_error_message()));
  }

  $short_lived_body = json_decode(wp_remote_retrieve_body($short_lived_response), true);

  if (empty($short_lived_body['access_token'])) {
    wp_die('Failed to get a short-lived token. Instagram said: ' . esc_html(wp_remote_retrieve_body($short_lived_response)));
  }

  $long_lived_response = wp_remote_get(add_query_arg([
    'grant_type' => 'ig_exchange_token',
    'client_secret' => $app_secret,
    'access_token' => $short_lived_body['access_token'],
  ], 'https://graph.instagram.com/access_token'));

  if (is_wp_error($long_lived_response)) {
    wp_die('Long-lived token exchange failed: ' . esc_html($long_lived_response->get_error_message()));
  }

  $long_lived_body = json_decode(wp_remote_retrieve_body($long_lived_response), true);

  if (empty($long_lived_body['access_token'])) {
    wp_die('Failed to get a long-lived token. Instagram said: ' . esc_html(wp_remote_retrieve_body($long_lived_response)));
  }

  terranova_ig_store_token($long_lived_body['access_token'], $long_lived_body['expires_in']);

  wp_die(
    'Instagram connected successfully. The token refreshes itself automatically from now on — ' .
      'you will not need to repeat this step unless the app connection is revoked on Instagram\'s side.'
  );
}

// Step 2: daily cron — refreshes the stored token once it's within 5 days
// of expiring (long-lived tokens last ~60 days), so it never needs to be
// manually regenerated.
add_action('terranova_ig_refresh_token_event', 'terranova_ig_maybe_refresh_token');

function terranova_ig_maybe_refresh_token()
{
  $token = get_option('terranova_ig_access_token');
  $expires_at = (int) get_option('terranova_ig_token_expires_at', 0);

  if (!$token) {
    return;
  }

  if ($expires_at - time() > 5 * DAY_IN_SECONDS) {
    return;
  }

  $response = wp_remote_get(add_query_arg([
    'grant_type' => 'ig_refresh_token',
    'access_token' => $token,
  ], 'https://graph.instagram.com/refresh_access_token'));

  if (is_wp_error($response)) {
    error_log('[Instagram token refresh] ' . $response->get_error_message());
    return;
  }

  $body = json_decode(wp_remote_retrieve_body($response), true);

  if (empty($body['access_token'])) {
    error_log('[Instagram token refresh] Unexpected response: ' . wp_remote_retrieve_body($response));
    return;
  }

  terranova_ig_store_token($body['access_token'], $body['expires_in']);
}

add_action('init', function () {
  if (!wp_next_scheduled('terranova_ig_refresh_token_event')) {
    wp_schedule_event(time(), 'daily', 'terranova_ig_refresh_token_event');
  }
});

add_action('switch_theme', function () {
  wp_clear_scheduled_hook('terranova_ig_refresh_token_event');
});

// Step 3: the actual frontend-facing endpoint. Cached for an hour so
// visitor traffic never hits Instagram's own rate limits, and the raw
// token never reaches the browser. Response shape matches Instagram's own
// `{ data: [...] }` so the frontend needs no restructuring.
add_action('wp_ajax_nopriv_terranova_ig_media', 'terranova_ig_get_media');
add_action('wp_ajax_terranova_ig_media', 'terranova_ig_get_media');

function terranova_ig_get_media()
{
  $cached = get_transient('terranova_ig_media_cache');

  if ($cached !== false) {
    wp_send_json($cached);
  }

  $token = get_option('terranova_ig_access_token');

  if (!$token) {
    wp_send_json(['data' => []]);
  }

  $response = wp_remote_get(add_query_arg([
    'fields' => 'id,media_type,media_url,thumbnail_url',
    'access_token' => $token,
  ], 'https://graph.instagram.com/me/media'));

  if (is_wp_error($response)) {
    wp_send_json(['data' => []]);
  }

  $body = json_decode(wp_remote_retrieve_body($response), true);

  if (empty($body['data'])) {
    wp_send_json(['data' => []]);
  }

  set_transient('terranova_ig_media_cache', $body, HOUR_IN_SECONDS);

  wp_send_json($body);
}
