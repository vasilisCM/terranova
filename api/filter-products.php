<?php
// AJAX API
add_action('wp_ajax_filter_products', 'custom_filter_products');
add_action('wp_ajax_nopriv_filter_products', 'custom_filter_products');

function custom_filter_products()
{
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => -1,
        'tax_query' => array('relation' => 'AND'),
        'meta_query' => array(),
    );

    // Filter by Category
    if (!empty($_POST['product-category'])) {
        $args['tax_query'][] = array(
            'taxonomy' => 'product_cat',
            'field' => 'slug',
            'terms' => sanitize_text_field($_POST['product-category']),
        );
    }

    // Filter by Attributes
    foreach ($_POST as $key => $value) {
        if (strpos($key, 'pa_') === 0 && !empty($value)) {
            $args['tax_query'][] = array(
                'taxonomy' => $key,
                'field' => 'slug',
                'terms' => sanitize_text_field($value),
            );
        }
    }

    // Filter by Price
    if (!empty($_POST['min_price']) || !empty($_POST['max_price'])) {
        $min_price = isset($_POST['min_price']) ? floatval($_POST['min_price']) : 0;
        $max_price = isset($_POST['max_price']) ? floatval($_POST['max_price']) : 999999;

        $args['meta_query'][] = array(
            'key' => '_price',
            'value' => array($min_price, $max_price),
            'compare' => 'BETWEEN',
            'type' => 'NUMERIC',
        );
    }

    // Query WooCommerce Products
    $query = new WP_Query($args);
    $products = array();
    $available_filters = array(); // Store available attribute values
    $min_price_found = PHP_INT_MAX;
    $max_price_found = 0;

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            global $product;

            $price = floatval($product->get_price());

            // Update min & max prices dynamically
            if ($price < $min_price_found) $min_price_found = $price;
            if ($price > $max_price_found) $max_price_found = $price;

            $products[] = array(
                'id' => get_the_ID(),
                'title' => get_the_title(),
                'price' => wc_price($price),
                'image' => get_the_post_thumbnail_url(get_the_ID(), 'full'),
                'price_html' => $product->get_price_html(),
                'permalink' => get_permalink(),
                'add_to_cart_html' => function_exists('woocommerce_template_loop_add_to_cart')
                    ? wc_get_template_html('loop/add-to-cart.php', array('product' => $product))
                    : '',

            );






            // Collect available attributes from filtered products
            $attributes = $product->get_attributes();
            foreach ($attributes as $attribute) {
                if ($attribute->is_taxonomy()) {
                    $terms = wp_get_post_terms($product->get_id(), $attribute->get_name());

                    if (!empty($terms)) {
                        foreach ($terms as $term) {
                            $available_filters[$attribute->get_name()][$term->slug] = $term->name;
                        }
                    }
                }
            }
        }
        wp_reset_postdata();
    }

    // Ensure unique filter values
    foreach ($available_filters as $key => $values) {
        $available_filters[$key] = array_unique($values);
    }

    // ✅ NEW: Include dynamic price range in the response
    if ($min_price_found === PHP_INT_MAX) $min_price_found = 0;
    if ($max_price_found === 0) $max_price_found = 1000; // Default fallback

    // Send JSON Response
    wp_send_json(array(
        'success' => true,
        'products' => $products,
        'available_filters' => $available_filters,
        'min_price' => $min_price_found,
        'max_price' => $max_price_found,
    ));
}
