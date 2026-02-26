<?php /* Template Name: Super Skin Drink */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="superSkinDrink">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <div class="boxed-sm centered intro__container text">
            <?php the_content(); ?>
        </div>

        <div class="basic boxed-md centered serum-organic-list">
            <div class="serum-organic-list__container"> <?php if (have_rows('icon_list')): ?>
                    <?php while (have_rows('icon_list')): the_row();
                                                                $heading = get_sub_field('heading');
                                                                $image = get_sub_field('image');
                                                                $text = get_sub_field('text');
                    ?>
                        <div class="serum-organic-list__item">
                            <div class="serum-organic-list__img-container"><img src="<?php echo $image; ?>" alt="" class="card-icon__img"></div>
                            <div>
                                <div class="text bold"><?php echo $heading; ?></div>
                                <div class="text"><?php echo $text; ?></div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>

        </div>
    </section>

    <section class="basic text-center super-skin-drink-ingredients">
        <?php $ingredients = get_field('super_skin_drink__ingredients');
        $heading = $ingredients['heading'];
        $text = $ingredients['text'];
        $image_1 = $ingredients['image'];
        $subheading_1 = $ingredients['subheading_1'];
        $description_1 = $ingredients['description_1'];
        $subheading_2 = $ingredients['subheading_2'];
        $description_2 = $ingredients['description_2'];
        ?>
        <div class="boxed-md centered">
            <div class="heading-m "><?php echo $heading; ?></div>
            <div class="text"><?php echo $text; ?></div>
        </div>

        <div class="boxed-md centered basic flex super-skin-drink-ingredients__list">
            <?php if (have_rows('super_skin_drink__ingredients')): while (have_rows('super_skin_drink__ingredients')): the_row();
                    if (have_rows('list')): while (have_rows('list')): the_row();
                            $image = get_sub_field('image');
                            $text = get_sub_field('text');
            ?>
                            <div class="super-skin-drink-ingredients__item">
                                <div class="super-skin-drink-ingredients__img-container"><img src="<?php echo $image; ?>" alt="" class="card-icon__img"></div>
                                <div class="text"><?php echo $text; ?></div>
                            </div>
            <?php endwhile;
                    endif;
                endwhile;
            endif; ?>
        </div>

    </section>

    <section class="first-section super-skin-drink-hows">
        <div class="boxed-md centered light-gray-bg">
            <div class="super-skin-drink-hows__img-container">
                <img src="<?php echo $image_1; ?>" alt="">
            </div>

            <div class="super-skin-drink-hows__text-container basic two-col-grid italic">
                <div class="text-container">
                    <div class="heading-s"><?php echo $subheading_1; ?></div>
                    <div class="text"><?php echo $description_1; ?></div>
                </div>
                <div class="text-container">
                    <div class="heading-s"><?php echo $subheading_2; ?></div>
                    <div class="text"><?php echo $description_2; ?></div>
                </div>
            </div>
        </div>
    </section>

    <?php $banner = get_field('super_skin_drink__banner');
    $image = $banner['image'];
    $text = $banner['text'];
    $button = get_field('super_skin_cards_button');
    ?>
    <section class="basic-section white super-skin-drink-banner" style="background-image: url('<?php echo $image; ?>');">
        <div class="boxed-md centered">
            <div class="super-skin-drink-banner__heading heading-m line-height-s"><?php echo $text; ?></div>
        </div>
    </section>

    <section class="last-section super-skin-drink-cards">
        <div class="boxed-md centered super-skin-drink-cards__container">
            <div class="super-skin-drink-cards__cards">
                <?php if (have_rows('super_skin_drink__cards')): while (have_rows('super_skin_drink__cards')): the_row();

                        $image = get_sub_field('image');
                        $heading = get_sub_field('heading');
                        $text = get_sub_field('text');
                ?>
                        <div class="super-skin-drink-cards__card">
                            <div class="super-skin-drink-cards__img-container"><img src="<?php echo $image; ?>" alt=""></div>
                            <div class="super-skin-drink-cards__text-container accent-bg white inline-padding">
                                <div class="super-skin-drink-cards__card-step">
                                    <div class="heading-xs uppercase letter-spacing-medium super-skin-drink-cards__card-step-label">Step </div>
                                    <div class="heading-ms semibold super-skin-drink-cards__card-step-number super-skin-drink-cards__card-step-number--<?php echo get_row_index(); ?>"><?php echo get_row_index(); ?></div>
                                </div>
                                <div class="heading-m line-height-s semibold"><?php echo $heading; ?></div>
                                <div class="text basic"><?php echo $text; ?></div>
                            </div>
                        </div>
                <?php
                    endwhile;
                endif; ?>
            </div>

            <a href="<?php echo $button['link']; ?>">
                <button class="button text-button centered">
                    <span class="text-button button__text"><?php echo $button['text_1']; ?> <?php echo $button['text_2']; ?></span>
                </button>
            </a>
        </div>
    </section>

</main>

<?php get_footer(); ?>