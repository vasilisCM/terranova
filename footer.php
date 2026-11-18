<!-- Footer  -->
<footer class="footer">
  <?php
  $contact_info = get_field('contact_info', 'option');
  $company = $contact_info['company'];
  $location = $contact_info['location'];
  $tel = $contact_info['tel'];
  $email = $contact_info['email'];

  $social = get_field('social', 'option');
  $newsletter =  get_field('newsletter', 'option');
  ?>
  <div class="footer__container boxed centered">
    <!-- Newsletter  -->
    <div class="newsletter footer__newsletter">
      <h3 class="heading-m lowercase medium"><?php echo $newsletter['heading']; ?></h3>
      <p class="text newsletter__description">
        <?php echo $newsletter['text']; ?>
      </p>
      <!-- Brevo form: markup is edited in wp-admin → Brevo → Forms → "Default Form" (copy in inc/brevo-form-markup.html) -->
      <?php echo do_shortcode('[sibwp_form id=1]'); ?>
    </div>


    <!-- Footer Menu -->
    <div class="footer__menu">
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

    <!-- Social  -->
    <div class="footer__social">
      <h3 class="heading-m lowercase medium"><?php echo $social['heading']; ?></h3>
      <div class="footer__social-links text-ml uppercase">
        <a href="<?php echo $social['facebook']; ?>" target="_blank" class="ic-social ic-social--facebook"></a>
        <a href="<?php echo $social['instagram']; ?>" target="_blank" class="ic-social ic-social--instagram"></a>
        <a href="<?php echo $social['linkedin']; ?>" target="_blank" class="ic-social ic-social--linkedin"></a>
      </div>
    </div>


  </div>

  <!-- Copyrights -->
  <div class="boxed centered text-s footer__bottom-bar">
    <span class="text-s footer__copyrights">&copy; <?php echo date('Y'); ?> <?php echo get_bloginfo('name'); ?>.
    </span>
    <span class="footer__created-by">
      Website by
      <a
        href="https://conceptmaniax.gr/"
        target="_blank"
        class="link--line">ConceptManiax</a>
    </span>
  </div>

  <!-- Marquee  -->
  <?php include 'components/marquee.php'; ?>


</footer>

<!-- Loader  -->
<?php include 'components/loader.php'; ?>
<div class="dropdown-menu-overlay"></div>

<?php wp_footer(); ?>
</body>

</html>