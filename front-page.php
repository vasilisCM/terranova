<?php get_header(); ?>

<main data-barba="container"
  data-barba-namespace="home">

  <section class="hero boxed centered">
    <div class="hero__container">
      <!-- Text  -->
      <div class="hero__text-container text-container">
        <h1 class="heading-large hero__heading">
          <span class="heading-large hero__heading-span">My time</span>
          <br />
          <span class="heading-large hero__heading-span italic">My Terranova</span>
        </h1>
        <p class="text mask-text hero__description">
          The everyday meaningful gestures, rituals, acts of
          <b>self-care</b>. <br />
          The <b>#momoments</b> that add value to the wellbeing of my
          body, mind and
        </p>
      </div>
      <div class="circular-shape">
        <video
          class="circular-shape__video"
          src="<?php echo get_template_directory_uri() . '/./assets/video/home.mp4'; ?>"
          autoplay
          loop
          muted></video>

        <!-- <iframe
                class="circular-shape__video"
                src="https://www.youtube.com/watch?v=5vcAsiedvjM"
              ></iframe> -->
      </div>
    </div>
  </section>

  <!-- Diefference  -->
  <section class="products boxed centered">
    <div class="products__container">
      <!-- Text  -->
      <div class="products__text-container text-container">
        <div class="products__heading-small heading-capital mask-text">
          The Terranova Difference
        </div>
        <h2 class="products__heading mask-text">
          <!-- <span class="heading">My life is</span> -->

          <!-- Text Effects  -->
          <span class="heading italic products__text-effects">
            My life is additive free</span>
          <span class="heading italic products__text-effects">
            My life is vegan</span>
          <span class="heading italic products__text-effects">
            My life is synergistic</span>
        </h2>
        <p
          class="products__description text mask-text products__description-effects">
          My moments of self-care are free of fillers, binders or other
          additives. Instead, they are full of purity, empowering “metime”
          in the most profound and intense way.
        </p>
        <p
          class="products__description text mask-text products__description-effects">
          We are sharing this world with some other magical creatures. It
          feels good to have this kind, 100% vegan choice, it feels nice
          this “safe haven”.
        </p>
        <p
          class="products__description text mask-text products__description-effects">
          Μy Terranova moments are my super - power: A synergistic complex
          of botanicals and phytonutrient rich foods, my Μagnifood, which
          enhances the beneficial effect to its maximum.
        </p>
        <a href="">
          <button class="button products__button text-button mask-text">
            <span class="text-button button__text">Learn more </span>
          </button>
        </a>
      </div>

      <!-- Carousel  -->
      <div class="products__carousel">
        <div
          class="parallax-carousel"
          data-mouse-down-at="0"
          data-prev-percentage="0">
          <img
            class="parallax-carousel__image"
            src="<?php echo get_template_directory_uri() . '/./assets/img/home-skin-nutrition-001.webp'; ?>"
            alt=""
            draggable="false" />
          <img
            class="parallax-carousel__image"
            src="<?php echo get_template_directory_uri() . '/./assets/img/home-skin-nutrition-002.webp'; ?>"
            alt=""
            draggable="false" />
          <img
            class="parallax-carousel__image"
            src="<?php echo get_template_directory_uri() . '/./assets/img/home-skin-nutrition-003.webp'; ?>"
            alt=""
            draggable="false" />
          <img
            class="parallax-carousel__image"
            src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80"
            alt=""
            draggable="false" />
          <img
            class="parallax-carousel__image"
            src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
            draggable="false" />
          <img
            class="parallax-carousel__image"
            src="https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
            draggable="false" />
          <img
            class="parallax-carousel__image"
            src="https://images.unsplash.com/photo-1437750769465-301382cdf094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
            alt=""
            draggable="false" />
          <img
            class="parallax-carousel__image"
            src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
            alt=""
            loading="lazy"
            draggable="false" />
        </div>
      </div>
    </div>
  </section>

  <section
    class="asymmetrical-carousel asymmetrical-carousel--home centered">
    <div class="slides-container" data-asymmetrical-carousel-container>
      <div class="asymmetrical-carousel__container">
        <div
          class="asymmetrical-carousel__column asymmetrical-carousel__column--with-text"
          data-asymmetrical-carousel-slide>
          <div
            class="asymmetrical-carousel__image-container fade-in-stagger"
            draggable="true">
            <img
              src="<?php echo get_template_directory_uri() . '/./assets/img/home-asymmetrical-carousel-001.webp'; ?>"
              alt=""
              class="asymmetrical-carousel__image"
              draggable-image />
          </div>
        </div>

        <div
          class="asymmetrical-carousel__column"
          data-asymmetrical-carousel-slide>
          <div
            class="asymmetrical-carousel__image-container"
            draggable="true">
            <img
              src="<?php echo get_template_directory_uri() . '/./assets/img/home-asymmetrical-carousel-002.webp'; ?>"
              alt=""
              class="asymmetrical-carousel__image"
              draggable-image />
          </div>
        </div>

        <div
          class="asymmetrical-carousel__column"
          data-asymmetrical-carousel-slide>
          <div
            class="asymmetrical-carousel__image-container"
            draggable="true">
            <img
              src="<?php echo get_template_directory_uri() . '/./assets/img/home-asymmetrical-carousel-003.webp'; ?>"
              alt=""
              class="asymmetrical-carousel__image"
              draggable-image />
          </div>
        </div>

        <div
          class="asymmetrical-carousel__column"
          data-asymmetrical-carousel-slide>
          <div
            class="asymmetrical-carousel__image-container"
            draggable="true">
            <img
              src="<?php echo get_template_directory_uri() . '/./assets/img/home-asymmetrical-carousel-004.webp'; ?>"
              alt=""
              class="asymmetrical-carousel__image"
              draggable-image />
          </div>
        </div>

        <div
          class="asymmetrical-carousel__column"
          data-asymmetrical-carousel-slide>
          <div
            class="asymmetrical-carousel__image-container"
            draggable="true">
            <img
              src="https://plus.unsplash.com/premium_photo-1661713448585-de2a39badb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
              class="asymmetrical-carousel__image"
              draggable-image />
          </div>
        </div>

        <div
          class="asymmetrical-carousel__column"
          data-asymmetrical-carousel-slide>
          <div
            class="asymmetrical-carousel__image-container"
            draggable="true">
            <img
              src="https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt=""
              class="asymmetrical-carousel__image"
              draggable-image />
          </div>
        </div>

        <div
          class="asymmetrical-carousel__column"
          data-asymmetrical-carousel-slide>
          <div
            class="asymmetrical-carousel__image-container"
            draggable="true">
            <img
              src="https://images.unsplash.com/photo-1458544073930-041e1897663f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80"
              alt=""
              class="asymmetrical-carousel__image"
              draggable-image />
          </div>
        </div>

        <div
          class="asymmetrical-carousel__column"
          data-asymmetrical-carousel-slide>
          <div
            class="asymmetrical-carousel__image-container"
            draggable="true">
            <img
              src="https://plus.unsplash.com/premium_photo-1664474956287-5627a7303d70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
              class="asymmetrical-carousel__image"
              draggable-image />
          </div>
        </div>
      </div>
      <!-- Heading  -->
      <div class="asymmetrical-carousel__text">
        <span
          class="asymmetrical-carousel__text--dark heading-huge fx-text-huge fx-text-huge--1">
          My skin
        </span>
        <span
          class="asymmetrical-carousel__text--light italic heading-huge fx-text-huge fx-text-huge--2">
          nutrition</span>
      </div>
    </div>

    <div class="boxed centered">
      <a href="">
        <button
          class="button asymmetrical-carousel__button text-button mask-text">
          <span class="text-button button__text">Learn more </span>
        </button>
      </a>
    </div>
  </section>

  <!-- Choice  -->
  <section class="choice boxed centered">
    <div class="choice__container">
      <h2 class="choice__heading heading">My choice is</h2>
      <div class="image-on-text-hover">
        <div class="choice__placeholder-container">
          <div class="choice__placeholder">
            <img
              src="<?php echo get_template_directory_uri() . '/./assets/img/home-choice-001.png'; ?>"
              alt=""
              class="choice__placeholder-image" />
          </div>
        </div>
        <h3 class="choice__text heading-medium-small italic">
          Vitamins & Multivitamins
        </h3>
        <div class="choice__image-container">
          <img
            class="choice__image"
            src="<?php echo get_template_directory_uri() . '/./assets/img/home-asymmetrical-carousel-004.webp'; ?>"
            alt="Image" />
        </div>

        <h3 class="choice__text heading-medium-small italic">
          Life Drink
        </h3>
        <div class="choice__image-container">
          <img
            class="choice__image"
            src="<?php echo get_template_directory_uri() . '/./assets/img/home-asymmetrical-carousel-003.webp'; ?>"
            alt="Image" />
        </div>

        <h3 class="choice__text heading-medium-small italic">
          Sports & Fitness
        </h3>
        <div class="choice__image-container">
          <img
            class="choice__image"
            src="<?php echo get_template_directory_uri() . '/./assets/img/home-asymmetrical-carousel-002.webp'; ?>"
            alt="Image" />
        </div>

        <h3 class="choice__text heading-medium-small italic">Serum</h3>
        <div class="choice__image-container">
          <img
            class="choice__image"
            src="<?php echo get_template_directory_uri() . '/./assets/img/home-asymmetrical-carousel-001.webp'; ?>"
            alt="Image" />
        </div>

        <h3 class="choice__text heading-medium-small italic">
          Green Child
        </h3>
        <div class="choice__image-container">
          <img
            class="choice__image"
            src="<?php echo get_template_directory_uri() . '/./assets/img/home-skin-nutrition-001.webp'; ?>"
            alt="Image" />
        </div>
      </div>
      <a href="">
        <button class="button choice__button text-button mask-text">
          <span class="text-button button__text">View all </span>
        </button>
      </a>
    </div>
  </section>

  <!-- Blog  -->
  <section class="blog-home">
    <h2 class="heading boxed centered">My blog</h2>
    <!-- Archive  -->
    <div class="blog-home__archive-container">
      <div class="blog-home__archive">
        <!-- Posts  -->
        <article class="blog-home__post">
          <div class="blog-home__image-container">
            <img
              class="blog-home__image"
              src="https://plus.unsplash.com/premium_photo-1664474956287-5627a7303d70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
              draggable-image />
          </div>
          <div class="blog-home__text-container">
            <a href="" class="blog-home__category heading-capital-small">Vitamins & Multivitamins</a>
            <h3 class="blog-home__heading heading-small">
              With an entire world of natural ingredients to source from
            </h3>
            <a href="" class="link link--arrow blog-home__link">Read more</a>
          </div>
        </article>

        <article class="blog-home__post">
          <div class="blog-home__image-container">
            <img
              class="blog-home__image"
              src="https://plus.unsplash.com/premium_photo-1661713448585-de2a39badb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
              draggable-image />
          </div>
          <div class="blog-home__text-container">
            <a href="" class="blog-home__category heading-capital-small">Vitamins & Multivitamins</a>
            <h3 class="blog-home__heading heading-small">
              With an entire world of natural ingredients to source from
            </h3>
            <a href="" class="link link--arrow blog-home__link">Read more</a>
          </div>
        </article>

        <article class="blog-home__post">
          <div class="blog-home__image-container">
            <img
              class="blog-home__image"
              src="https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt=""
              draggable-image />
          </div>
          <div class="blog-home__text-container">
            <a href="" class="blog-home__category heading-capital-small">Vitamins & Multivitamins</a>
            <h3 class="blog-home__heading heading-small">
              With an entire world of natural ingredients to source from
            </h3>
            <a href="" class="link link--arrow blog-home__link">Read more</a>
          </div>
        </article>

        <article class="blog-home__post">
          <div class="blog-home__image-container">
            <img
              class="blog-home__image"
              src="https://images.unsplash.com/photo-1458544073930-041e1897663f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80"
              alt=""
              draggable-image />
          </div>
          <div class="blog-home__text-container">
            <a href="" class="blog-home__category heading-capital-small">Vitamins & Multivitamins</a>
            <h3 class="blog-home__heading heading-small">
              With an entire world of natural ingredients to source from
            </h3>
            <a href="" class="link link--arrow blog-home__link">Read more</a>
          </div>
        </article>

        <article class="blog-home__post">
          <div class="blog-home__image-container">
            <img
              class="blog-home__image"
              src="https://plus.unsplash.com/premium_photo-1664474956287-5627a7303d70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
              draggable-image />
          </div>
          <div class="blog-home__text-container">
            <a href="" class="blog-home__category heading-capital-small">Vitamins & Multivitamins</a>
            <h3 class="blog-home__heading heading-small">
              With an entire world of natural ingredients to source from
            </h3>
            <a href="" class="link link--arrow blog-home__link">Read more</a>
          </div>
        </article>

        <article class="blog-home__post">
          <div class="blog-home__image-container">
            <img
              class="blog-home__image"
              src="https://plus.unsplash.com/premium_photo-1661713448585-de2a39badb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
              draggable-image />
          </div>
          <div class="blog-home__text-container">
            <a href="" class="blog-home__category heading-capital-small">Vitamins & Multivitamins</a>
            <h3 class="blog-home__heading heading-small">
              With an entire world of natural ingredients to source from
            </h3>
            <a href="" class="link link--arrow blog-home__link">Read more</a>
          </div>
        </article>

        <article class="blog-home__post">
          <div class="blog-home__image-container">
            <img
              class="blog-home__image"
              src="https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt=""
              draggable-image />
          </div>
          <div class="blog-home__text-container">
            <a href="" class="blog-home__category heading-capital-small">Vitamins & Multivitamins</a>
            <h3 class="blog-home__heading heading-small">
              With an entire world of natural ingredients to source from
            </h3>
            <a href="" class="link link--arrow blog-home__link">Read more</a>
          </div>
        </article>

        <article class="blog-home__post">
          <div class="blog-home__image-container">
            <img
              class="blog-home__image"
              src="https://images.unsplash.com/photo-1458544073930-041e1897663f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80"
              alt=""
              draggable-image />
          </div>
          <div class="blog-home__text-container">
            <a href="" class="blog-home__category heading-capital-small">Vitamins & Multivitamins</a>
            <h3 class="blog-home__heading heading-small">
              With an entire world of natural ingredients to source from
            </h3>
            <a href="" class="link link--arrow blog-home__link">Read more</a>
          </div>
        </article>
      </div>
    </div>

    <!-- Button  -->
    <div class="boxed centered">
      <a href="">
        <button class="button text-button blog-home__button">
          <span class="text-button button__text">All Articles </span>
        </button>
      </a>
    </div>
  </section>


  <!-- Custom Cursor  -->
  <?php include 'components/custom-cursor.php'; ?>

  <!-- Instagram  -->
  <?php include 'components/instagram.php'; ?>


</main>

<?php get_footer(); ?>