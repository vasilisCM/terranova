<?php /* Template Name: Story */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="story">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <?php $intro = get_field('story__intro');
        $text_1 = $intro['text_1'];
        $text_2 = $intro['text_2'];
        $text_3 = $intro['text_3'];
        $text_4 = $intro['text_4'];
        $text_5 = $intro['text_5'];
        ?>
        <div class="boxed centered">
            <div><?php echo $text_1; ?></div>
            <div><?php echo $text_2; ?></div>
            <div><?php echo $text_3; ?></div>
            <div><?php echo $text_4; ?></div>
            <div><?php echo $text_5; ?></div>
        </div>
    </section>

    <section class="basic story-inspiration">
        <?php $inspiration = get_field('story__inspiration');
        $heading = $inspiration['heading'];
        $text = $inspiration['text'];
        $image_1 = $inspiration['image_1'];
        $image_2 = $inspiration['image_2'];
        ?>
        <div class="boxed centered">
            <h2><?php echo $heading; ?></h2>
            <div><?php echo $text; ?></div>
            <div><img src="<?php echo $image_1; ?>" alt=""></div>
            <div><img src="<?php echo $image_2; ?>" alt=""></div>
        </div>
    </section>

    <section class="basic story-challenges">
        <?php $challenges = get_field('story__challenges');
        $image = $challenges['image'];
        $heading = $challenges['heading'];
        $text_1 = $challenges['text_1'];
        $text_2 = $challenges['text_2'];
        ?>
        <div class="boxed centered">
            <div><img src="<?php echo $image; ?>" alt=""></div>
            <h2><?php echo $heading; ?></h2>
            <div><?php echo $text_1; ?></div>
            <div><?php echo $text_2; ?></div>
        </div>
    </section>

    <section class="basic last-section story-global-presence">
        <?php $global_presence = get_field('story__global_presence');
        $image = $global_presence['image'];
        $heading = $global_presence['heading'];
        $text = $global_presence['text'];
        ?>
        <div class="boxed centered">
            <div><img src="<?php echo $image; ?>" alt=""></div>
            <h2><?php echo $heading; ?></h2>
            <div><?php echo $text; ?></div>
        </div>
    </section>
</main>

<?php get_footer(); ?>