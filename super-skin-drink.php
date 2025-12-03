<?php /* Template Name: Super Skin Drink */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="superSkinDrink">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <div class="boxed-sm centered intro__container">
            <?php the_content(); ?>
        </div>

        <div class="basic boxed centered">
            <div class="basic icon-list"> <?php if (have_rows('icon_list')): ?>
                    <?php while (have_rows('icon_list')): the_row();
                                                    $heading = get_sub_field('heading');
                                                    $image = get_sub_field('image');
                                                    $text = get_sub_field('text');
                    ?>
                        <div class="icon-list__item">
                            <div class="icon-list__img-container"><img src="<?php echo $image; ?>" alt=""></div>
                            <div class="heading-xs uppercase letter-spacing-medium"><?php echo $heading; ?></div>
                            <div class="text"><?php echo $text; ?></div>
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
        <div class="boxed centered">
            <div class="heading-m "><?php echo $heading; ?></div>
            <div class="text"><?php echo $text; ?></div>
        </div>

        <div class="boxed centered basic flex">
            <?php if (have_rows('super_skin_drink__ingredients')): while (have_rows('super_skin_drink__ingredients')): the_row();
                    if (have_rows('list')): while (have_rows('list')): the_row();
                            $image = get_sub_field('image');
                            $text = get_sub_field('text');
            ?>
                            <div class="super-skin-drink-ingredients__item">
                                <div class="super-skin-drink-ingredients__img-container"><img src="<?php echo $image; ?>" alt=""></div>
                                <div class="text"><?php echo $text; ?></div>
                            </div>
            <?php endwhile;
                    endif;
                endwhile;
            endif; ?>
        </div>

        <div class="boxed centered basic">
            <div class="super-skin-drink-ingredients__img-container">
                <img src="<?php echo $image_1; ?>" alt="">
            </div>

            <div class="two-col-grid italic">
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
    <section class="basic white super-skin-drink-banner" style="background-image: url('<?php echo $image; ?>');">
        <div class="boxed centered">
            <div class="heading-m"><?php echo $text; ?></div>
        </div>
    </section>

    <section class="basic last-section super-skin-drink-cards">
        <div class="boxed centered super-skin-drink-cards__container">
            <div class="flex super-skin-drink-cards__cards">
                <?php if (have_rows('super_skin_drink__cards')): while (have_rows('super_skin_drink__cards')): the_row();

                        $image = get_sub_field('image');
                        $heading = get_sub_field('heading');
                        $text = get_sub_field('text');
                ?>
                        <div class="super-skin-drink-cards__card">
                            <div class="super-skin-drink-cards__img-container"><img src="<?php echo $image; ?>" alt=""></div>
                            <div class="super-skin-drink-cards__text-container accent-bg white">
                                <div>
                                    <span class="heading-xs uppercase letter-spacing-medium">Step </span>
                                    <span class="heading-ms"><?php echo get_row_index(); ?></span>
                                </div>
                                <div class="heading-m"><?php echo $heading; ?></div>
                                <div class="text"><?php echo $text; ?></div>
                            </div>
                        </div>
                <?php
                    endwhile;
                endif; ?>
            </div>

            <a href="<?php echo $button['link']; ?>">
                <button class="button text-button">
                    <span class="text-button button__text"><?php echo $button['text_1']; ?> <?php echo $button['text_2']; ?></span>
                </button>
            </a>
        </div>
    </section>


</main>

<?php get_footer(); ?>