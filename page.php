<?php get_header(); ?>

<main>
  <section class="first-section hero last-section">
    <div class="boxed centered">
      <h1><?php the_title(); ?></h1>
      <div>
        <?php the_content(); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>