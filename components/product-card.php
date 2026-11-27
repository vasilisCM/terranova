<a href="<?php the_permalink(); ?>">
    <div class="archive-product__product">
        <?php
        if (has_post_thumbnail()) : ?>
            <div class="archive-product__img-container">
                <img src="<?php the_post_thumbnail_url('medium_large'); ?>" alt="<?php echo esc_attr(wp_strip_all_tags(get_the_title())); ?>" class="archive-product__featured-image"<?php echo (isset($GLOBALS['wp_query']->current_post) && (int) $GLOBALS['wp_query']->current_post >= 4) ? ' loading="lazy" decoding="async"' : ''; ?>>
            </div>
        <?php endif; ?>


        <div class="archive-product__text-container">

            <h2 class="archive-product__product-title">
                <?php the_title(); ?>
            </h2>

            <div

                class="link link--arrow archive-product__link">View more</div>
        </div>
    </div>


</a>