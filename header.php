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

      <!-- Search Form -->
      <div class="search">
        <div class="search__toggle search__toggle--open"></div>
        <div class="search__toggle search__toggle--close"></div>
        <div class="search__background"></div>
        <div class="search__modal-container">
          <div class="search__modal">
            <form
              role="search"
              class="search-form"
              method="get"
              action=""
              data-open="false">
              <label class="search-form__label">
                <input
                  type="search"
                  class="search-form__input search-field"
                  placeholder=""
                  value=""
                  name="s"
                  title="Search for:" />
              </label>
              <button type="button" class="search-form__button"></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>