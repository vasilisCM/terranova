<?php get_header(); ?>

<!-- Main  -->
<main class="main" data-barba="container"
  data-barba-namespace="posts">
  <!-- Banner -->
  <section class="banner banner--blog">
    <div class="banner__wrapper boxed centered">
      <div class="banner__container">
        <div class="banner__text-background"></div>
        <div class="banner__text-container">
          <h1 class="banner__heading heading">
            Explore our <span class="heading italic">blog</span>
          </h1>
          <p class="banner__subheading heading-single-product">
            looking for the latest articles?
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Post -->
  <section class="archive">
    <div class="boxed centered">
      <!-- Grid  -->
      <div class="archive-blog">
        <?php
        // Get the latest post that is not in 'recipes' category
        $featured_args = array(
          'posts_per_page' => 1,
          'post_type' => 'post',
          'category__not_in' => array(get_cat_ID('recipes')),
        );
        $featured_query = new WP_Query($featured_args);
        if ($featured_query->have_posts()) :
          while ($featured_query->have_posts()) : $featured_query->the_post();
            $categories = get_the_category();
        ?>
            <article class="archive-blog__article">
              <div class="archive-blog__text-container">
                <div class="archive-blog__article-info">
                  <span class="text-ms uppercase letter-spacing-medium archive-blog__date"><?php echo get_the_date('F j, Y'); ?></span>
                  <?php if ($categories): ?>
                    <a
                      href="<?php echo esc_url(get_category_link($categories[0]->term_id)); ?>"
                      class="text-ms uppercase letter-spacing-medium archive-blog__category">
                      <?php echo esc_html($categories[0]->name); ?>
                    </a>
                  <?php endif; ?>
                </div>
                <a href="<?php the_permalink(); ?>">
                  <h2 class="archive-blog__heading heading-single-product heading-m">
                    <?php the_title(); ?>
                  </h2>
                </a>
                <p class="archive-blog__exceprt text">
                  <?php echo get_the_excerpt(); ?>
                </p>
                <div class="archive-blog__button-container">
                  <a href="<?php the_permalink(); ?>">
                    <button class="button archive-blog__button text-button mask-text">
                      <span class="text-button button__text">Read article</span>
                    </button>
                  </a>
                  <?php
                  $post_tags = get_the_tags();
                  if ($post_tags) :
                  ?>
                    <div class="hashtag-container">
                      <?php foreach ($post_tags as $tag): ?>
                        <p class="text-ms uppercase letter-spacing-medium">#<?php echo esc_html($tag->name); ?></p>
                      <?php endforeach; ?>
                    </div>
                  <?php endif; ?>
                </div>
              </div>
            </article>
        <?php
          endwhile;
          wp_reset_postdata();
        endif;
        ?>
      </div>
    </div>
  </section>

  <!-- Archive Carousel -->
  <section
    class="asymmetrical-carousel asymmetrical-carousel--blog centered">
    <div class="slides-container" data-asymmetrical-carousel-container>
      <div
        class="asymmetrical-carousel__container"
        data-asymmetrical-carousel
        data-mouse-down-at="0"
        data-previous-percentage="0">

        <!-- Posts Loop -->
        <?php
        $args = array(
          'posts_per_page' => -1,
          'post_type' => 'post',
          'category__not_in' => array(get_cat_ID('recipes')),
        );
        $query = new WP_Query($args);
        if ($query->have_posts()) :
          while ($query->have_posts()) : $query->the_post();
        ?>
            <div class="asymmetrical-carousel__column" data-asymmetrical-carousel-slide>
              <div class="asymmetrical-carousel__image-container" draggable="true">
                <img src="<?php the_post_thumbnail_url(); ?>" alt="" class="asymmetrical-carousel__image" draggable-image />
              </div>
              <div class="asymmetrical-carousel__text-container">
                <div class="asymmetrical-carousel__article-info text-ms uppercase letter-spacing-medium">
                  <p class="asymmetrical-carousel__date"><?php the_time('F j, Y'); ?></p>
                  <p class="asymmetrical-carousel__category"><?php the_category(' '); ?></p>
                </div>
                <h3 class="asymmetrical-carousel__heading heading-s">
                  <?php the_title(); ?>
                </h3>
                <a href="<?php the_permalink(); ?>" class="link link--arrow asymmetrical-carousel__link">Read more</a>
              </div>
            </div>
        <?php
          endwhile;
        endif;
        ?>

      </div>
    </div>
  </section>

  <!-- Recipes  -->
  <section class="recipes">
    <h2 class="heading boxed centered">Recipes</h2>
    <!-- Archive  -->
    <div class="recipes__archive-container">
      <div class="recipes__archive">
        <!-- Posts  -->

        <?php
        $args = array(
          'posts_per_page' => 3,
          'post_type' => 'post',
          'category_name' => 'recipes',
        );
        $query = new WP_Query($args);
        if ($query->have_posts()) :
          while ($query->have_posts()) : $query->the_post();
        ?>
            <article class="recipes__post">
              <div class="recipes__image-container">
                <img
                  class="recipes__image"
                  src="<?php the_post_thumbnail_url(); ?>"
                  alt=""
                  draggable-image />
              </div>
              <div class="recipes__text-container">
                <div class="recipes__article-info text-ms uppercase letter-spacing-medium">
                  <p class="recipes__date"><?php the_time('F j, Y'); ?></p>
                </div>
                <h3 class="recipes__heading heading-s">
                  <?php the_title(); ?>
                </h3>
                <a href="<?php the_permalink(); ?>" class="link link--arrow recipes__link">Read more</a>
              </div>
            </article>

        <?php
          endwhile;
        endif;
        wp_reset_postdata();
        ?>


      </div>
    </div>
  </section>


  <!-- Custom Cursor  -->
  <?php include 'components/custom-cursor.php'; ?>

</main>



<?php get_footer(); ?>