<?php /* Template Name: Next Gen */ ?>
<?php get_header(); ?>


<main
    data-barba="container"
    data-barba-namespace="nextGen"
    class="main-next-gen white">
    <?php
    $hero = get_field('next_gen__hero');
    $heading = $hero['heading'];
    $image_1 = $hero['image_1'];
    $image_2 = $hero['image_2'];
    $image_3 = $hero['image_3'];
    ?>

    <!-- Hero  -->
    <section
        class="first-section hero hero-next-gen">
        <div class="boxed centered hero__container">

            <div class="hero__text-container">

                <div>
                    <img src="<?php echo $image_1; ?>" alt="">
                </div>

                <h1 class="heading">
                    <?php echo $heading; ?>
                </h1>

            </div>

            <div>
                <img src="<?php echo $image_2; ?>" alt="">
            </div>
            <div>
                <img src="<?php echo $image_3; ?>" alt="">
            </div>
        </div>
    </section>

    <section class="basic text-center intro-next-gen">
        <?php
        $intro = get_field('next_gen__intro');
        $heading = $intro['heading'];
        $text_1 = $intro['text_1'];
        $subheading_1 = $intro['subheading_1'];
        $subheading_2 = $intro['subheading_2'];
        $text_2 = $intro['text_2'];
        $text_3 = $intro['text_3'];
        ?>
        <div class="boxed centered">
            <div>
                <h2><?php echo $heading; ?></h2>
                <div><?php echo $text_1; ?></div>
            </div>

            <div>
                <h3><?php echo $subheading_1; ?></h3>
                <div><?php echo $text_2; ?></div>
            </div>

            <div class="accent-bg">
                <h3><?php echo $subheading_2; ?></h3>
                <div><?php echo $text_3; ?></div>
            </div>
        </div>
    </section>

    <section class="basic text-center highlights-next-gen">

        <div class="boxed centered">
            <?php if (have_rows('next_gen__highlights')): while (have_rows('next_gen__highlights')): the_row();
                    $heading = get_sub_field('heading');
                    $subheading = get_sub_field('subheading');
                    $text_1 = get_sub_field('text_1');
                    $subheading_2 = get_sub_field('subheading_2');
                    $text_2 = get_sub_field('text_2');
            ?>
                    <div>
                        <h3 class="accent"><?php echo $heading; ?></h3>
                        <div class="uppercase"><?php echo $subheading; ?></div>
                        <div><?php echo $text_1; ?></div>
                        <div class="line-vertical"></div>
                        <div><?php echo $subheading_2; ?></div>
                        <div><?php echo $text_2; ?></div>
                    </div>
            <?php endwhile;
            endif; ?>


        </div>
    </section>

    <section class="basic text-center stats-next-gen">

        <div class="boxed centered">
            <?php if (have_rows('next_gen__stats')): while (have_rows('next_gen__stats')): the_row();
                    $image = get_sub_field('image');
                    $number = get_sub_field('number');
                    $text = get_sub_field('text');
            ?>
                    <div>
                        <img src="<?php echo $image; ?>" alt="">
                        <div class="bold"><?php echo $number; ?></div>
                        <div><?php echo $text; ?></div>
                    </div>
            <?php endwhile;
            endif; ?>


        </div>
    </section>

    <section class="basic how-it-works-next-gen">
        <div class="boxed centered">
            <?php if (have_rows('next_gen__how_it_works')): while (have_rows('next_gen__how_it_works')): the_row();
                    $heading = get_sub_field('heading');
            ?>
                    <h2><?php echo $heading; ?></h2>
                    <div>
                        <?php if (have_rows('list')): while (have_rows('list')): the_row();
                                $item = get_sub_field('item');
                        ?>
                                <div>
                                    <div class="accent-bg">
                                        <?php echo get_row_index(); ?>
                                    </div>
                                    <?php echo $item; ?>
                                </div>
                        <?php
                            endwhile;
                        endif;
                        ?>
                    </div>
            <?php
                endwhile;
            endif;
            ?>
            <div>
                <img src="<?php echo $image; ?>" alt="">
            </div>
        </div>
    </section>

    <section class="basic card-next-gen">
        <?php $card_1 = get_field('next_gen__card_1');
        $heading = $card_1['heading'];
        $subheading_1 = $card_1['subheading_1'];
        $text_1 = $card_1['text_1'];
        $subheading_2 = $card_1['subheading_2'];
        $text_2 = $card_1['text_2'];
        $image = $card_1['image'];
        ?>

        <div class="boxed centered accent-bg">
            <h2><?php echo $heading; ?></h2>
            <div>
                <div>
                    <div><?php echo $subheading_1; ?></div>
                    <div><?php echo $text_1; ?></div>
                </div>
                <div>
                    <div><?php echo $subheading_2; ?></div>
                    <div><?php echo $text_2; ?></div>
                </div>
            </div>
            <div><img src="<?php echo $image; ?>" alt=""></div>
        </div>
    </section>

    <section class="basic banner-next-gen">
        <?php
        $less_is_more = get_field('next_gen__banner');
        $image = $less_is_more['image'];
        $heading = $less_is_more['heading'];
        $subheading = $less_is_more['subheading'];
        $text_1 = $less_is_more['text_1'];
        $text_2 = $less_is_more['text_2'];
        $text_3 = $less_is_more['text_3'];
        ?>

        <div class="boxed centered">
            <div><img src="<?php echo $image; ?>" alt=""></div>
            <div class="text-center">
                <h2><?php echo $heading; ?></h2>
                <div><?php echo $subheading; ?></div>
                <div><?php echo $text_1; ?></div>
            </div>
            <div>
                <div><?php echo $text_2; ?></div>
                <div><?php echo $text_3; ?></div>
            </div>
        </div>
    </section>

    <section class="basic card-next-gen">
        <?php
        $card_2 = get_field('next_gen__card_2');
        $heading = $card_2['heading'];
        $subheading_1 = $card_1['subheading_1'];
        $text_1 = $card_2['text_1'];
        $subheading_2 = $card_2['subheading_2'];
        $text_2 = $card_2['text_2'];
        $gallery = $card_2['gallery'];
        ?>

        <div class="boxed centered accent-bg">
            <h2><?php echo $heading; ?></h2>
            <div>
                <div>
                    <div><?php echo $subheading_1; ?></div>
                    <div><?php echo $text_1; ?></div>
                </div>
                <div>
                    <div><?php echo $subheading_2; ?></div>
                    <div><?php echo $text_2; ?></div>
                </div>
            </div>

            <div class="gallery">
                <?php if (!empty($gallery) && is_array($gallery)): ?>
                    <?php foreach ($gallery as $image): ?>
                        <div class="gallery__item">
                            <div>
                                <img src="<?php echo $image; ?>" alt="">
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>

    </section>

    <section class="basic card-next-gen">
        <?php
        $card_3 = get_field('next_gen__card_3');
        $heading = $card_3['heading'];
        $subheading_1 = $card_3['subheading_1'];
        $text = $card_3['text'];
        $image = $card_3['image'];
        ?>

        <div class="boxed centered accent-bg">
            <h2><?php echo $heading; ?></h2>
            <div><?php echo $subheading_1; ?></div>
            <div><img src="<?php echo $image; ?>" alt=""></div>
            <div><?php echo $text; ?></div>
        </div>

    </section>

    <section class="basic last-section why-next-gen">
        <?php
        $why = get_field('next_gen__why');
        $heading = $why['heading'];
        $list = $why['list'];
        $button = $why['button'];
        $image = $why['image'];
        ?>

        <div class="boxed centered">
            <h2><?php echo $heading; ?></h2>
            <div>
                <?php echo $list; ?>
            </div>
            <div><img src="<?php echo $image; ?>"></div>

            <a href="<?php echo $button['link']; ?>">
                <button class="button text-button">
                    <span class="text-button button__text"><?php echo $button['text']; ?></span>
                </button>
            </a>
        </div>
    </section>
</main>

<?php get_footer(); ?>