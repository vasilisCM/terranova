<footer class="footer">
  <div class="footer__container boxed centered">
    <!-- Logo -->
    <div class="footer__logo-container">
      <a href="<?php echo site_url(); ?>">
        <img src="<?php echo get_template_directory_uri() . '/./assets/img/logo.svg'; ?>" alt="">
      </a>
    </div>

    <!-- Footer Menu -->
    <div>
      <h3>
        <?php echo get_bloginfo('name') ?>
      </h3>
      <nav class="footer-menu">
        <?php
        wp_nav_menu(
          array(
            'menu' => "footer",
            'container' => '',
            'theme_location' => "footer",
            'items_wrap' => '<ul id="" class="footer-menu__list">%3$s</ul>'
          )
        );
        ?>
      </nav>
    </div>

    <!-- Contact Info -->
    <div>
      <h3>
        Πληροφορίες
      </h3>
      <ul>
        <li>
          <a href="https://maps.app.goo.gl/p694Q2tcT5Y7QYfr5" target="_blank">Some Place, Some City</a>
        </li>
        <li>
          Tel.
          <a href="tel:2295029965">22950-29965</a>
        </li>
      </ul>
    </div>

  </div>

  <div class="boxed centered">
    <div>
      <span>© <?php echo date('Y'); ?> <?php echo get_bloginfo('name'); ?>. All Rights Reserved.</span>
      <span>
        Created by
        <a href="https://conceptmaniax.gr/" target="_blank">ConceptManiax</a>
      </span>

      <!-- Legal Menu  -->
      <nav>
        <?php
        wp_nav_menu(
          array(
            'menu' => "legal",
            'container' => '',
            'theme_location' => "legal",
            'items_wrap' => '<ul id="" class="">%3$s</ul>'
          )
        );
        ?>
      </nav>
    </div>
  </div>

  <!-- Reel  -->
  <div class="reel"></div>

  <!-- Loader  -->
  <?php include 'components/loader.php';
  ?>

</footer>

<div class="dropdown-menu-overlay"></div>

<?php wp_footer(); ?>
</body>

</html>