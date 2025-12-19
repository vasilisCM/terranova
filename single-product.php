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


                <?php include 'components/gallery-grid.php'; ?>


            </div>

            <!-- Text  -->
            <div class="single-product__text-container text-container">
                <?php
                $product_categories = get_the_terms(get_the_ID(), 'product_categories');
                $product_category_names = array();
                if (!is_wp_error($product_categories) && !empty($product_categories)) {
                    foreach ($product_categories as $category) {
                        $product_category_names[] = $category->name;
                    }
                }
                $product_category_display = !empty($product_category_names) ? implode(', ', $product_category_names) : '';
                if (!empty($product_category_display)):
                ?>
                    <div
                        class="text-ms uppercase letter-spacing-medium mask-text accent">
                        <?php echo esc_html($product_category_display); ?>
                    </div>
                <?php endif; ?>

                <h1 class="single-product__heading heading-m">
                    <?php the_title(); ?>
                </h1>

                <div
                    class="single-product__featured-image-container hidden-desktop">
                    <?php if (has_post_thumbnail()) : ?>
                        <img src="<?php the_post_thumbnail_url('full'); ?>" class="single-product__featured-image">
                    <?php endif; ?>
                </div>

                <div class="single-product__description text-m">
                    <?php the_excerpt(); ?>
                </div>


                <div class="single-product__buttons-container">
                    <button
                        class="button single-product__button single-product__button--info text-button mask-text">
                        <span
                            class="uppercase text-s uppercase letter-spacing-medium button__text single-product__button-inner single-product__button-inner--info">Available in 50 and 100 capsule sizes</span>
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
                                <div class="tabs__content tabs__content--hidden single-product__wysiwyg single-product-ingredients">
                                    <?php echo $single_product_ingredients ? wp_kses_post($single_product_ingredients) : ''; ?>
                                </div>
                                <div class="tabs__content tabs__content--hidden single-product__wysiwyg single-product-how-to-use">
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
                        <img src="<?php echo get_template_directory_uri() . '/./assets/img/icons-list-product.svg'; ?>" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php
    $related_products = get_field('single_product_related_products');
    if (!empty($related_products)):
    ?>
        <!-- Related Products  -->
        <section class="related-products boxed centered">
            <h2 class="related-products__heading">Related Products</h2>
            <div class="carousel related-products__carousel boxed-sm centered">

                <div class="carousel__track" data-glide-el="track">
                    <div class="carousel__container">
                        <?php
                        foreach ($related_products as $related_product_link):
                            if (empty($related_product_link)) {
                                continue;
                            }

                            $related_product_id = url_to_postid($related_product_link);
                            if (!$related_product_id) {
                                continue;
                            }

                            $related_product_url = get_permalink($related_product_id);
                            $related_product_title = get_the_title($related_product_id);
                            $related_product_featured_image = get_the_post_thumbnail_url($related_product_id, 'full');
                            $related_product_terms = get_the_terms($related_product_id, 'product_categories');
                            $related_product_category = '';
                            if (!is_wp_error($related_product_terms) && !empty($related_product_terms)) {
                                $related_product_category = $related_product_terms[0]->name;
                            }
                        ?>
                            <div class="carousel__slide">

                                <img
                                    src="<?php echo esc_url($related_product_featured_image); ?>"
                                    alt="<?php echo esc_attr($related_product_title); ?>"
                                    class="related-products__featured-image" />

                                <div class="related-products__text-container">

                                    <h4
                                        class="text-ms uppercase letter-spacing-medium related-products__product-category">
                                        <?php echo esc_html($related_product_category); ?>
                                    </h4>

                                </div>
                                <h3 class="related-products__product-title">
                                    <?php echo esc_html($related_product_title); ?>
                                </h3>
                                <a href="<?php echo esc_url($related_product_url); ?>" class="link link--arrow related-products__link">View more</a>
                            </div>
                        <?php
                        endforeach;
                        ?>
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
    <?php endif; ?>

    <!-- Custom Cursor  -->
    <?php include 'components/custom-cursor.php'; ?>

    <!-- Instagram  -->
    <?php include 'components/instagram.php'; ?>
</main>

<!-- Gallery Lightbox  -->
<?php include 'components/gallery-lightbox.php'; ?>



<?php get_footer(); ?>