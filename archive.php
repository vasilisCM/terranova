<?php get_header(); ?>
<div class="archive-grid">

</div>

<!-- Main  -->
<main class="main"
    data-barba="container"
    data-barba-namespace="archiveProduct">
    <!-- Info  -->
    <section class="page-info boxed centered">
        <div class="page-info__container">
            <h1 class="page-info__heading heading">
                <?php
                if (is_post_type_archive('product')) {
                    // For product CPT archive
                    $post_type_obj = get_post_type_object('product');
                    echo $post_type_obj->labels->name;
                } elseif (is_tax('product_categories')) {
                    // For product_categories taxonomy
                    $term = get_queried_object();
                    echo $term->name;
                } else {
                    // Fallback
                    echo 'Products';
                }
                ?>
            </h1>
            <div class="page-info__text-container">
                <p class="text">
                    <?php
                    $fallback_text = 'For product information, to find out where to buy Terranova products in your country or for registering with Terranova as a retailer or practitioner, please use the following contact details for each authorized national distributor.';

                    if (is_post_type_archive('product')) {
                        // For product CPT archive - get description from post type object
                        $post_type_obj = get_post_type_object('product');
                        if (!empty($post_type_obj->description)) {
                            echo $post_type_obj->description;
                        } else {
                            echo $fallback_text;
                        }
                    } elseif (is_tax('product_categories')) {
                        // For product_categories taxonomy - get description from term
                        $term = get_queried_object();
                        if (!empty($term->description)) {
                            echo $term->description;
                        } else {
                            echo 'Explore our ' . $term->name . ' products.';
                        }
                    } else {
                        // Fallback
                        echo $fallback_text;
                    }
                    ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Products  -->
    <section class="archive-product">
        <div class="archive-product__container boxed centered">


            <!-- Grid  -->
            <div class="archive-product__grid">
                <?php
                if (have_posts()) :
                    while (have_posts()) : the_post();
                        // Product Card
                        include 'components/product-card.php';
                    endwhile;
                endif;
                ?>
            </div>

            <!-- Pagination  -->
            <div class="archive-product__pagination-container boxed centered">
                <?php
                // Get pagination links using global query
                $pagination_links = paginate_links(array(
                    'prev_text' => 'Previous',
                    'next_text' => 'Next',
                    'type' => 'array',
                    'mid_size' => 2,
                    'end_size' => 1,
                ));
                ?>

                <?php if ($pagination_links) : ?>
                    <div class="archive-product__pagination">
                        <div class="archive-product__pages">
                            <?php foreach ($pagination_links as $link) : ?>
                                <?php
                                // Parse the link to extract URL, text, and check if current
                                $is_current = strpos($link, 'current') !== false;

                                if ($is_current) {
                                    // Extract text from current page link
                                    $text = strip_tags($link);
                                    $class = 'archive-product__page archive-product__page--current';
                                } else {
                                    // Extract URL and text from regular link
                                    preg_match('/href="([^"]*)"/', $link, $url_matches);
                                    $url = isset($url_matches[1]) ? $url_matches[1] : '#';
                                    $text = strip_tags($link);
                                    $class = 'archive-product__page link--line';
                                }
                                ?>

                                <?php if ($is_current) : ?>
                                    <span class="<?php echo $class; ?>"><?php echo $text; ?></span>
                                <?php else : ?>
                                    <a href="<?php echo $url; ?>" class="<?php echo $class; ?>"><?php echo $text; ?></a>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Custom Cursor  -->
    <?php include 'components/custom-cursor.php'; ?>

    <!-- Instagram  -->
    <?php include 'components/instagram.php'; ?>
</main>

<?php get_footer(); ?>