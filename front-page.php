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
        <h1 class="heading-xl hero__heading">

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

  <!-- Asymmetrical Carousel  -->
  <?php include 'components/asymmetrical-carousel.php';
  ?>

  <!-- NextGen Presentation  -->
  <section class="relative home-presentation white move-up-on-scroll-trigger">
    <?php $presentation = get_field('home__presentation');
    $text_1 = $presentation['text_1'];
    $text_2 = $presentation['text_2'];
    $text_3 = $presentation['text_3'];
    $link = $presentation['link'];
    $image_1 = $presentation['image_1'];
    $image_2 = $presentation['image_2'];
    $text_4 = $presentation['text_4'];
    ?>
    <div class="home-presentation__container boxed centered">
      <div>
        <h2 class="home-presentation__heading heading">
          <span><?php echo $text_1; ?></span>
          <span class="italic"><?php echo $text_2; ?></span> <br>
          <span class="lowercase"><?php echo $text_3; ?></span>
        </h2>

      </div>
      <div class="home-presentation__images">
        <div class="relative home-presentation__img-container home-presentation__img-container--1">
          <img src="<?php echo $image_1; ?>" class="move-up-on-scroll">
        </div>
        <div class="home-presentation__img-container home-presentation__img-container--2">
          <img src="<?php echo $image_2; ?>">
        </div>
        <div class="absolute home-presentation__img-container home-presentation__img-container--3">
          <img src="<?php echo get_template_directory_uri() . '/./assets/img/arrow-dots.svg'; ?>">
        </div>

      </div>


    </div>
  </section>

  <!-- Carousel  -->
  <section class="home-presentation-products light-blue-bg">
    <div class="boxed centered">
      <a href="<?php echo $link; ?>" class="button button--white home-presentation__button text-button mask-text">
        <span class="text-button button__text">Learn more </span>
      </a>
    </div>
    <?php $presentation = get_field('home__presentation');
    $products = $presentation['products'] ?? array();
    $text_4 = $presentation['text_4'] ?? '';

    $home_presentation_products = array();

    if (!empty($products) && is_array($products)) {
      foreach ($products as $product_item) {
        if (empty($product_item)) {
          continue;
        }

        if (is_numeric($product_item)) {
          $product_id = absint($product_item);
        } elseif (is_object($product_item) && isset($product_item->ID)) {
          $product_id = $product_item->ID;
        } elseif (is_array($product_item) && isset($product_item['ID'])) {
          $product_id = $product_item['ID'];
        } else {
          $product_id = url_to_postid($product_item);
        }

        if (!$product_id) {
          continue;
        }

        $product_post = get_post($product_id);

        if (!$product_post) {
          continue;
        }

        $product_title = get_the_title($product_id);
        $product_permalink = get_permalink($product_id);
        $product_thumbnail = get_the_post_thumbnail_url($product_id, 'medium_large');

        $product_terms = get_the_terms($product_id, 'product_categories');
        $primary_term = (!empty($product_terms) && !is_wp_error($product_terms)) ? $product_terms[0] : null;

        $product_category_name = $primary_term ? $primary_term->name : '';
        $product_category_link = '';

        if ($primary_term) {
          $term_link = get_term_link($primary_term);
          $product_category_link = !is_wp_error($term_link) ? $term_link : '';
        }

        $home_presentation_products[] = array(
          'title' => $product_title,
          'permalink' => $product_permalink,
          'thumbnail' => $product_thumbnail,
          'category_name' => $product_category_name,
          'category_link' => $product_category_link,
        );
      }
    }

    $placeholder_image = get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp';
    ?>
    <div class="home-presentation-products__container boxed-sm centered">

      <div>
        <h3 class="home-presentation__text-4 heading-ms lowercase black text-center">
          <?php echo $text_4; ?>
        </h3>
      </div>

      <?php if (!empty($home_presentation_products)): ?>
        <div class="basic carousel home-presentation__carousel">
          <div class="carousel__track" data-glide-el="track">
            <div class="carousel__container">
              <?php foreach ($home_presentation_products as $product): ?>
                <div class="carousel__slide">
                  <a href="<?php echo esc_url($product['permalink']); ?>">
                    <img
                      src="<?php echo esc_url($product['thumbnail'] ?: $placeholder_image); ?>"
                      alt="<?php echo esc_attr($product['title']); ?>"
                      class="related-products__featured-image" />
                  </a>
                  <div class="related-products__text-container">
                    <?php if (!empty($product['category_name'])): ?>
                      <a href="<?php echo esc_url($product['category_link'] ?: $product['permalink']); ?>">
                        <h4 class="text-ms uppercase letter-spacing-medium related-products__product-category">
                          <?php echo esc_html($product['category_name']); ?>
                        </h4>
                      </a>
                    <?php endif; ?>
                    <?php if (!empty($product['title'])): ?>
                      <h3 class="related-products__product-title">
                        <?php echo esc_html($product['title']); ?>
                      </h3>
                    <?php endif; ?>
                    <a href="<?php echo esc_url($product['permalink']); ?>" class="link link--arrow related-products__link">View more</a>
                  </div>
                </div>
              <?php endforeach; ?>
            </div>
          </div>

          <div class="carousel__bottom">
            <div class="carousel__controls">
              <div class="carousel__button carousel__button--previous"></div>
              <div class="carousel__dots" data-glide-el="controls[nav]"></div>
              <div class="carousel__button carousel__button--next"></div>
            </div>
          </div>
        </div>
      <?php endif; ?>
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

        // Custom order (only featured terms are shown; order by these IDs)
        $featured_order = array(94, 73, 75, 71, 81);

        if ($terms && !is_wp_error($terms)):
          // Keep only featured categories and sort by custom order
          $featured_terms = array();
          foreach ($terms as $term) {
            if (get_field('is_featured_category', $term)) {
              $featured_terms[] = $term;
            }
          }
          usort($featured_terms, function ($a, $b) use ($featured_order) {
            $pos_a = array_search($a->term_id, $featured_order);
            $pos_b = array_search($b->term_id, $featured_order);
            $pos_a = $pos_a === false ? 999 : $pos_a;
            $pos_b = $pos_b === false ? 999 : $pos_b;
            return $pos_a - $pos_b;
          });

          foreach ($featured_terms as $term):
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
      <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>">
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