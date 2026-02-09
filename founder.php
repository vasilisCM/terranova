<?php /* Template Name: Founder */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="founder">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <div class="boxed-sm centered intro__container text">
            <?php the_content(); ?>
        </div>
    </section>

    <section class="basic light-blue-bg founder-banner">
        <?php $text_banner = get_field('founder_text_banner');
        $heading = $text_banner['heading'];
        $text_1 = $text_banner['text_1'];
        $text_2 = $text_banner['text_2'];
        ?>
        <div class="boxed-md centered text-container">
            <h2 class="heading light founder-banner__heading"><?php echo $heading; ?></h2>
            <div class="text-ml italic"><?php echo $text_1; ?></div>
            <div class="text-m italic founder-banner__signature"><?php echo $text_2; ?></div>
        </div>
    </section>
</main>

<?php get_footer(); ?>