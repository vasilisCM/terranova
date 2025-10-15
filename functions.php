<?php

// API Modules
include_once(get_template_directory() . '/api/load-more-posts.php');

// Menus
function theme_menus()
{
  $locations = array(
    'main_menu_1' => "Main Menu 1",
    'main_menu_2' => "Main Menu 2",
    'footer' => "Footer",
    'legal' => "Legal",
  );
  register_nav_menus($locations);
}
add_action('init', 'theme_menus');


// Custom Post Types
function create_custom_post_types()
{

  // Name
  register_post_type(
    'product',
    array(
      'labels'      => array(
        'name'          => __('Products'),
        'singular_name' => __('Product'),
      ),
      'public'      => true,
      'has_archive' => true,
      'rewrite'     => array('slug' => 'products'),
      'supports'    => array('title', 'editor', 'thumbnail', 'excerpt', 'revisions'),
      'menu_icon'   => 'dashicons-products',
    )
  );

  // Taxonomy - Categories
  register_taxonomy('product_categories', 'product', array(
    'labels' => array(
      'name'          => __('Product Categories'),
      'singular_name' => __('Product Category'),
      'search_items'  => __('Search Product Categories'),
      'all_items'     => __('All Product Categories'),
      'edit_item'     => __('Edit Product Category'),
      'update_item'   => __('Update Product Category'),
      'add_new_item'  => __('Add New Product Category'),
      'new_item_name' => __('New Product Category Name'),
      'menu_name'     => __('Categories'),
    ),
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => array(
      'slug' => 'product-categories',
      'hierarchical' => true
    ),
    'hierarchical'      => true,
  ));

  // Taxonomy - Tags
  register_taxonomy('product_tags', 'product', array(
    'labels' => array(
      'name'          => __('Product Tags'),
      'singular_name' => __('Product Tag'),
      'search_items'  => __('Search Product Tags'),
      'all_items'     => __('All Product Tags'),
      'edit_item'     => __('Edit Product Tag'),
      'update_item'   => __('Update Product Tag'),
      'add_new_item'  => __('Add New Product Tag'),
      'new_item_name' => __('New Product Tag Name'),
      'menu_name'     => __('Tags'),
    ),
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => array('slug' => 'product-tags'),
    'hierarchical'      => false,
  ));
}
add_action('init', 'create_custom_post_types');

// Body class for Pages
function custom_body_classes($classes)
{
  if (is_page()) {
    $template_file = get_page_template_slug();

    if ($template_file) {
      //  Template file name (without extension)
      $classes[] = basename($template_file, '.php');
    }
  }

  return $classes;
}
add_filter('body_class', 'custom_body_classes');



// CSS
function load_css()
{
  wp_enqueue_style('main', get_template_directory_uri() . '/src/css/main.css');
  wp_enqueue_style('temp', get_template_directory_uri() . '/src/css/temp.css');
}
add_action('wp_enqueue_scripts', 'load_css');


// Javascript
function load_js_libraries()
{
  wp_enqueue_script('barba', get_template_directory_uri() . '/src/js/libraries/barba.min.js', array(), false, true);
  wp_enqueue_script('Draggable', get_template_directory_uri() . '/src/js/libraries/Draggable.min.js', array(), false, true);
  wp_enqueue_script('gsap', get_template_directory_uri() . '/src/js/libraries/gsap.min.js', array(), false, true);
  wp_enqueue_script('imagesloaded', get_template_directory_uri() . '/src/js/libraries/imagesloaded.pkgd.min.js', array(), false, true);
  wp_enqueue_script('lenis', get_template_directory_uri() . '/src/js/libraries/lenis.min.js', array(), false, true);
  wp_enqueue_script('glide', get_template_directory_uri() . '/src/js/libraries/glide.min.js', array(), false, true);
  wp_enqueue_script('ScrollTrigger', get_template_directory_uri() . '/src/js/libraries/ScrollTrigger.min.js', array(), false, true);
  wp_enqueue_script('SplitText', get_template_directory_uri() . '/src/js/libraries/SplitText.min.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'load_js_libraries');


function load_js()
{
  // Global JS
  wp_enqueue_script('main', get_template_directory_uri() . '/dist/global.bundle.js', array(), false, true);
  wp_enqueue_script('globalAfterLoader', get_template_directory_uri() . '/dist/globalAfterLoader.bundle.js', array(), false, true);


  // Localize the script with the WordPress AJAX object
  wp_localize_script('main', 'wordpressObject', array('ajaxUrl' => admin_url('admin-ajax.php')));

  // Home Page
  if (is_front_page()) {
    wp_enqueue_script('home', get_template_directory_uri() . '/dist/home.bundle.js', array(), null, true);
  }

  // Posts Page
  elseif (is_home()) {
    wp_enqueue_script('posts', get_template_directory_uri() . '/dist/posts.bundle.js', array(), null, true);
  }

  // Single
  elseif (is_singular('post')) {
    wp_enqueue_script('single', get_template_directory_uri() . '/dist/single.bundle.js', array(), null, true);
  }

  // About
  elseif (is_page_template('about.php')) {
    wp_enqueue_script('about', get_template_directory_uri() . '/dist/about.bundle.js', array(), null, true);
  }

  // Contact
  elseif (is_page_template('contact.php')) {
    wp_enqueue_script('contact', get_template_directory_uri() . '/dist/contact.bundle.js', array(), null, true);
  }
}
add_action('wp_enqueue_scripts', 'load_js');
