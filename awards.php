<?php /* Template Name: Awards */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="awards">
    <!-- Hero  -->
    <!-- Hero  -->
    <section
        class="first-section hero-awards text-center">

        <div class="boxed-sm centered">

            <h1 class="heading light">
                <?php the_title(); ?>
            </h1>
            <div class="heading-ms">
                <?php the_content(); ?>
            </div>


        </div>
    </section>



    <section class="basic last-section">
        <div class="boxed-md centered">
            <?php if (have_rows('awards')): ?>
                <div class="accordion awards-accordion">
                    <?php while (have_rows('awards')): the_row();
                        $year = get_sub_field('year');
                    ?>
                        <div class="accordion__item awards-accordion__item">
                            <h3 class="accordion__button awards-accordion__button">
                                <span class="black"><?php echo $year; ?></span>
                                <span class="accordion__icon black">+</span>
                            </h3>
                            <div class="accordion__content awards-accordion__content">
                                <div class="awards-accordion__content-container">
                                    <?php if (have_rows('item')): ?>
                                        <?php while (have_rows('item')): the_row();
                                            $image = get_sub_field('image');
                                            $text = get_sub_field('text');
                                            $heading = get_sub_field('heading');
                                            $product = get_sub_field('product');
                                        ?>
                                            <div class="accordion__item">
                                                <div class="accordion__text awards-accordion__content-item">
                                                    <div class="awards-accordion__content-image">
                                                        <img src="<?php echo $image; ?>" alt="">
                                                    </div>
                                                    <h3 class="text-s uppercase letter-spacing-medium accent"><?php echo $heading; ?></h3>
                                                    <div class="heading-ms lowercase line-height-s"><?php echo $text; ?></div>
                                                    <?php if (!empty($product)) :
                                                        $product_id = url_to_postid($product);
                                                        $product_title = $product_id ? get_the_title($product_id) : $product;
                                                    ?>
                                                        <div>
                                                            <a href="<?php echo esc_url($product); ?>" class="accordion__product-link text awards-accordion__product-link">
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