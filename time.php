<?php /* Template Name: My Time */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="myTime">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">

        <div class="boxed-sm centered intro__container text">
            <?php the_content(); ?>
        </div>
    </section>

    <?php include 'components/asymmetrical-carousel.php'; ?>


    <section class="basic">

        <div class="boxed centered">

        </div>
    </section>

    <section class="basic last-section">

        <div class="boxed centered">

        </div>
    </section>


</main>

<?php get_footer(); ?>