<?php
get_header();
?>

<main data-barba="container"
    data-barba-namespace="search">
    <section class="search-results first-section hero">
        <div class="search-results__container boxed-sm centered">
            <div>
                <?php if (have_posts()) : ?>
                    <h2>
                        <?php echo __('Search results for:', 'terranova'); ?> '<?php echo get_search_query(); ?>'
                    </h2>
                <?php else : ?>
                    <h2>
                        <?php echo __('No results for:', 'terranova'); ?> '<?php echo get_search_query(); ?>'
                    </h2>
                <?php endif; ?>
            </div>
            <div class="search-results__list text-l">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <a href="<?php the_permalink(); ?>" class="basic search-results__item">
                            <?php the_title(); ?>
                        </a>
                    <?php endwhile; ?>
                <?php else : ?>
                    <p>
                        <?php echo __('No posts match the search criteria.', 'terranova'); ?>
                    </p>
                <?php endif; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>