<?php /* Template Name: Ingredients */ ?>
<?php get_header(); ?>


<main data-barba="container"
    data-barba-namespace="ingredients">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <div class="boxed-md centered intro__container text">
            <?php the_content(); ?>
        </div>
    </section>

    <?php include 'components/asymmetrical-carousel.php'; ?>

    <section class="basic text-center">
        <div class="boxed-sm centered intro__container text">
            <?php echo get_field('ingredients__text'); ?>
        </div>
    </section>

    <?php include 'components/accordion.php'; ?>
</main>

<?php get_footer(); ?>