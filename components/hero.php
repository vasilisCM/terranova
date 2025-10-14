  <!-- Hero  -->
  <section
      class="first-section hero"
      style="background-image: url('<?php
                                    if (is_home()) {
                                        $posts_page_id = get_option('page_for_posts');
                                        echo get_the_post_thumbnail_url($posts_page_id, 'full');
                                    } else {
                                        if (has_post_thumbnail()) {
                                            echo the_post_thumbnail_url('full');
                                        }
                                    }
                                    ?>')">
      <div class="boxed centered hero__container">
          <h1>
              <?php
                if (is_home()) {
                    echo get_the_title(get_option('page_for_posts'));
                } elseif (is_post_type_archive()) {
                    post_type_archive_title();
                } else {
                    the_title();
                }
                ?>
          </h1>
          <div>
              <?php the_content(); ?>
          </div>

      </div>
  </section>