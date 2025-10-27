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
      <!-- Not the typical structure. Make sure it works  -->
      <form action="/action_page.php" class="newsletter__form">
        <div class="newsletter__inputs">
          <input
            type="text"
            placeholder="Your email"
            name="mail"
            required
            class="input newsletter__email" />
          <label class="newsletter__terms text-s custom-checkbox">
            <input
              type="checkbox"
              name="subscribe"
              class="newsletter__terms-checkbox" />
            <span class="custom-checkbox__checkmark"></span>
            <?php echo __('Agree with terms and conditions', 'terranova'); ?>
          </label>
          <button
            type="submit"
            class="lowercase newsletter__button text-button link link--arrow">
            <?php echo __('Submit', 'terranova'); ?>
          </button>
        </div>
      </form>
    </div>
    <!-- Social  -->
    <div class="footer__social">
      <h3 class="heading-m lowercase medium"><?php echo $social['heading']; ?></h3>
      <div class="footer__social-links text-ml uppercase">
        <a href="<?php echo $social['facebook']; ?>" target="_blank">Facebook</a>
        <a href="<?php echo $social['instagram']; ?>" target="_blank">Instagram</a>
      </div>
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

    <!-- Contact Info -->
    <div class="footer__contact-info">
      <h3 class="text-ml uppercase"><?php echo __('Contact', 'terranova'); ?></h3>
      <ul class="footer__contact-info-list text">
        <li class="footer__contact-info-item"><?php echo $company; ?></li>
        <li class="footer__contact-info-item">
          <a href="<?php echo $location['link']; ?>" class="footer__contact-info-link"><?php echo $location['label']; ?>
          </a>
        </li>
        <li class="footer__contact-info-item">
          <?php echo __('Email', 'terranova'); ?>:
          <a href="mailto:<?php echo $email; ?>" class="footer__contact-info-link">
            <?php echo $email; ?>
          </a>
        </li>
        <li class="footer__contact-info-item">
          <?php echo __('Tel', 'terranova'); ?>:
          <a href="<?php echo $tel['link']; ?>" class="footer__contact-info-link"><?php echo $tel['label']; ?></a>
        </li>
      </ul>
      <a
        href="/contact"
        class="footer__contact-info-button text-button link link--arrow"><?php echo __('View all Partners', 'terranova'); ?></a>
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