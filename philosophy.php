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
        <div class="boxed centered">
            <div><?php echo $text_1; ?></div>
            <div><?php echo $text_2; ?></div>
            <div><?php echo $text_3; ?></div>
            <div><?php echo $text_4; ?></div>
            <div><?php echo $text_5; ?></div>

            <div> <?php if (have_rows('icon_list')): ?>
                    <?php while (have_rows('icon_list')): the_row();
                            $heading = get_sub_field('heading');
                            $image = get_sub_field('image');
                            $text = get_sub_field('text');
                    ?>
                        <div><img src="<?php echo $image; ?>" alt=""></div>
                        <div><?php echo $heading; ?></div>
                        <div><?php echo $text; ?></div>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>

            <div><?php echo $text_6; ?></div>
        </div>
    </section>

    <section class="basic last-section">
        <?php $matters = get_field('philosophy__matters');
        $text_1 = $matters['text_1'];
        $text_2 = $matters['text_2'];
        $text_3 = $matters['text_3'];
        $text_4 = $matters['text_4'];
        ?>
        <div class="boxed centered">
            <div><?php echo $text_1; ?></div>
            <div><?php echo $text_2; ?></div>
            <div><?php echo $text_3; ?></div>

            <div>
                <?php if (have_rows('philosophy__matters')): ?>
                    <?php while (have_rows('philosophy__matters')): the_row();
                        if (have_rows('list')): ?>
                            <?php while (have_rows('list')): the_row();
                                $image = get_sub_field('image');
                                $heading = get_sub_field('heading');
                                $text = get_sub_field('text');
                            ?>
                                <div><img src="<?php echo $image; ?>" alt=""></div>
                                <div><?php echo $heading; ?></div>
                                <div><?php echo $text; ?></div>
                <?php endwhile;
                        endif;
                    endwhile;
                endif; ?>


            </div>

            <div><?php echo $text_4; ?></div>
        </div>
    </section>
</main>

<?php get_footer(); ?>