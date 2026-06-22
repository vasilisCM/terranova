<?php /* Template Name: My Time */ ?>
<?php get_header(); ?>


<main
    class="main"
    data-barba="container"
    data-barba-namespace="myTime">
    <!-- Hero  -->
    <section class="banner" style="background-image: url('<?php the_post_thumbnail_url('full'); ?>')">
        <?php
        $hero_extras = get_field('hero_extras');
        $image = $hero_extras['image'];
        $text = $hero_extras['text'];
        ?>
        <div class="banner__wrapper boxed centered">
            <div class="banner__container">
                <div class="banner__text-background"></div>
                <div class="banner__text-container">
                    <?php if ($image): ?>
                        <div class="banner__img-container">
                            <img src="<?php echo $image; ?>" alt="<?php the_title(); ?>" class="banner__image">
                        </div>

                    <?php endif; ?>

                    <h1 class="banner__heading heading lowercase">
                        <?php the_title(); ?>
                        <?php if ($text): ?>
                            <div class="heading banner__text italic"><?php echo $text; ?></div>
                        <?php endif; ?>
                    </h1>

                </div>
            </div>
        </div>
    </section>

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
                        <article
                            draggable-image
                            class="blog-home__post inline-padding relative" style="background-color: <?php echo $color; ?>;">

                            <?php if ($image): ?>
                                <div class="blog-home__image-container absolute <?php if ($bottom_image): ?> blog-home__image-container--bottom<?php endif; ?>">
                                    <img
                                        class="blog-home__image"
                                        src="<?php echo $image ? $image : '/wp-content/uploads/2025/11/blog-hero.jpg'; ?>"
                                        alt="<?php echo $heading; ?>" />
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

    <section class="basic last-section time-quote">
        <div class="boxed centered text-center time-quote__container">
            <?php $quote__my_time = get_field('quote__my_time'); ?>
            <div class="heading-m light-blue time-quote__quote">
                <?php echo $quote__my_time['text_1']; ?>
            </div>

            <a href="<?php echo $quote__my_time['button']['link']; ?>" class="time-quote__button">
                <button class="button text-button mask-text">
                    <span class="text-button button__text">
                        <div class="time-quote__button-text">
                            <div><?php echo $quote__my_time['text_2']; ?></div>
                            <div class="medium italic"><?php echo $quote__my_time['button']['label']; ?></div>
                        </div>
                    </span>
                </button>
            </a>

        </div>
    </section>

    <!-- Custom Cursor  -->
    <?php include 'components/custom-cursor.php'; ?>
</main>

<?php get_footer(); ?>