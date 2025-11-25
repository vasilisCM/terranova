<?php /* Template Name: Awards */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="awards">
    <!-- Hero  -->
    <?php include 'components/hero.php'; ?>



    <section class="basic last-section">
        <div class="boxed centered">
            <?php if (have_rows('awards')): ?>
                <div class="accordion">
                    <?php while (have_rows('awards')): the_row();
                        $year = get_sub_field('year');
                    ?>
                        <div class="accordion__item">
                            <h3 class="accordion__button">
                                <span><?php echo $year; ?></span>
                                <span class="accordion__icon">+</span>
                            </h3>
                            <div class="accordion__content">
                                <div class="accordion__text">
                                    <?php if (have_rows('item')): ?>
                                        <?php while (have_rows('item')): the_row();
                                            $image = get_sub_field('image');
                                            $text = get_sub_field('text');
                                            $heading = get_sub_field('heading');
                                            $product = get_sub_field('product');
                                        ?>
                                            <div class="accordion__item">
                                                <div class="accordion__text">
                                                    <div>
                                                        <img src="<?php echo $image; ?>" alt="">
                                                    </div>
                                                    <h3><?php echo $heading; ?></h3>
                                                    <div><?php echo $text; ?></div>
                                                    <?php if (!empty($product)) :
                                                        $product_id = url_to_postid($product);
                                                        $product_title = $product_id ? get_the_title($product_id) : $product;
                                                    ?>
                                                        <div>
                                                            <a href="<?php echo esc_url($product); ?>" class="accordion__product-link">
                                                                <?php echo esc_html($product_title); ?>
                                                            </a>
                                                        </div>
                                                    <?php endif; ?>
                                                </div>
                                            </div>
                                        <?php endwhile; ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>