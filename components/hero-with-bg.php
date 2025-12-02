   <!-- Banner -->
   <section class="banner" style="background-image: url('<?php the_post_thumbnail_url('full'); ?>')">
       <?php
        $hero_extras = get_field('hero_extras');
        $image = $hero_extras['image'];
        $text = $hero_extras['text'];
        ?>
       <div class="banner__wrapper boxed centered">
           <div class="banner__container">
               <div class="banner__text-background"></div>
               <div class="banner__text-container">
                   <?php if ($image): ?>
                       <div>
                           <img src="<?php echo $image; ?>" alt="<?php the_title(); ?>" class="banner__image">
                       </div>

                   <?php endif; ?>

                   <h1 class="banner__heading heading">
                       <?php the_title(); ?>
                       <?php if ($text): ?>
                           <div class="text banner__text"><?php echo $text; ?></div>
                       <?php endif; ?>
                   </h1>

               </div>
           </div>
       </div>
   </section>