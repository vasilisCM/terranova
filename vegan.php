<?php /* Template Name: Vegan */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="vegan">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <div class="boxed-sm centered intro__container text">
            <?php the_content(); ?>
        </div>
    </section>

    <section class="vegan-content">
        <?php $content = get_field('vegan__content');
        $heading = $content['heading'];
        $text_1 = $content['text_1'];
        $image_1 = $content['image_1'];
        $text_2 = $content['text_2'];
        $image_2 = $content['image_2'];
        ?>
        <div class="boxed-md centered">

            <div class="heading-m text-center"><?php echo $heading; ?></div>

            <div class="basic two-col-grid vegan-content__grid">
                <div class="flex vegan-content__item">
                    <div>
                        <img src="<?php echo $image_1; ?>" alt="">
                    </div>
                    <div class="heading-ms italic line-height-s"><?php echo $text_1; ?></div>

                </div>
                <div class="flex vegan-content__item">
                    <div>
                        <img src="<?php echo $image_2; ?>" alt="">
                    </div>
                    <div class="heading-ms italic line-height-s"><?php echo $text_2; ?></div>
                </div>
            </div>

    </section>


</main>

<?php get_footer(); ?>