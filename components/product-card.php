<a href="<?php the_permalink(); ?>">
    <div class="archive-product__product">
        <?php
        if (has_post_thumbnail()) : ?>
            <div class="archive-product__img-container">
                <img src="<?php the_post_thumbnail_url('medium_large'); ?>" class="archive-product__featured-image">
            </div>
        <?php endif; ?>


        <div class="archive-product__text-container">

            <h3 class="archive-product__product-title">
                <?php the_title(); ?>
            </h3>

            <div

                class="link link--arrow archive-product__link">View more</div>
        </div>
    </div>


</a>