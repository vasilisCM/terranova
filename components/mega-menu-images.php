<div class="mega-menu-images boxed text white lowercase hidden-mobile">
    <?php
    $mega_menu_banner_1 = get_field('mega_menu_banner_1', 'option');
    $mega_menu_banner_2 = get_field('mega_menu_banner_2', 'option');
    ?>
    <a href="<?php echo $mega_menu_banner_1['link']; ?>" class="white mega-menu-images__item">
        <img src="<?php echo $mega_menu_banner_1['image']; ?>">
        <div class="mega-menu-images__overlay"><?php echo $mega_menu_banner_1['text']; ?></div>
    </a>
    <a href="<?php echo $mega_menu_banner_2['link']; ?>" class="white mega-menu-images__item">
        <img src="<?php echo $mega_menu_banner_2['image']; ?>" alt="">
        <div class="mega-menu-images__overlay"><?php echo $mega_menu_banner_2['text']; ?></div>
    </a>
</div>