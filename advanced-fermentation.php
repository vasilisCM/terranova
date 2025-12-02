<?php /* Template Name: Advanced Fermentation */ ?>
<?php get_header(); ?>


<main data-barba="container"
    data-barba-namespace="advancedFermentation">
    <!-- Hero  -->
    <?php include 'components/hero-with-bg.php'; ?>

    <section class="basic intro text-center">
        <div class="boxed-md centered intro__container">
            <?php the_content(); ?>
        </div>
    </section>

    <?php include 'components/asymmetrical-carousel.php'; ?>

    <section class="basic text-center">
        <div class="boxed-sm centered intro__container">
            <?php echo get_field('advanced_fermentation__text'); ?>
        </div>
    </section>

    <section class="fermendics">
        <div class="boxed-md centered fermendics__container two-col-grid basic-section">
            <div class="fermendics__column intro__container">
                <?php echo get_field('advanced_fermentation__two_columns')['text_1']; ?>
            </div>
            <div class="fermentics__column intro__container">
                <?php echo get_field('advanced_fermentation__two_columns')['text_2']; ?>
            </div>
        </div>
    </section>

    <section class="basic text-center advanced-fermentation__icons-section">
        <div class="boxed-sm centered intro__container basic">
            <?php echo get_field('advanced_fermentation__icons_section')['text']; ?>
        </div>

        <?php if (have_rows('icon_list')): ?>
            <div class="advanced-fermentation__icon-list-title text-center text-m letter-spacing-wide basic">
                <?php echo get_field('advanced_fermentation__icons_section')['icons_title']; ?>
            </div>
            <div class="advanced-fermentation__icons-list boxed-sm centered">

                <?php while (have_rows('icon_list')): the_row();
                    $image = get_sub_field('image');
                    $text = get_sub_field('text');
                ?>
                    <div class="advanced-fermentation__icon-item text-center">
                        <div class="advanced-fermentation__icon-item-img-container">
                            <img src="<?php echo $image; ?>" alt="" class="centered">
                        </div>
                        <div class="advanced-fermentation__icon-item-text-container">
                            <div class="text"><?php echo $text; ?></div>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>

    </section>

</main>

<?php get_footer(); ?>