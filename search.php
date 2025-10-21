<?php
get_header();
?>

<main data-barba="container"
    data-barba-namespace="search">
    <section class="first-section hero last-section">
        <div class="boxed centered">
            <div>
                <?php if (have_posts()) : ?>
                    <h2>
                        <?php echo __('Αποτελέσματα αναζήτησης για:', 'terranova'); ?> '<?php echo get_search_query(); ?>'
                    </h2>
                <?php else : ?>
                    <h2>
                        <?php echo __('Δε βρέθηκαν αποτελέσματα για:', 'terranova'); ?> '<?php echo get_search_query(); ?>'
                    </h2>
                <?php endif; ?>
            </div>
            <div class="search__results text-l">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <a href="<?php the_permalink(); ?>" class="search__result">
                            <?php the_title(); ?>
                        </a>
                    <?php endwhile; ?>
                <?php else : ?>
                    <p>
                        <?php echo __('Καμία ανάρτηση δεν ταιριάζει με τα κριτήρια αναζήτησης.', 'terranova'); ?>
                    </p>
                <?php endif; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>