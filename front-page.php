<?php get_header(); ?>

<main data-barba="container"
  data-barba-namespace="home">

  <section class="hero boxed centered">
    <?php $hero = get_field('home__hero');
    $text_1 = $hero['text_1'];
    $text_2 = $hero['text_2'];
    $text_3 = $hero['text_3'];
    // $video = $hero['video'];
    ?>
    <div class="hero__container">
      <!-- Text  -->
      <div class="hero__text-container text-container">
        <h1 class="heading-xl lowercase hero__heading">
          <span class="hero__heading-span"><?php echo $text_1; ?></span>
          <br />
          <span class="hero__heading-span italic"><?php echo $text_2; ?></span>
        </h1>
        <div class="text mask-text hero__description">
          <?php echo $text_3; ?>
        </div>
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

  <!-- Difference  -->
  <section class="products boxed centered">
    <?php $intro = get_field('home__intro');
    $heading = $intro['heading'];
    $link = $intro['link'];
    $gallery = $intro['gallery'];
    ?>

    <div class="products__container">
      <!-- Text  -->
      <div class="products__text-container text-container">
        <div class="products__heading-small heading-xs uppercase letter-spacing-wide mask-text">
          <?php echo $heading; ?>
        </div>
        <h2 class="products__heading mask-text">
          <!-- <span class="heading">My life is</span> -->

          <?php
          if (have_rows('home__intro')): while (have_rows('home__intro')) : the_row();
              if (have_rows('text_carousel')): while (have_rows('text_carousel')) : the_row();
          ?>

                  <!-- Text Effects  -->
                  <span class="heading italic products__text-effects">
                    <?php echo get_sub_field('heading'); ?></span>
          <?php endwhile;
              endif;
            endwhile;
          endif; ?>
        </h2>

        <?php
        if (have_rows('home__intro')): while (have_rows('home__intro')) : the_row();
            if (have_rows('text_carousel')): while (have_rows('text_carousel')) : the_row();
        ?>
                <div
                  class="products__description text mask-text products__description-effects">
                  <?php echo get_sub_field('text'); ?>
                </div>
        <?php endwhile;
            endif;
          endwhile;
        endif; ?>


        <a href="<?php echo $link; ?>">
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

          <?php foreach ($gallery as $image): ?>

            <img
              class="parallax-carousel__image"
              src="<?php echo $image; ?>"
              alt=""
              draggable="false" />
          <?php endforeach; ?>


        </div>
      </div>
    </div>
  </section>

  <section
    class="asymmetrical-carousel asymmetrical-carousel--home centered">
    <?php $banner_carousel_gallery = get_field('banner_carousel_gallery');
    $banner_carousel_text_1 = get_field('banner_carousel_text_1');
    $banner_carousel_text_2 = get_field('banner_carousel_text_2');
    $banner_carousel_link = get_field('banner_carousel_link');
    ?>

    <div class="slides-container" data-asymmetrical-carousel-container>
      <div class="asymmetrical-carousel__container">

        <?php foreach ($banner_carousel_gallery as $image): ?>
          <div
            class="asymmetrical-carousel__column"
            data-asymmetrical-carousel-slide>
            <div
              class="asymmetrical-carousel__image-container fade-in-stagger"
              draggable="true">
              <img
                src="<?php echo $image; ?>"
                alt=""
                class="asymmetrical-carousel__image"
                draggable-image />
            </div>
          </div>
        <?php endforeach; ?>


      </div>
      <!-- Heading  -->
      <div class="asymmetrical-carousel__text heading-xxl lowercase">
        <span
          class="asymmetrical-carousel__text--dark fx-text-huge fx-text-huge--1">
          <?php echo $banner_carousel_text_1; ?>
        </span>
        <span
          class="asymmetrical-carousel__text--light italic fx-text-huge fx-text-huge--2">
          <?php echo $banner_carousel_text_2; ?></span>
      </div>
    </div>

    <div class="boxed centered">
      <a href="<?php echo $banner_carousel_link; ?>">
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
      <h2 class="choice__heading heading lowercase">My choice is</h2>
      <div class="image-on-text-hover">
        <div class="choice__placeholder-container">
          <div class="choice__placeholder">
            <img
              src="<?php echo get_template_directory_uri() . '/./assets/img/home-choice-001.png'; ?>"
              alt=""
              class="choice__placeholder-image" />
          </div>
        </div>
        <?php
        // Get all product_categories taxonomy terms
        $terms = get_terms(array(
          'taxonomy' => 'product_categories',
          'hide_empty' => false,
        ));

        if ($terms && !is_wp_error($terms)):
          foreach ($terms as $term):
            // Check if is_featured_category ACF field is true
            $is_featured = get_field('is_featured_category', $term);

            if ($is_featured):
              $category_name = $term->name;
              $category_permalink = get_term_link($term);
              $featured_image = get_field('featured_category_image', $term);
        ?>
              <a href="<?php echo $category_permalink; ?>">
                <h3 class="choice__text heading-ms italic" data-category-link="<?php echo esc_url($category_permalink); ?>">
                  <?php echo esc_html($category_name); ?>
                </h3>
              </a>
              <div class="choice__image-container">
                <img
                  class="choice__image"
                  src="<?php echo esc_url($featured_image); ?>"
                  alt="<?php echo esc_attr($category_name); ?>" />
              </div>
        <?php
            endif;
          endforeach;
        endif;
        ?>
      </div>
    
    </div>
  </section>

  <!-- Blog  -->
  <section class="blog-home">
    <h2 class="heading boxed centered lowercase">My blog</h2>
    <!-- Archive  -->
    <div class="push-left blog-home__archive-container">
      <div class="blog-home__archive">
        <!-- Posts  -->
        <?php
        $blog_query = new WP_Query(array(
          'post_type' => 'post',
          'posts_per_page' => 8,
          'orderby' => 'date',
          'order' => 'DESC'
        ));

        if ($blog_query->have_posts()):
          while ($blog_query->have_posts()): $blog_query->the_post();
            $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
            $categories = get_the_category();
            $category_name = !empty($categories) ? $categories[0]->name : '';
            $category_link = !empty($categories) ? get_category_link($categories[0]->term_id) : '';
            $post_title = get_the_title();
            $post_permalink = get_permalink();
        ?>
            <article class="blog-home__post">
              <div class="blog-home__image-container">
                <?php if ($thumbnail_url): ?>
                  <img
                    class="blog-home__image"
                    src="<?php echo esc_url($thumbnail_url); ?>"
                    alt="<?php echo esc_attr($post_title); ?>"
                    draggable-image />
                <?php endif; ?>
              </div>
              <div class="blog-home__text-container">
                <?php if ($category_name): ?>
                  <a href="<?php echo esc_url($category_link); ?>" class="blog-home__category text-ms uppercase letter-spacing-medium"><?php echo esc_html($category_name); ?></a>
                <?php endif; ?>
                <h3 class="blog-home__heading heading-s">
                  <?php echo esc_html($post_title); ?>
                </h3>
                <a href="<?php echo esc_url($post_permalink); ?>" class="link link--arrow blog-home__link">Read more</a>
              </div>
            </article>
        <?php
          endwhile;
          wp_reset_postdata();
        endif;
        ?>
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