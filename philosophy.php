<?php /* Template Name: Philosophy */ ?>
<?php get_header(); ?>


<main data-barba="container"
    data-barba-namespace="philosophy">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <?php $intro = get_field('philosophy__intro');
        $text_1 = $intro['text_1'];
        $text_2 = $intro['text_2'];
        $text_3 = $intro['text_3'];
        $text_4 = $intro['text_4'];
        $text_5 = $intro['text_5'];
        $text_6 = $intro['text_6'];
        ?>
        <div class="boxed-sm centered intro__container">
            <div class="heading-xs uppercase letter-spacing-medium"><?php echo $text_1; ?></div>
            <div class="heading-m"><?php echo $text_2; ?></div>
            <div class="text"><?php echo $text_3; ?></div>
            <div class="heading-m"><?php echo $text_4; ?></div>
            <div class="text"><?php echo $text_5; ?></div>


        </div>

        <div class="basic boxed-md centered">
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

        <div class="boxed-sm centered">
            <div class="text"><?php echo $text_6; ?></div>
        </div>
    </section>

    <section class="basic last-section light-blue-bg text-center">
        <?php $matters = get_field('philosophy__matters');
        $text_1 = $matters['text_1'];
        $text_2 = $matters['text_2'];
        $text_3 = $matters['text_3'];
        $text_4 = $matters['text_4'];
        ?>
        <div class="basic boxed-sm centered text-container philosophy-matters__container">
            <div class="heading-xs uppercase letter-spacing-medium"><?php echo $text_1; ?></div>
            <div class="heading-m"><?php echo $text_2; ?></div>
            <div class="text"><?php echo $text_3; ?></div>
        </div>

        <div class="basic boxed centered">
            <div class="basic philosophy-matters__list">
                <?php if (have_rows('philosophy__matters')): ?>
                    <?php while (have_rows('philosophy__matters')): the_row();
                        if (have_rows('list')): ?>
                            <?php while (have_rows('list')): the_row();
                                $image = get_sub_field('image');
                                $heading = get_sub_field('heading');
                                $text = get_sub_field('text');
                            ?>
                                <div class="philosophy-matters__item">
                                    <div class="philosophy-matters__img-container"><img src="<?php echo $image; ?>" alt=""></div>

                                    <div class="philosophy-matters__item-text-container">
                                        <div class="heading-ms italic"><?php echo $heading; ?></div>
                                        <div class="text"><?php echo $text; ?></div>
                                    </div>
                                </div>
                <?php endwhile;
                        endif;
                    endwhile;
                endif; ?>


            </div>
        </div>

        <div class="basic boxed-sm centered">
            <div class="heading-ms"><?php echo $text_4; ?></div>
        </div>
    </section>
</main>

<?php get_footer(); ?>