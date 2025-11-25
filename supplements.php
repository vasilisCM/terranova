<?php /* Template Name: Supplements */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="supplements">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <div class="boxed-sm centered intro__container">
            <?php the_content(); ?>
        </div>
    </section>

    <section class="basic last-section">
        <div class="boxed centered">
            <?php include 'components/accordion.php'; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>