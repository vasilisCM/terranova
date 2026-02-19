<?php get_header(); ?>

<main data-barba="container" data-barba-namespace="404">
  <section class="first-section hero last-section text-center">
    <div class="boxed centered text-container text-container--centered">
      <h1>Error 404</h1>
      <p class="text-center">Page was not found</p>
      <div class="centered">

        <a href="<?php echo site_url(); ?>" class="button button--white">
          <span class="text-button button__text">Back to Home</span>
        </a>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>