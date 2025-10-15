<?php get_header(); ?>

<main>
  <section class="first-section hero">
    <div class="boxed centered">
      <h1>Hello <?php the_title(); ?></h1>
      <p>Sass is compiling live, and you can also use JS modules.</p>
      <div>
        <?php
        $featured_image = get_the_post_thumbnail_url(get_the_ID(), 'full');
        if ($featured_image) { ?>
          <img src="<?php echo $featured_image ?>" alt="">
        <?php } ?>
      </div>
      <a href=""><button>More</button></a>
    </div>
  </section>



</main>

<?php get_footer(); ?>