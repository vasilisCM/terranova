<?php /* Template Name: Skin Nutrition */ ?>
<?php get_header(); ?>


<main class="main" data-barba="container"
    data-barba-namespace="skinNutrition">
    <!-- Banner -->
    <section class="banner banner--skin-nutrition">
        <?php $hero = get_field('skin_nutrition__hero');
        $text_1 = $hero['text_1'];
        $text_2 = $hero['text_2'];
        ?>
        <div class="banner__wrapper boxed centered">
            <div class="banner__container">
                <div class="banner__text-background"></div>
                <div class="banner__text-container">
                    <div class="banner__subheading text-ms uppercase letter-spacing-medium">
                        <?php echo $text_1; ?>
                    </div>
                    <h1 class="banner__heading heading">
                        <?php echo $text_2; ?>

                    </h1>

                </div>
            </div>
        </div>
    </section>

    <!-- Holistic Presentation -->
    <section class="holistic">
        <?php $intro = get_field('skin_nutrition__intro');
        $text_1 = $intro['text_1'];
        $text_2 = $intro['text_2'];
        $text_3 = $intro['text_3'];
        $text_4 = $intro['text_4'];
        ?>
        <div class="boxed centered">
            <div class="holistic__text-container centered">
                <h2 class="heading-xs uppercase letter-spacing-medium"><?php echo $text_1; ?></h2>
            </div>
        </div>

        <div class="line-text">

            <div class="line"></div>
            <div class="line-text__numbers heading-s medium">
                <span class="line-text__number">1</span>
                <span class="line-text__number">2</span>
                <span class="line-text__number">3</span>
            </div>
            <div class="line"></div>
        </div>

        <div class="boxed centered">
            <div class="holistic__text-container centered">
                <div class="heading-xs uppercase letter-spacing-medium"><?php echo $text_2; ?></div>

                <div class="text-xl">
                    <?php echo $text_3; ?>

                </div>

                <div class="text">
                    <?php echo $text_4; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Asymmetrical Carousel  -->
    <?php include 'components/asymmetrical-carousel.php';
    ?>

    <!-- Steps  -->
    <section class="skin-nutrition-steps">
        <?php $steps = get_field('skin_nutrition__steps');
        $step3Recommended = $steps['step_3__recommended']; ?>

        <div class="skin-nutrition-steps__container">

            <?php if (have_rows('skin_nutrition__steps')) : ?>
                <?php while (have_rows('skin_nutrition__steps')) : the_row(); ?>

                    <?php if (have_rows('steps_1_and_2')) : ?>
                        <?php while (have_rows('steps_1_and_2')): the_row();
                            $heading = get_sub_field('heading');
                            $text_1 = get_sub_field('text_1');
                            $text_2 = get_sub_field('text_2');
                            $recommendedProducts = get_sub_field('recommended_products');
                        ?>
                            <div class="skin-nutrition-steps__step">
                                <div class="skin-nutrition-steps__heading-bg accent-bg white">
                                    <div class="boxed-md centered">
                                        <div
                                            class="heading-ms medium underline underline--white skin-nutrition-steps__heading">
                                            <?php echo __('Step', 'terranova'); ?><?php echo get_row_index(); ?> <br />
                                            <?php if ($heading):
                                                echo $heading;
                                            endif; ?>
                                        </div>
                                        <div class="skin-nutrition-steps__text-container">
                                            <?php if ($text_1): ?>
                                                <h3 class="heading-s">
                                                    <?php echo $text_1; ?>
                                                </h3>
                                            <?php endif; ?>
                                            <?php if ($text_2): ?>
                                                <p class="text skin-nutrition-steps__description">
                                                    <?php echo $text_2; ?>
                                                </p>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </div>

                                <?php if (!empty($recommendedProducts)): ?>

                                    <?php if (!is_array($recommendedProducts)) {
                                        $recommendedProducts = array($recommendedProducts);
                                    }

                                    $recommendedProducts_ids = array_slice($recommendedProducts, 0, 3);

                                    ?>

                                    <?php if (!empty($recommendedProducts_ids)) : ?>
                                        <div class="light-gray-bg">
                                            <div class="boxed-md centered width-full">
                                                <div
                                                    class="heading-ms underline skin-nutrition-steps__subheading">
                                                    <?php echo __('Recommended Products', 'terranova'); ?>
                                                </div>
                                                <!-- Grid  -->
                                                <div class="skin-nutrition-steps__product-grid">
                                                    <?php
                                                    foreach ($recommendedProducts_ids as $recommendedProducts_id) :
                                                        $post_obj = get_post($recommendedProducts_id);
                                                        if (!$post_obj) {
                                                            continue;
                                                        }

                                                        setup_postdata($post_obj);

                                                        // Retrieve custom fields
                                                        $thumbnail_url = get_the_post_thumbnail_url($recommendedProducts_id, 'large');
                                                    ?>
                                                        <div class="archive-product__product">
                                                            <a href="<?php echo esc_url(get_permalink($recommendedProducts_id)); ?>">
                                                                <div class="archive-product__img-container">
                                                                    <img
                                                                        src="<?php echo esc_url($thumbnail_url); ?>"
                                                                        alt=""
                                                                        class="archive-product__featured-image" />
                                                                </div>
                                                            </a>

                                                            <div class="skin-nutrition-steps__product-text-container">
                                                                <a href="<?php echo esc_url(get_permalink($recommendedProducts_id)); ?>">
                                                                    <h4
                                                                        class="text-ms uppercase letter-spacing-medium archive-product__product-category">
                                                                        Terranova
                                                                    </h4>

                                                                    <h3 class="archive-product__product-title">
                                                                        <?php echo get_the_title($recommendedProducts_id); ?>
                                                                    </h3>
                                                                </a>

                                                                <a href="<?php echo esc_url(get_permalink($recommendedProducts_id)); ?>" class="link link--arrow archive-product__link"><?php echo __('View more', 'terranova'); ?></a>
                                                            </div>
                                                        </div>
                                                    <?php endforeach; ?>
                                                    <?php wp_reset_postdata(); ?>
                                                </div>
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                <?php endif; ?>

                            <?php endwhile; ?>
                        <?php endif; ?>

                    <?php endwhile; ?>
                <?php endif; ?>

                <!-- Step 3  -->
                <div class="skin-nutrition-steps__step">

                    <div class="light-gray-bg">
                        <div class="boxed-md centered">
                            <div
                                class="skin-nutrition-steps__step skin-nutrition-steps__step--extra">

                                <div
                                    class="heading-ms underline skin-nutrition-steps__subheading">
                                    <?php echo $step3Recommended['heading']; ?>
                                </div>
                                <!-- Product  -->
                                <div
                                    class="archive-product__product skin-nutrition-steps__product">
                                    <div class="skin-nutrition-steps__product-text-container">
                                        <a href="">
                                            <h4
                                                class="text-ms uppercase letter-spacing-medium archive-product__product-category">
                                                <?php echo $step3Recommended['text_1']; ?>
                                            </h4>
                                        </a>
                                        <h3 class="archive-product__product-title">
                                            <?php echo $step3Recommended['text_2']; ?>
                                        </h3>
                                        <h4 class="heading-s">
                                            <?php echo $step3Recommended['text_3']; ?>
                                        </h4>
                                        <p class="text-single-product">
                                            <?php echo $step3Recommended['text_4']; ?>
                                        </p>

                                        <div class="text-ms uppercase letter-spacing-medium">
                                            <?php echo $step3Recommended['text_5']; ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="skin-nutrition-steps__img-container">
                                    <img
                                        src="<?php echo $step3Recommended['image']; ?>"
                                        alt=""
                                        class="archive-product__featured-image skin-nutrition-steps__img" />
                                </div>

                                <?php if (have_rows('skin_nutrition__steps')) : ?>
                                    <?php while (have_rows('skin_nutrition__steps')) : the_row(); ?>

                                        <?php if (have_rows('step_3__recommended')) : ?>
                                            <?php while (have_rows('step_3__recommended')) : the_row(); ?>

                                                <?php if (have_rows('list')) : ?>
                                                    <div class="skin-nutrition-steps__icons">
                                                        <?php while (have_rows('list')): the_row();
                                                            $image = get_sub_field('image');
                                                            $text = get_sub_field('text');
                                                        ?>
                                                            <div class="card-icon">
                                                                <div class="card-icon__img-container">
                                                                    <img
                                                                        src="<?php echo $image; ?>"
                                                                        alt=""
                                                                        class="card-icon__img" />
                                                                </div>
                                                                <div class="text card-icon__text">
                                                                    <?php echo $text; ?>
                                                                </div>
                                                            </div>
                                                        <?php endwhile; ?>
                                                    </div>
                                                <?php endif; ?>

                                            <?php endwhile; ?>
                                        <?php endif; ?>

                                    <?php endwhile; ?>
                                <?php endif; ?>


                            </div>

                            <a href="<?php echo $step3Recommended['button']['link']; ?>" class="skin-nutrition-steps__button">
                                <button class="button centered text-button mask-text">
                                    <span class="text-button button__text"><?php echo $step3Recommended['button']['label']; ?></span>
                                </button>
                            </a>
                        </div>
                    </div>

                </div>

                            </div>
    </section>

    <!-- Life Drink  -->
    <section class="life-drink text-center">
        <?php $productSpotlight = get_field('skin_nutrition__product_spotlight');
        $productSpotlightRecipe = $productSpotlight['recipe'];
        $productSpotlightBtn = $productSpotlight['button'] ?>
        <div class="life-drink__container boxed-sm centered">
            <div class="life-drink__product">
                <!-- Text  -->
                <div class="text-container life-drink__text-container">
                    <div class="text-ms uppercase letter-spacing-medium">
                        <?php echo $productSpotlight['heading']; ?>
                    </div>
                    <h2
                        class="single-product__heading heading-m normal life-drink__text">
                        <?php echo $productSpotlight['text_1']; ?>
                    </h2>
                    <!-- Featured Image Mobile -->
                    <div class="hidden-desktop">
                        <img
                            class="life-drink__img"
                            src="<?php echo $productSpotlight['image']; ?>"
                            alt="" />
                    </div>
                    <div class="text life-drink__text">
                        <?php echo $productSpotlight['text_2']; ?>
                    </div>

                    <!-- Featured Image  -->
                    <div class="hidden-mobile">
                        <img
                            class="life-drink__img"
                            src="<?php echo $productSpotlight['image']; ?>"
                            alt="" />
                    </div>

                    <div class="life-drink__recipe life-drink__text">
                        <div class="heading-s">
                            <?php echo $productSpotlight['text_3']; ?>
                        </div>
                        <div class="text-ms uppercase letter-spacing-medium">
                            <?php echo $productSpotlight['text_4']; ?>
                        </div>

                        <div class="life-drink__dosage-container">
                            <div class="text life-drink__dosage">
                                <?php echo $productSpotlightRecipe['text_1']; ?>
                            </div>
                            <div class="heading-l thin">
                                +
                            </div>
                            <div class="text life-drink__dosage">
                                <?php echo $productSpotlightRecipe['text_2']; ?>
                            </div>
                        </div>
                    </div>

                    <div class="text life-drink__text">
                        <?php echo $productSpotlight['text_5']; ?>
                    </div>
                </div>


            </div>

            <a href="<?php echo $productSpotlightBtn['link']; ?>">
                <button
                    class="button life-drink__button centered text-button mask-text">
                    <span class="text-button button__text"><?php echo $productSpotlightBtn['label']; ?></span>
                </button>
            </a>
        </div>
    </section>

    <!-- Cursor  -->
    <div class="cursor-track"></div>
</main>



<?php get_footer(); ?>