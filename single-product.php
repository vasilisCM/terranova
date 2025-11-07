<?php get_header(); ?>

<main class="main" data-barba="container"
    data-barba-namespace="singleProduct">
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
                <?php
                $product_categories = get_the_terms(get_the_ID(), 'product_category');
                $product_category = (!is_wp_error($product_categories) && !empty($product_categories)) ? $product_categories[0] : null;
                $product_category_link = $product_category ? get_term_link($product_category) : '';
                if (is_wp_error($product_category_link)) {
                    $product_category_link = '';
                }
                ?>
               
                    <div
                        class="single-product__heading-small text-ms uppercase letter-spacing-medium mask-text">
                        <?php echo $product_category ? esc_html($product_category->name) : ''; ?>
                    </div>
                
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
                            class="uppercase text-ms uppercase letter-spacing-medium button__text single-product__button-inner single-product__button-inner--info">Available in 50 and 100 capsule sizes</span>
                    </button>
                    <button
                        class="button single-product__button text-button mask-text">
                        <span class="text-button button__text">where to buy </span>
                    </button>
                </div>


                <div class="single-product__line"></div>
                <p class="single-product__no-additives">
                    NO WHEAT - NO GLUTEN - NO SOY - NO YEAST - NO DAIRY - NO
                    GELATINE - NO ANIMAL INGREDIENTS - NO ADDITIVES - NO ADDED SUGAR
                    - NO COLOURS - NO FLAVOURS - NO PRESERVATIVES
                </p>

                <div>

                
                <!-- Tabs  -->
                <?php
                $single_product_ingredients = get_field('single_product_ingredients');
                $single_product_how_to_use = get_field('single_product_how_to_use');
                if ($single_product_ingredients || $single_product_how_to_use):
                ?>
                    <div class="tabs">
                        <div class="tabs__buttons text-s uppercase semibold">
                            <div class="tabs__button">Ingredients</div>
                            <div class="tabs__button">How to Use</div>
                        </div>

                        <div class="tabs__contents text-ms">
                            <div class="tabs__content tabs__content--hidden">
                                <?php echo $single_product_ingredients ? wp_kses_post($single_product_ingredients) : ''; ?>
                            </div>
                            <div class="tabs__content tabs__content--hidden">
                                <?php echo $single_product_how_to_use ? wp_kses_post($single_product_how_to_use) : ''; ?>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>

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
        </div>
    </section>

    <!-- Related Products  -->
    <section class="related-products boxed centered">
        <h2 class="related-products__heading">Related Products</h2>
        <div class="carousel related-products__carousel boxed-sm centered">

            <div class="carousel__track" data-glide-el="track">
                <div
                    class="carousel__container">

                    <div class="carousel__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="carousel__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="carousel__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="carousel__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="carousel__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="carousel__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="carousel__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium related-products__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="related-products__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow related-products__link">View more</a>
                        </div>
                    </div>
                    <div class="carousel__slide">
                        <a href="single-product.html">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="related-products__featured-image" />
                        </a>
                        <div class="related-products__text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium related-products__product-category">
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

            <div class="carousel__bottom">
                <div class="carousel__controls">
                    <div class="carousel__button carousel__button--previous"></div>
                    <div class="carousel__dots" data-glide-el="controls[nav]"></div>
                    <div class="carousel__button carousel__button--next"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Custom Cursor  -->
    <?php include 'components/custom-cursor.php'; ?>

    <!-- Instagram  -->
    <?php include 'components/instagram.php'; ?>
</main>

<?php get_footer(); ?>