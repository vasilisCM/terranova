<a href="<?php the_permalink(); ?>" class="archive-grid__post">
    <div>
        <?php
        if (has_post_thumbnail()) : ?>
        <div>
            <img src="<?php the_post_thumbnail_url('medium_large'); ?>" class="archive-grid__featured-img">
        </div>
        <?php endif; ?>
    </div>
    <div><?php echo get_the_date('d M Y'); ?></div>
    <h2 class="archive-grid__title">
    <?php the_title(); ?>
    </h2>
    <div class="archive-grid__excerpt">
    <?php the_excerpt(); ?>
    </div>
    <button>
    More
    </button>
</a>