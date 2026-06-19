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

    <section class="cards-time">

        <?php if (have_rows('list__my_time')): ?>
            <?php while (have_rows('list__my_time')): the_row();
                $heading = get_sub_field('heading');
                $text = get_sub_field('text');
                $button = get_sub_field('button');
                $image = get_sub_field('image');
                $button_label = $button['label'] ?? '';
                $button_link = $button['link'] ?? '';
                $row_index = get_row_index();
                // Add modifier class on even rows
                $item_class = 'cards-time__item';
                if ($row_index % 2 === 0) {
                    $item_class .= ' cards-time__item--flipped';
                }
            ?>
                <div class="cards-time__item-bg">
                    <div class="boxed-md centered">
                        <div class="<?php echo $item_class; ?>">
                            <div class="cards-time__item-text">
                                <h3 class="heading-m"><?php echo $heading; ?></h3>
                                <div class="text"><?php echo $text; ?></div>
                                <?php if ($button_label && $button_link): ?>
                                    <a href="<?php echo $button_link; ?>">
                                        <button class="button text-button mask-text">
                                            <span class="text-button button__text"><?php echo $button_label; ?></span>
                                        </button>
                                    </a>
                                <?php endif; ?>
                            </div>

                            <?php if ($image): ?>
                                <div class="cards-time__item-image">
                                    <img src="<?php echo $image; ?>" alt="">
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>

                </div>
            <?php endwhile; ?>
        <?php endif; ?>


    </section>


    <!-- Moments  -->
    <section class="moments-time basic-section">
        <?php
        $moments = get_field('moments__my_time');
        $heading = $moments['heading'];
        $text = $moments['text'];
        $list = $moments['list'];
        ?>
        <div class="boxed centered">
            <h2 class="heading lowercase"><?php echo $heading; ?></h2>
            <div class="text"><?php echo $text; ?></div>
        </div>
        <!-- Archive  -->
        <div class="push-left blog-home__archive-container">
            <div class="blog-home__archive">
                <!-- Posts  -->
                <?php
                if (!empty($list)) :
                    foreach ($list as $item) :
                        $image = $item['image'];
                        $bottom_image = $item['bottom_image'];
                        $heading = $item['heading'];
                        $text = $item['text'];
                        $color = $item['color'];
                ?>
                        <article class="blog-home__post inline-padding relative" style="background-color: <?php echo $color; ?>;">

                            <?php if ($image): ?>
                                <div class="blog-home__image-container absolute <?php if ($bottom_image): ?> blog-home__image-container--bottom<?php endif; ?>">
                                    <img
                                        class="blog-home__image"
                                        src="<?php echo $image ? $image : '/wp-content/uploads/2025/11/blog-hero.jpg'; ?>"
                                        alt="<?php echo $heading; ?>"
                                        draggable-image />
                                </div>
                            <?php endif; ?>
                            <div class="blog-home__text-container">
                                <h3 class="blog-home__heading heading-ms semibold italic line-height-s">
                                    <?php echo $heading; ?>
                                </h3>
                                <div class="blog-home__text text italic"><?php echo $text; ?></div>
                            </div>
                        </article>
                <?php
                    endforeach;
                endif;
                ?>
            </div>
        </div>



    </section>

    <section class="basic last-section">
        <div class="boxed centered text-center">
            <?php $quote__my_time = get_field('quote__my_time'); ?>
            <div class="heading-ms light-blue">
                <?php echo $quote__my_time['text_1']; ?>
            </div>

            <a href="<?php echo $quote__my_time['button']['link']; ?>">
                <button class="button text-button mask-text">
                    <span class="text-button button__text"><?php echo $quote__my_time['button']['label']; ?></span>
                </button>
            </a>

        </div>
    </section>


</main>

<?php get_footer(); ?>