<?php /* Template Name: Contact */ ?>
<?php get_header(); ?>

<?php
// Get all distributors data
$distributors = get_field('distributors', 'option');
?>

<main
  data-barba="container"
  data-barba-namespace="contact">


  <section class="first-section no-bottom-padding">

    <div class="boxed centered relative">

      <!-- Hero  -->
      <div class="basic-section hero">
        <div class="hero__container">
          <div class="hero__text-container">
            <h1 class="heading lowercase">
              <?php the_title(); ?>
            </h1>
            <div class="text">
              <?php the_content(); ?>
            </div>
          </div>
        </div>
      </div>

      <!-- Info  -->
      <div class="contact-info">
        <div class="contact-info__container">
          <div class="contact-info__text-grid">
            <div>
              <div class="contact__body">
                <form data-multi-email-form action="">
                  <label class="input light lowercase" for=""><?php _e('Select your Country', 'terranova'); ?></label>
                  <select data-country class="input light capitalize">
                    <?php if ($distributors): ?>
                      <?php foreach ($distributors as $distributor): ?>
                        <?php
                        $country_name = $distributor['country'];
                        if ($country_name) {
                          $value = strtolower($country_name);
                          $value = str_replace(' ', '', $value);
                          $value = str_replace(',', '', $value);
                        ?>
                          <option value="<?php echo esc_attr($value) ?>"><?php echo esc_html($country_name) ?></option>
                        <?php } ?>
                      <?php endforeach; ?>
                    <?php else: ?>
                      <option value="">No countries available</option>
                    <?php endif; ?>
                  </select>
                </form>
              </div>
            </div>

            <!-- Render all distributor info blocks -->
            <?php if ($distributors): ?>
              <?php $counter = 0; ?>
              <?php foreach ($distributors as $distributor): ?>
                <?php
                $country_name = $distributor['country'];
                if ($country_name) {
                  $value = strtolower($country_name);
                  $value = str_replace(' ', '', $value);
                  $value = str_replace(',', '', $value);
                  $counter++;
                ?>
                  <div class="contact-info-box text <?php echo $counter === 1 ? '' : 'hidden' ?>" data-country-info="<?php echo esc_attr($value) ?>">
                    <p class="contact-info-box__item uppercase bold">
                      <?php echo esc_html($distributor['name'] ?? '') ?>
                    </p>
                    <div class="contact-info-box__item">
                      <span class="contact-info-box__link">
                        <?php echo esc_html($distributor['location']['label'] ?? '') ?>
                      </span>
                    </div>
                    <?php if (!empty($distributor['tel']['label'])): ?>
                      <span class="contact-info-box__item">
                        Tel:
                        <a
                          href="tel:<?php echo esc_attr($distributor['tel']['link']) ?>"
                          class="contact-info-box__link">
                          <?php echo esc_html($distributor['tel']['label']) ?>
                        </a>
                      </span>
                      <br />
                    <?php endif; ?>
                    <br />
                    <span class="contact-info-box__item">Email:
                      <a href="<?php echo $distributor['email'] ? 'mailto:' . esc_attr($distributor['email']) : '#' ?>" class="contact-info-box__link">
                        <?php echo esc_html($distributor['email'] ?? '') ?>
                      </a>
                      <br />
                      <?php if ($distributor['website']): ?>
                        <a
                          href="<?php echo esc_url($distributor['website']) ?>"
                          class="contact-info-box__link contact-info-box__link--accent"
                          target="_blank"
                          rel="noopener">
                        <?php endif; ?>
                    </span>
                  </div>
                <?php } ?>
              <?php endforeach; ?>
            <?php endif; ?>
          </div>
        </div>
      </div>

      <div class="contact-img absolute inline-padding">
        <img src="/wp-content/uploads/2026/05/contact-globe.svg" alt="globe" class="centered">
      </div>

    </div>


  </section>




  <!-- Custom Cursor  -->
  <?php include 'components/custom-cursor.php'; ?>

  <!-- Instagram  -->
  <?php include 'components/instagram.php'; ?>

</main>



<?php get_footer(); ?>