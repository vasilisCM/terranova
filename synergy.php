<?php /* Template Name: Synergy */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="synergy">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <div class="boxed-sm centered intro__container text">
            <?php the_content(); ?>
        </div>
    </section>

    <?php include 'components/asymmetrical-carousel.php'; ?>

    <section class="synergy-banner">
        <?php $banner = get_field('synergy__banner');
        $image = $banner['image'];
        $heading = $banner['heading'];
        $text_1 = $banner['text_1'];
        $text_2 = $banner['text_2'];
        ?>
        <div class="boxed-md centered text-center text-container synergy-banner__text-container">
            <div class="synergy-banner__image">
                <img src="<?php echo $image; ?>" alt="">
            </div>
            <div class="heading-m"><?php echo $heading; ?></div>
            <div class="text"><?php echo $text_1; ?></div>
        </div>

        <!-- Icons -->
        <div class="synergy-icons basic boxed-md centered">
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

        <div class="boxed centered text text-center">
            <div><?php echo $text_2; ?></div>
        </div>
    </section>



</main>

<?php get_footer(); ?>