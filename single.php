<?php get_header(); ?>

<main class="main" data-barba="container"
  data-barba-namespace="single">
  <!-- Info  -->
  <section class="page-info single-post-info">
    <div class="boxed centered">
      <!-- Grid  -->
      <article class="archive-blog__article">
        <div
          class="page-info__text-container single-post-info__text-container">
          <h1 class="heading-single-product">
            <?php the_title(); ?>
          </h1>
          <div class="archive-blog__article-info">
            <span class="text-ms uppercase letter-spacing-medium archive-blog__date"><?php echo get_the_date('d M Y'); ?></span>
            <?php
            // Get the first category
            $categories = get_the_category();
            if (!empty($categories)) ?>
            <?php $first_category = $categories[0]; ?>
            <a href="<?php echo get_category_link($first_category->term_id); ?>" class="text-ms uppercase letter-spacing-medium archive-blog__category"><?php echo $first_category->name; ?></a>

          </div>

          <div class="featured-image-single">
            <?php
            if (has_post_thumbnail()) : ?>
              <img src="<?php the_post_thumbnail_url('full'); ?>" class="featured-image-single__image">
            <?php endif; ?>
          </div>
        </div>
      </article>
    </div>
  </section>

  <!-- Content -->
  <section class="single-post-content">
    <div class="boxed centered single-post-content__container text">
      <?php
      the_content();
      ?>
      <?php
      if (have_rows('single_post_content')) :
        while (have_rows('single_post_content')) :
          the_row();

          if (get_row_layout() == 'wysiwig') :
            $content = get_sub_field('content');
            if (!empty($content)) :
      ?>
              <div class="single-post-content__wysiwig">
                <?php echo wp_kses_post($content); ?>
              </div>
            <?php
            endif;

          elseif (get_row_layout() == 'text_and_image') :
            $text = get_sub_field('text');
            $image = get_sub_field('image');
            ?>
            <div class="single-post-content__text-and-image">
              <?php if (!empty($text)) : ?>
                <div class="text-and-image__text">
                  <?php echo wp_kses_post($text); ?>
                </div>
              <?php endif; ?>

              <?php if (!empty($image)) : ?>
                <div class="text-and-image__image">
                  <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr(get_the_title()); ?>">
                </div>
              <?php endif; ?>
            </div>
      <?php
          endif;
        endwhile;
      else :
        the_content();
      endif;
      ?>

      <div class="single-post-content__button-container">
        <?php
        // Get the actual page for posts (the one that uses index.php template)
        $posts_page_id = get_option('page_for_posts');
        if ($posts_page_id) {
          $posts_page_url = get_permalink($posts_page_id);
        } else {
          // Fallback to home URL if no posts page is set
          $posts_page_url = home_url('/');
        }
        ?>
        <a href="<?php echo $posts_page_url; ?>">
          <button
            class="button single-post-content__button text-button mask-text">
            <span class="text-button button__text button__text--back">All articles</span>
          </button>
        </a>

        <div class="hashtag-container">
          <?php
          // Get post tags and display them
          $tags = get_the_tags();
          if ($tags) {
            foreach ($tags as $tag) {
              echo '<p class="text-ms uppercase letter-spacing-medium">#' . $tag->name . '</p>';
            }
          }
          ?>
        </div>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>