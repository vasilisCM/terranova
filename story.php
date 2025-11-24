<?php /* Template Name: Story */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="story">
    <!-- Hero  -->
    <?php include 'components/hero.php'; ?>

    <section class="basic">
        <div class="boxed centered">
            <h2>Basic Section</h2>
        </div>
    </section>

    <section class="basic last-section">
        <div class="boxed centered">
            <h2>Last Section</h2>
        </div>
    </section>
</main>

<?php get_footer(); ?>