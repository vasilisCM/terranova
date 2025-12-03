<?php /* Template Name: Serum Organic */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="serumOrganic">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <?php $intro = get_field('serum_organic__intro');
        $text_1 = $intro['text_1'];
        $text_2 = $intro['text_2'];
        $text_3 = $intro['text_3'];
        ?>
        <div class="boxed-sm centered intro__container">
            <div class="heading-xs uppercase letter-spacing-medium"><?php echo $text_1; ?></div>
            <div class="heading-m"><?php echo $text_2; ?></div>
            <div class="text"><?php echo $text_3; ?></div>
        </div>
    </section>

    <section class="serum-organic__banner">
        <?php $banner = get_field('serum_organic__banner');
        $image = $banner['image'];
        $heading = $banner['heading'];
        $text = $banner['text'];
        ?>
        <div class="boxed centered flex">
            <div>
                <img src="<?php echo $image; ?>" alt="" class="">
            </div>
            <div>
                <div class="heading-m text-center accent-bg white"><?php echo $heading; ?></div>
                <div class="text italic primary-bg"><?php echo $text; ?></div>
            </div>
    </section>

    <section class="basic serum-organic-list">
        <div class="boxed centered flex serum-organic-list__container">
            <?php if (have_rows('serum_organic__icon_list')): ?>
                <?php while (have_rows('serum_organic__icon_list')): the_row();
                    $image = get_sub_field('image');
                    $heading = get_sub_field('heading');
                ?>
                    <div class="serum-organic__item">
                        <div class="serum-organic__img-container"><img src="<?php echo $image; ?>" alt=""></div>
                        <div class="text italic"><?php echo $heading; ?></div>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </section>

    <section class="serum-organic-how-it-works text-center">
        <?php $how_it_works = get_field('serum_organic__how_it_works');
        $heading = $how_it_works['heading'];
        $text = $how_it_works['text'];
        $image = $how_it_works['image'];
        ?>
        <div class="boxed centered">
            <h2 class="heading-m text-center"><?php echo $heading; ?></h2>
            <div class="text"><?php echo $text; ?></div>

            <div class="serum-organic-how-it-works__icon-list basic flex">
                <?php
                if (have_rows('serum_organic__how_it_works')): while (have_rows('serum_organic__how_it_works')) : the_row();
                        if (have_rows('list')): while (have_rows('list')) : the_row();
                ?>
                                <div class="serum-organic__item">
                                    <div class="serum-organic__img-container"><img src="<?php echo get_sub_field('image'); ?>" alt=""></div>
                                    <div class="text italic"><?php echo get_sub_field('text'); ?></div>
                                </div>
                <?php
                            endwhile;
                        endif;
                    endwhile;
                endif;
                ?>
            </div>

            <div class="serum-organic-how-it-works__img-container">
                <img src="<?php echo $image; ?>" alt="">
            </div>
        </div>
    </section>

    <section class="basic serum-organic-ingredients light-blue-bg text-center">
        <?php $ingredients = get_field('serum_organic__ingredients');
        $heading = $ingredients['heading'];
        $text_1 = $ingredients['text_1'];
        $text_2 = $ingredients['text_2'];
        ?>
        <div class="boxed centered">
            <div class="text-container">
                <h2 class="heading-m text-center"><?php echo $heading; ?></h2>
                <div class="text"><?php echo $text_1; ?></div>
            </div>

            <div class="serum-organic-ingredients__list basic flex">
                <?php
                if (have_rows('serum_organic__ingredients')): while (have_rows('serum_organic__ingredients')) : the_row();
                        if (have_rows('list')): while (have_rows('list')) : the_row();
                ?>
                                <div class="serum-organic-ingredients__item">
                                    <div class="serum-organic-ingredients__img-container"><img src="<?php echo get_sub_field('image'); ?>" alt=""></div>
                                    <div class="text italic"><?php echo get_sub_field('text'); ?></div>
                                </div>
                <?php
                            endwhile;
                        endif;
                    endwhile;
                endif;
                ?>
            </div>

            <div class="text"><?php echo $text_2; ?></div>
        </div>
    </section>

    <?php $importance = get_field('serum_organic__importance');
    $image = $importance['image'];
    $background = $importance['background'];
    $heading = $importance['heading'];
    $text = $importance['text'];
    ?>
    <section class="basic serum-organic-importance" style="background-image: url('<?php echo $background; ?>');">

        <div class="boxed centered flex">
            <div class="serum-organic-importance__img-container">
                <img src="<?php echo $image; ?>" alt="">
            </div>
            <div class="text-container">
                <h2 class="heading-m text-center"><?php echo $heading; ?></h2>
                <div class="text italic"><?php echo $text; ?></div>
            </div>
        </div>

    </section>

    <section class="basic serum-organic-why text-center">
        <?php $why = get_field('serum_organic__why');
        $image = $why['image'];
        $text_1 = $why['text_1'];
        $text_2 = $why['text_2'];
        $text_3 = $why['text_3'];
        $text_4 = $why['text_4'];
        $text_5 = $why['text_5'];
        ?>
        <div class="boxed centered">
            <div><img src="<?php echo $image; ?>" alt=""></div>
            <div class="heading-xs uppercase letter-spacing-medium"><?php echo $text_1; ?></div>

            <div class="basic text-container">
                <div class="heading-m"><?php echo $text_2; ?></div>
                <div class="text"><?php echo $text_3; ?></div>
            </div>

            <div class="basic">
                <h3 class="heading-m"><?php echo $text_4; ?></h3>

                <div class="basic flex">
                    <?php if (have_rows('serum_organic__why')): while (have_rows('serum_organic__why')) : the_row();
                            if (have_rows('list')): while (have_rows('list')) : the_row();
                    ?>
                                    <div class="serum-organic-why__item">
                                        <div class="serum-organic-why__img-container"><img src="<?php echo get_sub_field('image'); ?>" alt=""></div>
                                        <div class="accent uppercase bold">Step <?php echo get_row_index(); ?></div>
                                        <div class="text"><?php echo get_sub_field('text'); ?></div>
                                    </div>
                    <?php endwhile;
                            endif;
                        endwhile;
                    endif; ?>
                </div>

                <div class="text italic"><?php echo $text_5; ?></div>
            </div>
        </div>
    </section>

    <?php $skin_nutrition_banner = get_field('serum_organic__skin_nutrition_banner');
    $image = $skin_nutrition_banner['image'];
    $text_1 = $skin_nutrition_banner['text_1'];
    $text_2 = $skin_nutrition_banner['text_2'];
    $text_3 = $skin_nutrition_banner['text_3'];
    $button = $skin_nutrition_banner['button'];
    ?>
    <section class="basic last-section serum-organic-skin-nutrition-banner text-center" style="background-image: url('<?php echo $image; ?>');">

        <div class="boxed-sm centered">
            <div class="heading-xs uppercase letter-spacing-medium secondary"><?php echo $text_1; ?></div>
            <div class="heading-m secondary"><?php echo $text_2; ?></div>
            <div class="text"><?php echo $text_3; ?></div>
            <div class="button-container">


                <a href="<?php echo $button['link']; ?>">
                    <button class="button text-button">
                        <span class="text-button button__text"><?php echo $button['text_1']; ?> <?php echo $button['text_2']; ?></span>
                    </button>
                </a>
            </div>
        </div>
    </section>



</main>

<?php get_footer(); ?>