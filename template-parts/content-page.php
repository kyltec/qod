<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @package QOD_Starter_Theme
 */

?>
<div class="flex-container">
<i class="fas fa-quote-left outer-quotes"></i>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title about-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<div class="entry-content description">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html( 'Pages:' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
<i class="fas fa-quote-right outer-quotes"></i>
</div>