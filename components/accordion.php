<?php if (have_rows('accordion')): ?>
    <div class="accordion">
        <?php while (have_rows('accordion')): the_row();
            $button = get_sub_field('button');
            $content = get_sub_field('content');
        ?>
            <div class="accordion__item">
                <h3 class="accordion__button">
                    <span><?php echo $button; ?></span>
                    <span class="accordion__icon">+</span>
                </h3>
                <div class="accordion__content">
                    <div class="accordion__text">
                        <?php echo $content; ?>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>
    </div>
<?php endif; ?>