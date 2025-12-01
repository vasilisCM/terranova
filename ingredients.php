<?php /* Template Name: Ingredients */ ?>
<?php get_header(); ?>


<main data-barba="container"
    data-barba-namespace="ingredients">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic">
        <div class="boxed centered">
            <h2>Basic Section</h2>
        </div>
    </section>

    <?php include 'components/asymmetrical-carousel.php'; ?>

    <section class="basic last-section">
        <div class="boxed centered">
            <h2>Last Section</h2>
        </div>
    </section>
</main>

<?php get_footer(); ?>