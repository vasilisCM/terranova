   <!-- Banner -->
   <section class="banner" style="background-image: url('<?php the_post_thumbnail_url('full'); ?>')">
       <div class="banner__wrapper boxed centered">
           <div class="banner__container">
               <div class="banner__text-background"></div>
               <div class="banner__text-container">

                   <h1 class="banner__heading heading">
                       <?php the_title(); ?>
                   </h1>

               </div>
           </div>
       </div>
   </section>