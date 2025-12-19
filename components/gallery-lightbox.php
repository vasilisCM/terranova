<?php
$gallery = get_field('image_gallery');

if ($gallery): ?>
    <!-- Lightbox  -->
    <div class="lightbox lightbox--hidden">
        <div class="boxed centered lightbox__container">
            <div class="lightbox__close">
                <span class="lightbox__close-button heading-l">&times;</span>
            </div>

            <div class="carousel__track" data-glide-el="track">
                <div class="carousel__container">
                    <?php foreach ($gallery as $image): ?>
                        <div class="carousel__slide">
                            <div class="lightbox__img-container">
                                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                            </div>
                            <div class="lightbox__caption">
                                <?php echo $image['caption']; ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <div class="carousel__bottom">
                <div class="carousel__controls">
                    <div class="carousel__button carousel__button--previous"></div>
                    <div class="carousel__dots" data-glide-el="controls[nav]"></div>
                    <div class="carousel__button carousel__button--next"></div>
                </div>
            </div>

        </div>
    </div>
<?php endif; ?>