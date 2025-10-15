<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <?php wp_head(); ?>
</head>

<body <?php body_class('body'); ?>>

  <!-- Header  -->
  <header class="header header--scroll">
    <div class="header__container boxed centered">

      <!-- Hamburger  -->
      <div class="hamburger header__hamburger">
        <div class="hamburger__top"></div>
        <div class="hamburger__bottom"></div>
      </div>

      <!-- Main Menu 1 -->
      <nav class="main-menu main-menu-1">
        <?php
        wp_nav_menu(
          array(
            'menu' => 'main_menu_1',
            'container' => '',
            'theme_location' => 'main_menu_1',
            'items_wrap' => '<ul id="" class="main-menu__list ">%3$s</ul>'
          )
        );
        ?>
      </nav>

      <!-- Logo  -->
      <div class="header__logo-container">
        <a href="/">
          <img
            src="<?php echo get_template_directory_uri() . '/./assets/img/logo.svg'; ?>"
            alt=""
            class="logo header__logo" />
        </a>
      </div>

      <!-- Main Menu 2 -->
      <nav class="main-menu main-menu-2">
        <?php
        wp_nav_menu(
          array(
            'menu' => 'main_menu_2',
            'container' => '',
            'theme_location' => 'main_menu_2',
            'items_wrap' => '<ul id="" class="main-menu__list ">%3$s</ul>'
          )
        );
        ?>
      </nav>

      <!-- Dropdown Background  -->
      <div class="main-menu__dropdown-background"></div>

      <?php include 'components/search-modal.php'; ?>
    </div>
  </header>