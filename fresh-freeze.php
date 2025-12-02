<?php /* Template Name: Fresh Freeze */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="freshFreeze">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <div class="boxed-sm centered intro__container">
            <?php the_content(); ?>
        </div>
    </section>


</main>

<?php get_footer(); ?>