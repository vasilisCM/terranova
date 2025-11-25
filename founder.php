<?php /* Template Name: Founder */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="founder">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <div class="boxed-sm centered intro__container">
            <?php the_content(); ?>
        </div>
    </section>

    <section class="basic last-section light-blue-bg">
        <?php $text_banner = get_field('founder_text_banner');
        $heading = $text_banner['heading'];
        $text_1 = $text_banner['text_1'];
        $text_2 = $text_banner['text_2'];
        ?>
        <div class="boxed centered">
            <h2><?php echo $heading; ?></h2>
            <div><?php echo $text_1; ?></div>
            <div><?php echo $text_2; ?></div>
        </div>
    </section>
</main>

<?php get_footer(); ?>