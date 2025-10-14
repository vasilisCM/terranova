<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <?php wp_head(); ?>
</head>

<body <?php body_class('body'); ?>>
  <header class="header">
    <div class="header__container boxed centered">

      <div class="header__logo-container">
        <a href="<?php echo site_url(); ?>">
          <img src="<?php echo get_template_directory_uri() . '/./assets/img/logo.svg'; ?>" alt="">
        </a>
      </div>



      <!-- Main Menu -->
      <nav class="main-menu main-menu--closed">

        <?php
        wp_nav_menu(
          array(
            'menu' => "main",
            'container' => '',
            'theme_location' => "main",
            'items_wrap' => '<ul id="" class="main-menu__list" data-lenis-prevent>%3$s</ul>'
          )
        );
        ?>
      </nav>

      <!-- Search Form -->
      <form role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>" class="search-form">
        <button type="submit" class="search-form__button" aria-label="<?php echo esc_attr_x('Search', 'submit button', 'terranova'); ?>"></button>
        <input type="search" class="search-form__input" placeholder="<?php echo esc_attr_x('Search', 'placeholder', 'terranova'); ?>" value="<?php echo get_search_query(); ?>" name="s" title="<?php echo esc_attr_x('Search for:', 'label', 'terranova'); ?>">
      </form>

      <!-- Hamburger  -->
      <div class="hamburger" pressed="false">
        <div class="main-menu__mobile-button hamburger__button"></div>
      </div>


    </div>
  </header>