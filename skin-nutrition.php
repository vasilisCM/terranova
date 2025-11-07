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
        <div class="boxed-sm centered">
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

        <div class="boxed-sm centered">
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
    <section
        class="asymmetrical-carousel asymmetrical-carousel--skin-nutrition centered">
        <div class="slides-container" data-asymmetrical-carousel-container>
            <div
                class="asymmetrical-carousel__container"
                data-asymmetrical-carousel
                data-mouse-down-at="0"
                data-previous-percentage="0">
                <div
                    class="asymmetrical-carousel__column asymmetrical-carousel__column--with-text"
                    data-asymmetrical-carousel-slide>
                    <div
                        class="asymmetrical-carousel__image-container"
                        draggable="true">
                        <img
                            src="<?php echo get_template_directory_uri() . '/./assets/img/home-asymmetrical-carousel-001.webp'; ?>"
                            alt=""
                            class="asymmetrical-carousel__image"
                            draggable-image />
                    </div>
                </div>

                <div
                    class="asymmetrical-carousel__column"
                    data-asymmetrical-carousel-slide>
                    <div
                        class="asymmetrical-carousel__image-container"
                        draggable="true">
                        <img
                            src="<?php echo get_template_directory_uri() . '/./assets/img/home-asymmetrical-carousel-002.webp'; ?>"
                            alt=""
                            class="asymmetrical-carousel__image"
                            draggable-image />
                    </div>
                </div>

                <div
                    class="asymmetrical-carousel__column"
                    data-asymmetrical-carousel-slide>
                    <div
                        class="asymmetrical-carousel__image-container"
                        draggable="true">
                        <img
                            src="<?php echo get_template_directory_uri() . '/./assets/img/home-asymmetrical-carousel-003.webp'; ?>"
                            alt=""
                            class="asymmetrical-carousel__image"
                            draggable-image />
                    </div>
                </div>

                <div
                    class="asymmetrical-carousel__column"
                    data-asymmetrical-carousel-slide>
                    <div
                        class="asymmetrical-carousel__image-container"
                        draggable="true">
                        <img
                            src="<?php echo get_template_directory_uri() . '/./assets/img/home-asymmetrical-carousel-004.webp'; ?>"
                            alt=""
                            class="asymmetrical-carousel__image"
                            draggable-image />
                    </div>
                </div>

                <div
                    class="asymmetrical-carousel__column"
                    data-asymmetrical-carousel-slide>
                    <div
                        class="asymmetrical-carousel__image-container"
                        draggable="true">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661713448585-de2a39badb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt=""
                            class="asymmetrical-carousel__image"
                            draggable-image />
                    </div>
                </div>

                <div
                    class="asymmetrical-carousel__column"
                    data-asymmetrical-carousel-slide>
                    <div
                        class="asymmetrical-carousel__image-container"
                        draggable="true">
                        <img
                            src="https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                            alt=""
                            class="asymmetrical-carousel__image"
                            draggable-image />
                    </div>
                </div>

                <div
                    class="asymmetrical-carousel__column"
                    data-asymmetrical-carousel-slide>
                    <div
                        class="asymmetrical-carousel__image-container"
                        draggable="true">
                        <img
                            src="https://images.unsplash.com/photo-1458544073930-041e1897663f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80"
                            alt=""
                            class="asymmetrical-carousel__image"
                            draggable-image />
                    </div>
                </div>

                <div
                    class="asymmetrical-carousel__column"
                    data-asymmetrical-carousel-slide>
                    <div
                        class="asymmetrical-carousel__image-container"
                        draggable="true">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1664474956287-5627a7303d70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                            alt=""
                            class="asymmetrical-carousel__image"
                            draggable-image />
                    </div>
                </div>
            </div>
            <!-- Heading  -->
            <div class="asymmetrical-carousel__text heading-xxl">
                <span
                    class="asymmetrical-carousel__text--light fx-text-huge fx-text-huge--1">
                    my skin
                </span>
                <span
                    class="asymmetrical-carousel__text--light italic fx-text-huge fx-text-huge--2 normal">
                    nutrition</span>
            </div>
        </div>
    </section>

    <!-- Steps  -->
    <section class="skin-nutrition-steps">
        <div class="skin-nutrition-steps__container boxed centered">
            <div class="skin-nutrition-steps__step">
                <div
                    class="heading-ms underline skin-nutrition-steps__heading">
                    Step1 <br />
                    Foundational Nutrition
                </div>
                <div class="skin-nutrition-steps__text-container">
                    <h3 class="heading-s">
                        Create a daily foundation built upon nutrient-dense foods.
                    </h3>
                    <p class="text skin-nutrition-steps__description">
                        Vitamins, minerals, enzymes, essential fatty acids, water and
                        phytonutrients are just some of the elements that are required
                        to nourish the body and skin. The simplest way to achieve this
                        is to base your diet on natural foods, while minimizing
                        processed and manufactured products. This step will ensure
                        that you are receiving and utilizing the nutrients provided by
                        your diet, as well those from any nutritional supplements that
                        you may choose to incorporate.
                    </p>
                </div>
                <div
                    class="heading-ms underline skin-nutrition-steps__subheading">
                    Recommended Products
                </div>
                <!-- Grid  -->
                <div class="auto-fit-grid">
                    <div class="archive-product__product">
                        <div class="archive-product__img-container">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="archive-product__featured-image" />
                        </div>

                        <div class="skin-nutrition-steps__product-text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium archive-product__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="archive-product__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow archive-product__link">View more</a>
                        </div>
                    </div>
                    <div class="archive-product__product">
                        <div class="archive-product__img-container">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="archive-product__featured-image" />
                        </div>

                        <div class="skin-nutrition-steps__product-text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium archive-product__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="archive-product__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow archive-product__link">View more</a>
                        </div>
                    </div>
                    <div class="archive-product__product">
                        <div class="archive-product__img-container">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="archive-product__featured-image" />
                        </div>

                        <div class="skin-nutrition-steps__product-text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium archive-product__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="archive-product__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow archive-product__link">View more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skin-nutrition-steps__step">
                <div
                    class="heading-ms underline skin-nutrition-steps__heading">
                    Step2 <br />
                    Targeted Nutritional Supplements
                </div>
                <div class="skin-nutrition-steps__text-container">
                    <h3 class="heading-s">
                        Specific nutritional supplements can be selected to support
                        the skin depending on skin type, age and any existing skin
                        conditions.
                    </h3>
                    <p class="text skin-nutrition-steps__description">
                        Supplements may help with issues such as fine lines, dryness
                        and hydration, while also supporting the general structural
                        components that make up the various layers of the skin.
                    </p>
                </div>
                <div
                    class="heading-ms underline skin-nutrition-steps__subheading">
                    Recommended Products
                </div>
                <!-- Grid  -->
                <div class="auto-fit-grid">
                    <div class="archive-product__product">
                        <div class="archive-product__img-container">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="archive-product__featured-image" />
                        </div>

                        <div class="skin-nutrition-steps__product-text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium archive-product__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="archive-product__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow archive-product__link">View more</a>
                        </div>
                    </div>
                    <div class="archive-product__product">
                        <div class="archive-product__img-container">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="archive-product__featured-image" />
                        </div>

                        <div class="skin-nutrition-steps__product-text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium archive-product__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="archive-product__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow archive-product__link">View more</a>
                        </div>
                    </div>
                    <div class="archive-product__product">
                        <div class="archive-product__img-container">
                            <img
                                src="<?php echo get_template_directory_uri() . '/./assets/img/single-product-featured-image-placeholder.webp'; ?>"
                                alt=""
                                class="archive-product__featured-image" />
                        </div>

                        <div class="skin-nutrition-steps__product-text-container">
                            <a href="">
                                <h4
                                    class="text-ms uppercase letter-spacing-medium archive-product__product-category">
                                    Terranova
                                </h4>
                            </a>
                            <h3 class="archive-product__product-title">
                                Vollagen® & Hyaluronic Acid Complex
                            </h3>

                            <a href="" class="link link--arrow archive-product__link">View more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="skin-nutrition-steps__step skin-nutrition-steps__step--extra">
                <div
                    class="heading-ms underline skin-nutrition-steps__heading">
                    Step3 <br />
                    Topical Application
                </div>
                <div class="skin-nutrition-steps__text-container">
                    <h3 class="heading-s">
                        Daily application of a serum oil is a great way to compliment
                        the skin-enhancing benefits of steps 1 and 2.
                    </h3>
                </div>
                <div
                    class="heading-ms underline skin-nutrition-steps__subheading">
                    Recommended Products
                </div>
                <!-- Product  -->
                <div
                    class="archive-product__product skin-nutrition-steps__product">
                    <div class="skin-nutrition-steps__product-text-container">
                        <a href="">
                            <h4
                                class="text-ms uppercase letter-spacing-medium archive-product__product-category">
                                Terranova
                            </h4>
                        </a>
                        <h3 class="archive-product__product-title">
                            Vollagen® & Hyaluronic Acid Complex
                        </h3>
                        <h4 class="heading-s">
                            This product is a unique blend featuring 14 carefully
                            selected organic oils, combined with organic extracts of
                            calendula and arnica.
                        </h4>
                        <p class="text-single-product">
                            All ingredients have been specifically selected for their
                            skin rejuvenating properties and work synergistically to
                            provide a formula that is deeply nourishing and intensely
                            restorative to skin that is affected by dryness, ageing,
                            blemishes or other common challenges to skin health. Serum
                            768 – Organic Skin Oil delivers the lipids that healthy skin
                            needs for moisture, while providing the nourishment via
                            ingredients that the skin can’t make itself.
                        </p>

                        <div class="text-ms uppercase letter-spacing-medium">
                            100% Natural - 99,49% Organic - 100% Vegan
                        </div>
                    </div>
                </div>
                <div class="skin-nutrition-steps__img-container">
                    <img
                        src="<?php echo get_template_directory_uri() . '/./assets/img/skin-nutrition-steps-001.webp'; ?>"
                        alt=""
                        class="archive-product__featured-image skin-nutrition-steps__img" />
                </div>

                <div class="skin-nutrition-steps__icons auto-fit-grid">
                    <div class="card-icon">
                        <div class="card-icon__img-container">
                            <img
                                src="<?php echo get_template_directory_uri() . '/assets/img/skin-nutrition-icon-001.svg'; ?>"
                                alt=""
                                class="card-icon__img" />
                        </div>
                        <p class="text card-icon__text">
                            helps the skin to retain its natural moisture barrier. The
                            fatty acid content of the oils penetrates deeply and offers
                            a long-lasting moisturizing effect
                        </p>
                    </div>
                    <div class="card-icon">
                        <div class="card-icon__img-container">
                            <img
                                src="<?php echo get_template_directory_uri() . '/assets/img/skin-nutrition-icon-002.svg'; ?>"
                                alt=""
                                class="card-icon__img" />
                        </div>
                        <p class="text card-icon__text">
                            provides additional nourishment that the skin can’t make
                            itself
                        </p>
                    </div>
                    <div class="card-icon">
                        <div class="card-icon__img-container">
                            <img
                                src="<?php echo get_template_directory_uri() . '/assets/img/skin-nutrition-icon-003.svg'; ?>"
                                alt=""
                                class="card-icon__img" />
                        </div>
                        <p class="text card-icon__text">
                            protects the skin barrier which can be easily damaged from
                            neglect, abrasive ingredients, environmental toxins (removed
                            comma) and sun damage
                        </p>
                    </div>
                    <div class="card-icon">
                        <div class="card-icon__img-container">
                            <img
                                src="<?php echo get_template_directory_uri() . '/assets/img/skin-nutrition-icon-004.svg'; ?>"
                                alt=""
                                class="card-icon__img" />
                        </div>
                        <p class="text card-icon__text">
                            offers a calming effect by working with good bacteria on the
                            skin to modulate inflammation (such as that seen in
                            conditions like acne or eczema)
                        </p>
                    </div>
                </div>
            </div>

            <a href="">
                <button class="button centered text-button mask-text">
                    <span class="text-button button__text">Learn more about the Terranova Serum 768</span>
                </button>
            </a>
        </div>
    </section>

    <!-- Life Drink  -->
    <section class="life-drink">
        <div class="life-drink__container boxed centered">
            <div class="life-drink__product">
                <!-- Text  -->
                <div class="text-container life-drink__text-container">
                    <h2
                        class="single-product__heading heading normal life-drink__text">
                        Life Drink <br />
                        face mask recipe
                    </h2>
                    <!-- Featured Image Mobile -->
                    <div class="hidden-desktop">
                        <img
                            class="life-drink__img"
                            src="<?php echo get_template_directory_uri() . '/./assets/img/skin-nutrition-004.webp'; ?>"
                            alt="" />
                    </div>
                    <p class="text life-drink__text">
                        If you are looking for “active ingredients” for your skin care
                        regime, then Life Drink is a rich source of antioxidants,
                        enzymes, probiotics and omega fatty acids, to not only nourish
                        your body, but also enhance your beauty.
                    </p>
                    <div class="single-product__line"></div>

                    <div class="life-drink__recipe life-drink__text">
                        <h5 class="heading-s">
                            Add a Life Drink face mask in your weekly beauty routine!
                        </h5>
                        <p class="text">The recipe is so simple:</p>
                        <div class="life-drink__dosage-container">
                            <div class="text life-drink__dosage">
                                1 tablespoon Life drink
                            </div>
                            <div class="text life-drink__dosage">
                                ½ spoon Terranova Omega oil 3-6-7-9 or rose tonic or water
                            </div>
                        </div>
                    </div>

                    <p class="text life-drink__text">
                        Mix together. The mixture should be thick. Apply onto clean
                        skin over the face and neck, avoiding the eye area and making
                        small circular motions with your fingers. Put on some mellow
                        music, close your eyes and relax for 10 minutes. Rinse well
                        and apply your moisturizing serum/ cream.
                    </p>
                </div>

                <!-- Featured Image  -->
                <div class="hidden-mobile">
                    <img
                        class="life-drink__img"
                        src="<?php echo get_template_directory_uri() . '/./assets/img/skin-nutrition-004.webp'; ?>"
                        alt="" />
                </div>
            </div>

            <a href="">
                <button
                    class="button life-drink__button centered text-button mask-text">
                    <span class="text-button button__text">Learn more about the Terranova Life Drink</span>
                </button>
            </a>
        </div>
    </section>

    <!-- Cursor  -->
    <div class="cursor-track"></div>
</main>



<?php get_footer(); ?>