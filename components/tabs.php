<?php if (have_rows('tabs')): ?>
    <div class="tabs">
        <div class="tabs__buttons text-s uppercase semibold">
            <?php while (have_rows('tabs')): the_row();
                $button = get_sub_field('button');
            ?>
                <div class="tabs__button">
                    <?php echo $button; ?>
                </div>
            <?php endwhile; ?>
        </div>

        <div class="tabs__contents text-ms">
            <?php while (have_rows('tabs')): the_row();
                $content = get_sub_field('content');
            ?>
                <div class="tabs__content tabs__content--hidden">
                    <?php echo $content; ?>
                </div>
            <?php endwhile; ?>
        </div>
    </div>
<?php endif; ?>
