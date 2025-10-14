<?php /* Template Name: Contact */ ?>
<?php get_header(); ?>

<main>
  <!-- Hero  -->
  <?php include 'components/hero.php'; ?>

  <section class="basic">
    <div class="boxed centered">
      <h2>Basic Section</h2>
    </div>
  </section>

  <section class="basic last-section">
    <div class="boxed centered">
      <?php echo do_shortcode('[contact-form-7 id="e725d8e" title="Contact form 1"]'); ?>
    </div>
  </section>
</main>

<?php get_footer(); ?>