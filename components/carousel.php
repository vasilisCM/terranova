<?php
global $post;
$original_post = $post;

$carousel_settings = get_field('carousel_settings');
$is_clickable = $carousel_settings['is_clickable'];
$is_post_carousel = $carousel_settings['is_post_carousel'];

$post_type = $carousel_settings['post_carousel_data']['post_type'];
$posts_number = $carousel_settings['post_carousel_data']['posts_number'];
$category = $carousel_settings['post_carousel_data']['post_category'];;
$button_text = $carousel_settings['post_carousel_data']['button_text'];

$args = array(
    'post_type' => $post_type,
    'posts_per_page' => $posts_number,
    'category_name' => $category,
);

$wp_query = new WP_Query($args);
?>

<div class="carousel">


    <div class="carousel__track" data-glide-el="track">
        <div class="carousel__container">

            <?php if (!$is_post_carousel && have_rows('carousel')): ?>
                <!-- ACF Repeater Slides -->
                <?php while (have_rows('carousel')): the_row(); ?>
                    <?php
                    $heading = get_sub_field('heading');
                    $image = get_sub_field('image');
                    $content = get_sub_field('content');
                    $link = get_sub_field('link');
                    ?>
                    <?php if ($is_clickable && $link): ?>
                        <a href="<?php echo $link; ?>" class="carousel__slide">
                        <?php else: ?>
                            <div class="carousel__slide">
                            <?php endif; ?>

                            <?php if ($heading): ?>
                                <h3><?php echo $heading; ?></h3>
                            <?php endif; ?>

                            <?php if ($image): ?>
                                <div>
                                    <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                                </div>
                            <?php endif; ?>

                            <?php if ($content): ?>
                                <div><?php echo $content; ?></div>
                            <?php endif; ?>

                            <?php if ($is_clickable && $button_text): ?>
                                <button class="button"><?php echo $button_text; ?></button>
                            <?php endif; ?>

                            <?php if ($is_clickable && $link): ?>
                        </a>
                    <?php else: ?>
        </div>
    <?php endif; ?>
<?php endwhile; ?>

<?php elseif ($is_post_carousel && $wp_query->have_posts()): ?>
    <!-- WordPress WP_Query Slides -->
    <?php while ($wp_query->have_posts()): $wp_query->the_post(); ?>
        <?php if ($is_clickable): ?>
            <a href="<?php the_permalink(); ?>" class="carousel__slide">
            <?php else: ?>
                <div class="carousel__slide">
                <?php endif; ?>

                <?php if (get_the_title()): ?>
                    <h3><?php the_title(); ?></h3>
                <?php endif; ?>

                <?php if (has_post_thumbnail()): ?>
                    <div>
                        <?php
                        $image_url = get_the_post_thumbnail_url(get_the_ID(), 'medium');
                        ?>
                        <img src="<?php echo $image_url; ?>" alt="<?php the_title_attribute(); ?>">
                    </div>
                <?php endif; ?>

                <?php if (get_the_excerpt()): ?>
                    <div><?php the_excerpt(); ?></div>
                <?php endif; ?>

                <?php if ($is_clickable && $button_text): ?>
                    <button class="button"><?php echo $button_text; ?></button>
                <?php endif; ?>

                <?php if ($is_clickable): ?>
            </a>
        <?php else: ?>
    </div>
<?php endif; ?>
<?php endwhile; ?>
<?php wp_reset_postdata();
?>

<?php else: ?>
    <!-- Fallback Message -->
    <p>No slides available.</p>
<?php endif; ?>

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

<?php
// Restore the global post object to its original state
$post = $original_post;
setup_postdata($post);
?>