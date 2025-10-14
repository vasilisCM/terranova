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

  <section class="basic">
    <div class="boxed centered">
      <h2>Carousel</h2>
      <!-- Carousel  -->
      <?php include 'components/carousel.php'; ?>
    </div>
  </section>

  <section class="basic">
    <div class="boxed centered">
      <h2>Tabs</h2>
      <!-- Tabs  -->
      <?php include 'components/tabs.php'; ?>
    </div>
  </section>

  <section class="basic">
    <div class="boxed centered">
      <h2>Accordion</h2>
      <!-- Accordion  -->
      <?php include 'components/accordion.php'; ?>
    </div>
  </section>

  <section class="last-section">
    <div class="boxed centered">
      <h2>Gallery (with Lightbox)</h2>
      <!-- Gallery  -->
      <?php include 'components/gallery.php'; ?>
    </div>
  </section>
</main>

<?php get_footer(); ?>