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

// Custom Walker for injecting mega menu images
class Mega_Menu_Walker extends Walker_Nav_Menu
{

  protected $mega_menu_parent_id = 51;

  protected function get_mega_menu_markup()
  {
    $component_path = get_template_directory() . '/components/mega-menu-images.php';

    if (!file_exists($component_path)) {
      return '';
    }

    ob_start();
    include $component_path;

    return ob_get_clean();
  }

  public function end_el(&$output, $item, $depth = 0, $args = array())
  {
    if ((int) $item->ID === (int) $this->mega_menu_parent_id && $depth === 0) {
      $output .= $this->get_mega_menu_markup();
    }

    parent::end_el($output, $item, $depth, $args);
  }
}


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
}
add_action('init', 'create_custom_post_types');

// Set posts per page for product archives
function set_products_per_page($query)
{
  if (!is_admin() && $query->is_main_query()) {
    if (is_post_type_archive('product') || is_tax('product_categories')) {
      $query->set('posts_per_page', 3);
    }
  }
}
add_action('pre_get_posts', 'set_products_per_page');

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



  // Localize the script with the WordPress AJAX object
  wp_localize_script('main', 'wordpressObject', array(
    'siteUrl' => home_url(),
    'themeUrl' => get_template_directory_uri(),
    'ajaxUrl' => admin_url('admin-ajax.php')
  ));

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

  // Archive Product or Category Product
  elseif (is_post_type_archive('product') || is_tax('product_categories')) {
    wp_enqueue_script('archiveProduct', get_template_directory_uri() . '/dist/archiveProduct.bundle.js', array(), null, true);
  }

  // Single Product
  elseif (is_singular('product')) {
    wp_enqueue_script('singleProduct', get_template_directory_uri() . '/dist/singleProduct.bundle.js', array(), null, true);
  }


  // About
  elseif (is_page_template('about.php')) {
    wp_enqueue_script('about', get_template_directory_uri() . '/dist/about.bundle.js', array(), null, true);
  }

  // Skin Nutrition
  elseif (is_page_template('skin-nutrition.php') || is_page_template('ingredients.php') || is_page_template('synergy.php') || is_page_template('additive-free.php') || is_page_template('fresh-freeze.php') || is_page_template('advanced-fermentation.php')) {
    wp_enqueue_script('skinNutrition', get_template_directory_uri() . '/dist/skinNutrition.bundle.js', array(), null, true);
  }

  // Next Gen
  elseif (is_page_template('next-gen.php')) {
    wp_enqueue_script('nextGen', get_template_directory_uri() . '/dist/nextGen.bundle.js', array(), null, true);
  }


  // Contact
  elseif (is_page_template('contact.php')) {
    wp_enqueue_script('contact', get_template_directory_uri() . '/dist/contact.bundle.js', array(), null, true);
  }
}
add_action('wp_enqueue_scripts', 'load_js');
