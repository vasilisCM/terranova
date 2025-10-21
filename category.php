<?php get_header(); ?>

<main class="main" data-barba="container"
    data-barba-namespace="posts">
    <!-- Info  -->
    <section class="page-info boxed centered">
        <div class="page-info__container">
            <h1 class="page-info__heading heading lowercase">
                Read our <span class="heading italic">News</span>
            </h1>
        </div>
    </section>

    <!-- Products  -->
    <section class="archive">
        <div class="boxed centered">
            <!-- Grid  -->
            <div class="archive-news">
                <?php
                if (have_posts()) :
                    while (have_posts()) : the_post();

                        // Post Card
                        include 'components/post-card.php';

                    endwhile;
                endif;
                ?>


            </div>

            <button
                data-load-more-posts
                class="button archive__button text-button mask-text centered">
                <span class="text-button button__text">Load more articles </span>
            </button>
        </div>
    </section>
</main>


<?php get_footer(); ?>