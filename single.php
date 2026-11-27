<?php get_header(); ?>

<main class="main" data-barba="container"
  data-barba-namespace="single">
  <!-- Info  -->
  <section class="page-info single-post-info">
    <div class="boxed-md centered">
      <!-- Grid  -->
      <article class="archive-blog__article">
        <div
          class="page-info__text-container single-post-info__text-container">
          <h1 class="heading-single-product heading-m boxed-sm no-padding">
            <?php the_title(); ?>
          </h1>
          <div class="archive-blog__article-info">
            <?php
            // nijocrawl 25/11/2026: αρχική ημερομηνία δημοσίευσης από το παλιό site (meta njc_original_published, Y-m-d), αλλιώς η ημερομηνία του άρθρου
            $tn_orig_pub = (string) get_post_meta(get_the_ID(), 'njc_original_published', true);
            $tn_orig_dt  = preg_match('/^\d{4}-\d{2}-\d{2}$/', $tn_orig_pub) ? date_create_immutable($tn_orig_pub . ' 12:00:00', new DateTimeZone('UTC')) : false;
            ?>
            <span class="text-ms uppercase letter-spacing-medium archive-blog__date">Published <time datetime="<?php echo esc_attr($tn_orig_dt ? $tn_orig_pub : get_the_date('c')); ?>"><?php echo esc_html($tn_orig_dt ? wp_date('j F Y', $tn_orig_dt->getTimestamp(), new DateTimeZone('UTC')) : get_the_date('j F Y')); ?></time></span>
            <?php
            // Get the first category
            $categories = get_the_category();
            if (!empty($categories)) ?>
            <?php $first_category = $categories[0]; ?>
            <a href="<?php echo get_category_link($first_category->term_id); ?>" class="text-ms uppercase letter-spacing-medium archive-blog__category"><?php echo $first_category->name; ?></a>

          </div>

          <div class="featured-image-single">
            <?php
            // nijocrawl 25/11/2026: υπάρχον μέγεθος WordPress με srcset (snippet terranova-responsive-images)
            $tn_fi_attr = '';
            if (function_exists('tn_njc_resp_img')) {
              $tn_fi_id = has_post_thumbnail() ? get_post_thumbnail_id() : attachment_url_to_postid(home_url('/wp-content/uploads/2025/11/blog-hero.jpg'));
              $tn_fi_attr = tn_njc_resp_img($tn_fi_id, '100vw', 100, 1024);
            }
            ?>
            <img
              <?php if ($tn_fi_attr) : echo $tn_fi_attr; else : ?>src="<?php
                    echo esc_url(
                      has_post_thumbnail()
                        ? get_the_post_thumbnail_url(get_the_ID(), 'full')
                        : '/wp-content/uploads/2025/11/blog-hero.jpg'
                    );
                    ?>"<?php endif; ?>
              class="featured-image-single__image"
              alt="<?php the_title_attribute(); ?>" />
          </div>
        </div>
      </article>
    </div>
  </section>

  <!-- Content -->
  <section class="single-post-content">
    <div class="boxed-md centered single-post-content__container text">

      <?php
      // Always display the main content
      the_content();
      ?>

      <?php
      // If there is flexible content, output it below the main content
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
            <div class="single-post-content__text-and-image two-col-grid">
              <?php if (!empty($text)) : ?>
                <div class="text-and-image__text">
                  <?php echo wp_kses_post($text); ?>
                </div>
              <?php endif; ?>

              <?php if (!empty($image)) : ?>
                <div class="text-and-image__image">
                  <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" class="centered">
                </div>
              <?php endif; ?>
            </div>
      <?php
          endif;
        endwhile;
      endif;
      ?>

      <?php if (function_exists('tn_njc_related_posts')) { echo tn_njc_related_posts(get_the_ID()); } ?>

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


      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>