<?php get_header(); ?>

<main class="main">
    <!-- Products  -->
    <section class="main-single-product boxed centered">
        <div class="single-product__container">
            <!-- Featured Image  -->
            <div class="single-product__featured-image-container hidden-mobile">
                <?php if (has_post_thumbnail()) : ?>
                    <img src="<?php the_post_thumbnail_url('full'); ?>" class="single-product__featured-image">
                <?php endif; ?>
            </div>

            <!-- Text  -->
            <div class="single-product__text-container text-container">
                <a href="">
                    <div
                        class="single-product__heading-small heading-capital-small mask-text">
                        Skin Nutrition
                    </div>
                </a>
                <h1 class="single-product__heading heading-single-product">
                    <?php the_title(); ?>
                </h1>
                <div
                    class="single-product__featured-image-container hidden-desktop">
                    <?php if (has_post_thumbnail()) : ?>
                        <img src="<?php the_post_thumbnail_url('full'); ?>" class="single-product__featured-image">
                    <?php endif; ?>
                </div>
                <p class="single-product__description text-single-product">
                    <?php the_excerpt(); ?>
                </p>

                <div class="single-product__buttons-container">
                    <button
                        class="button single-product__button single-product__button--info text-button mask-text">
                        <span
                            class="uppercase heading-capital-small button__text single-product__button-inner single-product__button-inner--info">Available in 50 and 100 capsule sizes</span>
                    </button>
                    <button
                        class="button single-product__button text-button mask-text">
                        <span class="text-button button__text">where to buy </span>
                    </button>
                </div>
                <span class="single-product__dosage">
                    <span>×</span> <span>2 capsules daily with food</span>
                </span>

                <div class="single-product__line"></div>
                <p class="single-product__no-additives">
                    NO WHEAT - NO GLUTEN - NO SOY - NO YEAST - NO DAIRY - NO
                    GELATINE - NO ANIMAL INGREDIENTS - NO ADDITIVES - NO ADDED SUGAR
                    - NO COLOURS - NO FLAVOURS - NO PRESERVATIVES
                </p>

                <div class="single-product__tabs tabs">
                    <div class="tabs__buttons-container">
                        <button
                            class="tabs__button tabs__button--active"
                            data-tab="1">
                            Ingredients
                        </button>
                        <button class="tabs__button" data-tab="2">How to Use</button>
                    </div>
                    <div class="tabs__content-container">
                        <div class="tabs__content" data-tab="1">
                            ONE VEGETARIAN CAPSULE TYPICALLY PROVIDES: <br />
                            Vollagen® Amino Acid Complex* 500mg Hyaluronic Acid (as
                            Sodium Hyaluronate)** 50mg

                            <br />
                            <br />
                            MAGNIFOOD COMPLEX 200mg PROVIDING: <br />
                            Rose Hips (Rosa canina) - ORGANIC 75mg Matcha Green Tea
                            Ceremonial grade AAA (Camellia sinensis) - ORGANIC 50mg
                            Horsetail Spring Shoot (Equisetum arvense) - fresh freeze
                            dried 25mg Parsley Leaf (Petroselinum crispum) - fresh
                            freeze dried - ORGANIC 25mg Nettle Leaf (Urtica dioica) -
                            fresh freeze dried 25mg Vegetarian Capsule Shell
                            (hydroxypropyl methylcellulose)
                            <br />
                            <br />
                            * Vollagen® is a registered trademark of Chrysalis Health &
                            Beauty Ltd **ExceptionHYAL®STAR (Full spectrum molecular
                            weight Hyaluronic Acid)
                        </div>
                        <div class="hidden tabs__content" data-tab="2">
                            HOW TO USE: <br />
                            Vollagen® Amino Acid Complex* 500mg Hyaluronic Acid (as
                            Sodium Hyaluronate)** 50mg

                            <br />
                            <br />
                            MAGNIFOOD COMPLEX 200mg PROVIDING: <br />
                            Rose Hips (Rosa canina) - ORGANIC 75mg Matcha Green Tea
                            Ceremonial grade AAA (Camellia sinensis) - ORGANIC 50mg
                            Horsetail Spring Shoot (Equisetum arvense) - fresh freeze
                            dried 25mg Parsley Leaf (Petroselinum crispum) - fresh
                            freeze dried - ORGANIC 25mg Nettle Leaf (Urtica dioica) -
                            fresh freeze dried 25mg Vegetarian Capsule Shell
                            (hydroxypropyl methylcellulose)
                            <br />
                            <br />
                            * Vollagen® is a registered trademark of Chrysalis Health &
                            Beauty Ltd **ExceptionHYAL®STAR (Full spectrum molecular
                            weight Hyaluronic Acid)
                        </div>
                    </div>
                </div>

                <p class="single-product__no-additives">
                    NO FILLERS, BINDERS OR OTHER EXCIPIENTS SUITABLE FOR VEGETARIANS
                    & VEGANS
                </p>
                <div class="single-product__line"></div>
                <div class="single-product__icons">
                    <img src="<?php echo get_template_directory_uri() . '/./assets/img/footer-reel.svg'; ?>" alt="" />
                </div>
            </div>
        </div>
    </section>

    <!-- Related Products  -->
    <section class="related-products boxed centered">
        <h2 class="related-products__heading">Related Products</h2>
        <div class="simple-carousel boxed centered">
            <div
                class="simple-carousel__button simple-carousel__button--previous">
                <img src="<?php echo get_template_directory_uri() . '/./assets/img/ic-button-previous.svg'; ?>" alt="" />
            </div>
            <div class="slides">
                <div
                    class="slides__container related-products__product-container centered">
                    <div class="slides__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="heading-capital-small related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="slides__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="heading-capital-small related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="slides__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="heading-capital-small related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="slides__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="heading-capital-small related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="slides__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="heading-capital-small related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="slides__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="heading-capital-small related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="slides__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="heading-capital-small related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="slides__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="heading-capital-small related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="simple-carousel__button simple-carousel__button--next">
                <img src="<?php echo get_template_directory_uri() . '/./assets/img/ic-button-next.svg'; ?>" alt="" />
            </div>
        </div>
    </section>

    <!-- Custom Cursor  -->
    <?php include 'components/custom-cursor.php'; ?>

    <!-- Instagram  -->
    <?php include 'components/instagram.php'; ?>
</main>

<?php get_footer(); ?>