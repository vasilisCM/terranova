<?php /* Template Name: Additive Free */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="additiveFree">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <?php $intro = get_field('additive_free__intro');
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


    <?php include 'components/asymmetrical-carousel.php'; ?>

    <section class="basic last-section text-center">
        <?php $texts = get_field('additive_free__texts');
        $text_1 = $texts['text_1'];
        $text_2 = $texts['text_2'];
        $text_3 = $texts['text_3'];
        ?>
        <div class="boxed-sm centered text-container additive-free__text-container">
            <div class="heading-ms line-height-s"><?php echo $text_1; ?></div>
            <div class="text margin-p"><?php echo $text_2; ?></div>
            <div class="heading-ms line-height-s"><?php echo $text_3; ?></div>
        </div>
    </section>

    <!-- Custom Cursor  -->
    <?php // include 'components/custom-cursor.php'; 
    ?>

</main>

<?php get_footer(); ?>