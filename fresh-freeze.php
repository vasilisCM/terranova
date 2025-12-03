<?php /* Template Name: Fresh Freeze */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="freshFreeze">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <?php $texts = get_field('fresh_freeze__texts');
        $text_1 = $texts['text_1'];
        $text_2 = $texts['text_2'];
        $text_3 = $texts['text_3'];
        $text_4 = $texts['text_4'];
        ?>
        <div class="boxed-sm centered intro__container">
            <?php the_content(); ?>
        </div>

        <!-- Icons -->
        <div class="basic boxed centered">
            <div class="basic icon-list"> <?php if (have_rows('icon_list')): ?>
                    <?php while (have_rows('icon_list')): the_row();

                                                    $image = get_sub_field('image');
                                                    $text = get_sub_field('text');
                    ?>
                        <div class="icon-list__item">
                            <div class="icon-list__img-container"><img src="<?php echo $image; ?>" alt=""></div>

                            <div class="text"><?php echo $text; ?></div>
                        </div>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>

        <div class="boxed centered">
            <div class="text italic"><?php echo $text_1; ?></div>
        </div>
    </section>

    <?php include 'components/asymmetrical-carousel.php'; ?>


    <section class="basic fresh-freeze-steps text-center">
        <div class="boxed centered text-container">
            <h2 class="heading-m"><?php echo $text_2; ?></h2>
            <div class="text"><?php echo $text_3; ?></div>

            <div class="fresh-freeze-steps__steps flex">
                <?php if (have_rows('fresh_freeze__steps')): ?>
                    <?php while (have_rows('fresh_freeze__steps')): the_row();
                        $image = get_sub_field('image');
                        $heading = get_sub_field('heading');
                        $text = get_sub_field('text');
                    ?>
                        <div class="fresh-freeze-steps__item flex">
                            <div class="fresh-freeze-steps__img-container"><img src="<?php echo $image; ?>" alt=""></div>
                            <div class="text-container">
                                <div>
                                    <div class="heading-s">Step <?php echo get_row_index(); ?></div>
                                    <h3 class="heading-ms"><?php echo $heading; ?></h3>
                                </div>
                                <div class="text"><?php echo $text; ?></div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
            <div class="text"><?php echo $text_4; ?></div>
        </div>

    </section>

    <section class="basic last-section fresh-freeze-difference">
        <?php $difference = get_field('fresh_freeze__difference');
        $heading = $difference['heading'];
        $text_1 = $difference['text_1'];
        $image = $difference['image'];
        $text_2 = $difference['text_2'];
        ?>
        <div class="boxed centered">
            <h2 class="heading-m text-center"><?php echo $heading; ?></h2>
            <div class="flex fresh-freeze-difference__diagram">
                <div class="text"><?php echo $text_1; ?></div>
                <div class="fresh-freeze-difference__img-container">
                    <img src="<?php echo $image; ?>" alt="">
                </div>
                <div class="text"><?php echo $text_2; ?></div>
            </div>
        </div>
    </section>


</main>

<?php get_footer(); ?>