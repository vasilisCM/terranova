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
    <div class="boxed centered single-post-content__container">
      <?php the_content(); ?>

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