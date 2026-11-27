<?php
    $mega_menu_banner_1 = get_field('mega_menu_banner_1', 'option');
    $mega_menu_banner_2 = get_field('mega_menu_banner_2', 'option');
    $mega_menu_banner_1_alt = !empty($mega_menu_banner_1['text']) ? trim(preg_replace('/\s+/', ' ', wp_strip_all_tags(preg_replace('/<[^>]+>/', ' ', $mega_menu_banner_1['text'])))) : '';
    $mega_menu_banner_2_alt = !empty($mega_menu_banner_2['text']) ? trim(preg_replace('/\s+/', ' ', wp_strip_all_tags(preg_replace('/<[^>]+>/', ' ', $mega_menu_banner_2['text'])))) : '';
?>

<div class="mega-menu-images boxed text white lowercase"> 
    <a href="<?php echo $mega_menu_banner_1['link']; ?>" class="white mega-menu-images__item">
        <img src="<?php echo $mega_menu_banner_1['image']; ?>" alt="<?php echo esc_attr($mega_menu_banner_1_alt); ?>">
        <div class="mega-menu-images__overlay"><?php echo $mega_menu_banner_1['text']; ?></div>
    </a>
    <a href="<?php echo $mega_menu_banner_2['link']; ?>" class="white mega-menu-images__item">
        <img src="<?php echo $mega_menu_banner_2['image']; ?>" alt="<?php echo esc_attr($mega_menu_banner_2_alt); ?>">
        <div class="mega-menu-images__overlay"><?php echo $mega_menu_banner_2['text']; ?></div>
    </a>
</div>

<!-- <div class="mega-menu-images-mob boxed text white lowercase hidden-desktop">
    <a href="<?php echo $mega_menu_banner_1['link']; ?>" class="white mega-menu-images-mob__item">
        <img src="<?php echo $mega_menu_banner_1['image']; ?>" alt="<?php echo esc_attr($mega_menu_banner_1_alt); ?>">
        <div class="mega-menu-images-mob__overlay"><?php echo $mega_menu_banner_1['text']; ?></div>
    </a>
    <a href="<?php echo $mega_menu_banner_2['link']; ?>" class="white mega-menu-images-mob__item">
        <img src="<?php echo $mega_menu_banner_2['image']; ?>" alt="<?php echo esc_attr($mega_menu_banner_2_alt); ?>">
        <div class="mega-menu-images-mob__overlay"><?php echo $mega_menu_banner_2['text']; ?></div>
    </a>
</div> -->