<?php if (have_rows('accordion')): ?>
    <div class="accordion">
        <?php while (have_rows('accordion')): the_row();
            $button = get_sub_field('button');
            $content = get_sub_field('content');
        ?>
            <div class="accordion__item">
                <h3 class="accordion__button">
                    <div class="boxed-md centered accordion__button-container">
                        <div class="accordion__title"><span><?php $rowIndex = get_row_index();
                                                            if ($rowIndex < 10): ?>0<?php endif; ?><?php echo get_row_index(); ?></span> <?php echo $button; ?></div>
                        <div class="accordion__icon">+</div>
                    </div>
                </h3>
                <div class="accordion__content">
                    <div class="accordion__text text">
                        <div class="boxed-md centered">
                            <?php echo $content; ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>
    </div>
<?php endif; ?>