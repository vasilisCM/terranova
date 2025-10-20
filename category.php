<?php get_header(); ?>

<main class="main">
    <!-- Info  -->
    <section class="page-info boxed centered">
        <div class="page-info__container">
            <h1 class="page-info__heading heading">
                Read our <span class="heading italic">News</span>
            </h1>
        </div>
    </section>

    <!-- Products  -->
    <section class="archive">
        <div class="boxed centered">
            <!-- Grid  -->
            <div class="archive-news">
                <article class="archive-news__article">
                    <div class="archive-news__text-container">
                        <span class="heading-capital-small archive-news__date">March 23, 2023</span>
                        <a href="/single.html">
                            <h2 class="archive-news__heading heading-medium">
                                With an entire world of natural ingredients to source from
                            </h2>
                        </a>
                        <p class="archive-news__exceprt text">
                            We are sharing this world with some other magical creatures.
                            It feels good to have this kind,
                            <b>100% vegan choice</b>, it feels nice this "safe haven".
                        </p>
                        <a
                            href="/single.html"
                            class="link link--arrow archive-news__link">Read article</a>
                    </div>
                    <div class="archive-news__image-container">
                        <a href="/single.html">
                            <img
                                class="archive-news__image"
                                src="<?php echo get_template_directory_uri() . '/assets/img/news-002.webp'; ?>"
                                alt="" />
                        </a>
                    </div>
                </article>

                <article class="archive-news__article">
                    <div class="archive-news__text-container">
                        <span class="heading-capital-small archive-news__date">March 23, 2023</span>
                        <a href="/single.html">
                            <h2 class="archive-news__heading heading-medium">
                                With an entire world of natural ingredients to source from
                            </h2>
                        </a>
                        <p class="archive-news__exceprt text">
                            We are sharing this world with some other magical creatures.
                            It feels good to have this kind, <b>100% vegan choice</b>,
                            it feels nice this "safe haven".
                        </p>
                        <a
                            href="/single.html"
                            class="link link--arrow archive-news__link">Read article</a>
                    </div>
                    <div class="archive-news__image-container">
                        <a href="/single.html">
                            <img
                                class="archive-news__image"
                                src="<?php echo get_template_directory_uri() . '/assets/img/home-asymmetrical-carousel-001.webp'; ?>"
                                alt="" />
                        </a>
                    </div>
                </article>

                <article class="archive-news__article">
                    <div class="archive-news__text-container">
                        <span class="heading-capital-small archive-news__date">March 23, 2023</span>
                        <a href="/single.html">
                            <h2 class="archive-news__heading heading-medium">
                                With an entire world of natural ingredients to source from
                            </h2>
                        </a>
                        <p class="archive-news__exceprt text">
                            We are sharing this world with some other magical creatures.
                            It feels good to have this kind,
                            <b>100% vegan choice</b>, it feels nice this "safe haven".
                        </p>
                        <a
                            href="/single.html"
                            class="link link--arrow archive-news__link">Read article</a>
                    </div>

                    <div class="archive-news__image-container">
                        <a href="/single.html">
                            <img
                                class="archive-news__image"
                                src="<?php echo get_template_directory_uri() . '/assets/img/home-asymmetrical-carousel-004.webp'; ?>"
                                alt="" />
                        </a>
                    </div>
                </article>
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