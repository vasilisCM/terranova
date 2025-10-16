<?php /* Template Name: Contact */ ?>
<?php get_header(); ?>

<?php
// Get all distributors data
$distributors = get_field('distributors', 'option');
?>

<main>
  <!-- Hero  -->
  <?php include 'components/hero.php'; ?>

  <!-- Info  -->
  <section class="contact-info boxed centered">
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
                <span class="contact-info-box__item">Tel:
                  <a href="<?php echo $distributor['tel']['link'] ? 'tel:' . esc_attr($distributor['tel']['link']) : '#' ?>" class="contact-info-box__link">
                    <?php echo esc_html($distributor['tel']['label'] ?? '') ?>
                  </a>
                </span>
                <br />
                <span class="contact-info-box__item">Email:
                  <a href="<?php echo $distributor['email'] ? 'mailto:' . esc_attr($distributor['email']) : '#' ?>" class="contact-info-box__link">
                    <?php echo esc_html($distributor['email'] ?? '') ?>
                  </a>
                  <br />
                  <?php if ($distributor['website']): ?>
                    <a href="https://<?php echo esc_attr($distributor['website']) ?>" class="contact-info-box__link contact-info-box__link--accent">
                      <?php echo esc_html($distributor['website']) ?>
                    </a>
                  <?php endif; ?>
                </span>
              </div>
            <?php } ?>
          <?php endforeach; ?>
        <?php endif; ?>
      </div>
    </div>
  </section>


</main>



<?php get_footer(); ?>