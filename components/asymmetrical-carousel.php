<section
    class="asymmetrical-carousel asymmetrical-carousel--<?php echo get_post_field('post_name', get_post()); ?> centered">
    <?php $banner_carousel_gallery = get_field('banner_carousel_gallery');
    $banner_carousel_text_1 = get_field('banner_carousel_text_1');
    $banner_carousel_text_2 = get_field('banner_carousel_text_2');
    $banner_carousel_text_3 = get_field('banner_carousel_text_3');
    $banner_carousel_btn_label = get_field('banner_carousel_btn_label');
    $banner_carousel_link = get_field('banner_carousel_link');
    ?>

    <?php $carousel_slide_count = is_array($banner_carousel_gallery) ? count($banner_carousel_gallery) : 0; ?>
    <div class="slides-container" data-asymmetrical-carousel-container>
        <div class="asymmetrical-carousel__container">

            <?php foreach ($banner_carousel_gallery as $image): ?>
                <div
                    class="asymmetrical-carousel__column"
                    data-asymmetrical-carousel-slide>
                    <div
                        class="asymmetrical-carousel__image-container fade-in-stagger"
                        draggable="true">
                        <img
                            src="<?php echo $image; ?>"
                            alt=""
                            class="asymmetrical-carousel__image<?php echo $carousel_slide_count <= 4 ? ' asymmetrical-carousel__image--no-carousel' : ''; ?>"
                            draggable-image />
                    </div>
                </div>
            <?php endforeach; ?>

        </div>


        <!-- Heading  -->
        <?php if ($banner_carousel_text_1 || $banner_carousel_text_2):  ?>
            <div class="asymmetrical-carousel__text heading-xxl lowercase">
                <span
                    class="asymmetrical-carousel__text--dark fx-text-huge fx-text-huge--1">
                    <?php echo $banner_carousel_text_1; ?>
                </span>
                <span
                    class="asymmetrical-carousel__text--light italic fx-text-huge fx-text-huge--2">
                    <?php echo $banner_carousel_text_2; ?></span>
            </div>
        <?php endif; ?>
    </div>

    <div class="boxed centered">
        <?php if ($banner_carousel_text_3): ?>
            <div class="basic boxed-sm no-padding text mask-text">
                <?php echo $banner_carousel_text_3; ?>
            </div>
        <?php endif; ?>
        <?php if ($banner_carousel_link): ?>
            <a href="<?php echo $banner_carousel_link; ?>">
                <button
                    class="button asymmetrical-carousel__button text-button mask-text">
                    <span class="text-button button__text"><?php echo $banner_carousel_btn_label; ?></span>
                </button>
            </a>
        <?php endif; ?>
    </div>
</section>