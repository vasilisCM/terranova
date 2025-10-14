<?php get_header(); ?>

<main>
  <section class="first-section hero">
    <div class="boxed centered">
      <h1><?php the_title(); ?></h1>
      <div><?php echo get_the_date('d M Y'); ?></div>
      <div>
        <?php the_excerpt(); ?>
      </div>
      <div>
        <?php
        if (has_post_thumbnail()) : ?>
          <img src="<?php the_post_thumbnail_url('full'); ?>">
        <?php endif; ?>
      </div>
    </div>
  </section>

  <section class="basic last-section">
    <div class="boxed centered">
      <?php the_content(); ?>
    </div>
  </section>
</main>

<?php get_footer(); ?>