<?php get_header(); ?>

<main>

    <!-- Hero  -->
    <?php include 'components/hero.php'; ?>

    <section class="basic last-section">
        <div class="boxed centered">
            <div class="archive-grid">
                <?php
                if (have_posts()) :

                    query_posts('posts_per_page=3');
                    while (have_posts()) : the_post();

                        // Post Card
                        include 'components/post-card.php';

                    endwhile;
                endif;
                ?>
            </div>

            <div class="archive-grid__bottom">
                <button class="button button--load-more">Περισσότερα</button>
                <div class="archive-grid__no-more-posts">Δεν υπάρχουν άλλα άρθρα.</div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>