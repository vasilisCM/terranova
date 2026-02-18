<?php /* Template Name: Next Gen */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="nextGen"
    class="main-next-gen white">


    <!-- Hero  -->
    <section class="banner hero-next-gen">
        <?php
        $hero = get_field('next_gen__hero');
        $heading = $hero['heading'];
        $image_1 = $hero['image_1'];
        $image_2 = $hero['image_2'];
        $image_3 = $hero['image_3'];
        ?>
        <div class="banner__wrapper hero-next-gen__container boxed centered">
            <div>
                <div class="banner__container">
                    <div class="banner__text-background"></div>
                    <div class="banner__text-container">

                        <div class="banner__img-container">
                            <img src="<?php echo $image_1; ?>" alt="" class="banner__image">
                        </div>

                        <h1 class="banner__heading heading">
                            <?php echo $heading; ?>

                        </h1>

                    </div>
                </div>
            </div>
            <div class="hero-next-gen__images">
                <div class="hero-next-gen__img-container hero-next-gen__img-container--1">
                    <img src="<?php echo $image_2; ?>" alt="">
                </div>
                <div class="hero-next-gen__img-container hero-next-gen__img-container--2">
                    <img src="<?php echo $image_3; ?>" alt="">
                </div>
            </div>
        </div>
    </section>

    <section class="basic-section text-center intro-next-gen">
        <?php
        $intro = get_field('next_gen__intro');
        $heading = $intro['heading'];
        $text_1 = $intro['text_1'];
        $subheading_1 = $intro['subheading_1'];
        $subheading_2 = $intro['subheading_2'];
        $text_2 = $intro['text_2'];
        $text_3 = $intro['text_3'];
        ?>
        <div class="basic boxed-md centered intro-next-gen__container">
            <div class="basic boxed-sm centered intro-next-gen__text-container">
                <h2 class="heading light"><?php echo $heading; ?></h2>
                <div class="text"><?php echo $text_1; ?></div>
            </div>

            <div class="basic boxed-sm centered intro-next-gen__text-container">
                <h3 class="heading-m"><?php echo $subheading_1; ?></h3>
                <div class="text"><?php echo $text_2; ?></div>
            </div>

        </div>
        <div class="basic-section boxed-md centered accent-bg intro-next-gen__accent-box">

            <div class="boxed-sm centered intro-next-gen__text-container">
                <h3 class="heading-m"><?php echo $subheading_2; ?></h3>
                <div class="text"><?php echo $text_3; ?></div>
            </div>
        </div>
        </div>
    </section>

    <section class="basic text-center highlights-next-gen">

        <div class="boxed-md centered highlights-next-gen__container">

            <?php if (have_rows('next_gen__highlights')): while (have_rows('next_gen__highlights')): the_row();
                    $heading = get_sub_field('heading');
                    $subheading = get_sub_field('subheading');
                    $text_1 = get_sub_field('text_1');
                    $subheading_2 = get_sub_field('subheading_2');
                    $text_2 = get_sub_field('text_2');
            ?>
                    <div class="highlights-next-gen__item">
                        <h3 class="heading-m accent"><?php echo $heading; ?></h3>
                        <div class="heading-xs uppercase letter-spacing-medium"><?php echo $subheading; ?></div>
                        <div class="text"><?php echo $text_1; ?></div>
                        <div class="line-vertical"></div>
                        <div class="heading-s italic"><?php echo $subheading_2; ?></div>
                        <div class="text italic"><?php echo $text_2; ?></div>
                    </div>
            <?php endwhile;
            endif; ?>


        </div>
    </section>

    <section class="basic stats-next-gen">

        <div class="basic stats-next-gen__logos">
            <div class="line line--white stats-next-gen__line-1"></div>
            <div><img src="<?php echo get_template_directory_uri() . '/./assets/img/logo-next-gen.svg'; ?>" alt=""></div>
            <div class="line line--white stats-next-gen__line-2"></div>
            <div><img src="<?php echo get_template_directory_uri() . '/./assets/img/logo-next-gen.svg'; ?>" alt=""></div>

            <div class="line line--white stats-next-gen__line-3"></div>

        </div>

        <div class="boxed-sm centered stats-next-gen__container">

            <div class="basic-section stats-next-gen__list">
                <?php if (have_rows('next_gen__stats')): while (have_rows('next_gen__stats')): the_row();
                        $image = get_sub_field('image');
                        $number = get_sub_field('number');
                        $text = get_sub_field('text');
                ?>
                        <div>
                            <img src="<?php echo $image; ?>" alt="" class="stats-next-gen__item-img">

                            <div class="stats-next-gen__item-text-container">
                                <div>
                                    <div class="heading-ms bold"><?php echo $number; ?></div>
                                    <div class="text line-height-s"><?php echo $text; ?></div>
                                </div>
                            </div>
                        </div>
                <?php endwhile;
                endif; ?>
            </div>

            <div class="basic text-center">
                <div class="boxed-sm centered">
                    <h2 class="heading-m accent semibold">
                        <?php echo get_field('next_gen__how_it_works_heading'); ?>
                    </h2>
                </div>
            </div>

        </div>
    </section>

    <section class="how-it-works-next-gen">
        <div class="boxed-md centered">
            <?php if (have_rows('next_gen__how_it_works')): while (have_rows('next_gen__how_it_works')): the_row();
                    $heading = get_sub_field('heading');
            ?>

                    <div class="how-it-works-next-gen__list">
                        <?php if (have_rows('list')): while (have_rows('list')): the_row();
                                $item = get_sub_field('item');
                        ?>
                                <div class="how-it-works-next-gen__item">
                                    <div class="heading-ms semibold accent-bg how-it-works-next-gen__number">
                                        <?php echo get_row_index(); ?>
                                    </div>
                                    <div class="text line-height-s">
                                        <?php echo $item; ?>
                                    </div>
                                </div>
                        <?php
                            endwhile;
                        endif;
                        ?>
                    </div>
            <?php
                endwhile;
            endif;
            ?>

        </div>
    </section>

    <section class="basic-section card-next-gen">
        <?php $card_1 = get_field('next_gen__card_1');
        $heading = $card_1['heading'];
        $subheading_1 = $card_1['subheading_1'];
        $text_1 = $card_1['text_1'];
        $subheading_2 = $card_1['subheading_2'];
        $text_2 = $card_1['text_2'];
        $image = $card_1['image'];
        $text_3 = $card_1['text_3'];
        $text_4 = $card_1['text_4'];
        ?>

        <div class="boxed-md centered basic card-next-gen__container card-next-gen__container--1">
            <h2 class="heading-m"><?php echo $heading; ?></h2>
            <div class="basic card-next-gen__text-container">
                <div class="italic">
                    <div class="heading-s"><?php echo $subheading_1; ?></div>
                    <div class="text"><?php echo $text_1; ?></div>
                </div>
                <div class="italic">
                    <div class="heading-s"><?php echo $subheading_2; ?></div>
                    <div class="text"><?php echo $text_2; ?></div>
                </div>
            </div>
            <div class="card-next-gen__image-grid basic two-col-grid inline-padding">
                <div><img src="<?php echo $image; ?>" class="centered" alt=""></div>
                <div class="text">
                    <div class="medium secondary">
                        <?php echo $text_3; ?>
                    </div>
                    <div class="black"><?php echo $text_4; ?></div>
                </div>
            </div>

        </div>
    </section>

    <section class="basic banner-next-gen">
        <?php
        $less_is_more = get_field('next_gen__banner');
        $image = $less_is_more['image'];
        $heading = $less_is_more['heading'];
        $subheading = $less_is_more['subheading'];
        $text_1 = $less_is_more['text_1'];
        $text_2 = $less_is_more['text_2'];
        $text_3 = $less_is_more['text_3'];
        ?>

        <div class="boxed-md centered">
            <div><img src="<?php echo $image; ?>" class="centered banner-next-gen__image" alt=""></div>
            <div class="text-center basic banner-next-gen__text-container">
                <h2 class="heading light"><?php echo $heading; ?></h2>
                <div class="text"><?php echo $subheading; ?></div>
                <div class="line line--white banner-next-gen__line"></div>

                <div class="heading-s"><?php echo $text_1; ?></div>
            </div>
            <div class="text-ml italic banner-next-gen__capsules">
                <div class="banner-next-gen__capsule">
                    <div>
                        <img src="<?php echo get_template_directory_uri() . '/./assets/img/check.svg'; ?>" alt="">
                    </div>
                    <div class="text"><?php echo $text_2; ?></div>
                </div>
                <div class="banner-next-gen__capsule">
                    <div>
                        <img src="<?php echo get_template_directory_uri() . '/./assets/img/check.svg'; ?>" alt="">
                    </div>
                    <div class="text"><?php echo $text_3; ?></div>
                </div>
            </div>
        </div>
    </section>

    <section class="basic-section card-next-gen">
        <?php
        $card_2 = get_field('next_gen__card_2');
        $heading = $card_2['heading'];
        $subheading_1 = $card_1['subheading_1'];
        $text_1 = $card_2['text_1'];
        $subheading_2 = $card_2['subheading_2'];
        $text_2 = $card_2['text_2'];
        $gallery = $card_2['gallery'];
        ?>

        <div class="boxed-md centered basic accent-bg">
            <h2 class="heading-m"><?php echo $heading; ?></h2>
            <div class="basic card-next-gen__text-container">
                <div class="italic">
                    <div class="heading-s"><?php echo $subheading_1; ?></div>
                    <div class="text"><?php echo $text_1; ?></div>
                </div>
                <div class="italic">
                    <div class="heading-s"><?php echo $subheading_2; ?></div>
                    <div class="text"><?php echo $text_2; ?></div>
                </div>
            </div>

            <div class="basic carousel">
                <div class="carousel__track" data-glide-el="track">
                    <div class="carousel__container">


                        <?php if (!empty($gallery) && is_array($gallery)): ?>
                            <?php foreach ($gallery as $image): ?>
                                <div class="carousel__slide">
                                    <div>
                                        <img src="<?php echo $image; ?>" alt="">
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php endif; ?>
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


        </div>

    </section>

    <section class="basic-section card-next-gen">
        <?php
        $card_3 = get_field('next_gen__card_3');
        $heading = $card_3['heading'];
        $subheading_1 = $card_3['subheading_1'];
        $text = $card_3['text'];
        $image = $card_3['image'];
        ?>

        <div class="boxed-md centered basic accent-bg">
            <h2 class="heading-m"><?php echo $heading; ?></h2>
            <div class="text italic basic"><?php echo $subheading_1; ?></div>
            <div class="white-bg text-center">
                <div><img src="<?php echo $image; ?>" alt="" class="centered"></div>
                <div class="text italic basic black"><?php echo $text; ?></div>
            </div>
        </div>

    </section>

    <section class="basic last-section why-next-gen">
        <?php
        $why = get_field('next_gen__why');
        $heading = $why['heading'];
        $list = $why['list'];
        $button = $why['button'];
        $image = $why['image'];
        ?>

        <div class="basic-section boxed-md centered why-next-gen__container">
            <h2 class="heading-m"><?php echo $heading; ?></h2>

            <div class="why-next-gen__content">
                <div>
                    <div class="text-ml italic basic why-next-gen__list">
                        <?php echo $list; ?>
                    </div>

                    <a href="<?php echo $button['link']; ?>">
                        <button class="button text-button button--accent">
                            <span class="text-button button__text"><?php echo $button['text']; ?></span>
                        </button>
                    </a>
                </div>
                <div><img src="<?php echo $image; ?>"></div>
            </div>


        </div>
    </section>
</main>

<?php get_footer(); ?>