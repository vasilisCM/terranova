<?php
$gallery = get_field('image_gallery');

if ($gallery): ?>
    <!-- Gallery Grid  -->
    <div class="gallery">
        <div class="single-product__image-gallery-button text-ms uppercase letter-spacing-medium text-center gallery__item">(Image Gallery)</div>
        <!-- <?php // foreach ($gallery as $image): 
                ?>
            <div class="gallery__item">
                <div>
                    <img src="<?php // echo $image['url']; 
                                ?>" alt="<?php // echo $image['alt']; 
                                                                    ?>">
                </div>
            </div>
        <?php // endforeach; 
        ?> -->
    </div>
<?php endif; ?>