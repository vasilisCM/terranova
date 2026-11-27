<a href="<?php the_permalink(); ?>" class="archive-grid__post">
    <article class="archive-news__article">
        <div class="archive-news__text-container">
            <span class="text-ms uppercase letter-spacing-medium archive-news__date"><?php echo function_exists('tn_njc_post_date') ? esc_html(tn_njc_post_date('d M Y')) : get_the_date('d M Y'); ?></span>

            <h2 class="archive-grid__title archive-news__heading heading-m">
                <?php the_title(); ?>
            </h2>

            <p class="archive-grid__excerpt archive-news__exceprt text">
                <?php the_excerpt(); ?>
            </p>
            <div class="link link--arrow archive-news__link"><?php _e('Read article', 'terranova'); ?></div>
        </div>
        <div class="archive-news__image-container">
            <?php
            if (has_post_thumbnail()) : ?>
                <div>
                    <img src="<?php the_post_thumbnail_url('medium_large'); ?>" alt="<?php echo esc_attr(wp_strip_all_tags(get_the_title())); ?>" class="archive-grid__featured-img archive-news__image"<?php echo (isset($GLOBALS['wp_query']->current_post) && (int) $GLOBALS['wp_query']->current_post >= 2) ? ' loading="lazy" decoding="async"' : ''; ?>>
                </div>
            <?php endif; ?>

        </div>
    </article>
</a>