<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

<div class="flex-container">
<i class="fas fa-quote-left outer-quote-left"></i>
        <section class="quote-submission">
            <header class="entry-header">
                <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
            </header>

            <?php if( is_user_logged_in() && current_user_can( 'edit_posts' )): ?>

                <div class="quote-submission-wrapper">
                    <form name="quote-form" id="quote-submission-form">

                        <div class="q-field">
                           <label class="submit-label" for="quote-author">Author of Quote</label>
                          <input class="type-here" type="text" name="quote_author" id="quote-author" required>
                        </div>

                        <div class="q-field">
                            <label class="submit-label" for="quote-content">Quote</label>
                            <textarea class="insert-quote" name="quote_content" id="quote-content" required></textarea>
                        </div>
                        
                        <div class="q-field">
                            <label class="submit-label" for="quote-source">Where did you find this quote? (e.g. book name)</label>
                            <input class="type-here" type="text" name="quote_source" id="quote-source">
                        </div>

                        <div class="q-field">
                            <label class="submit-label" for="quote-source-url">Provide the URL for the quote source, if available.</label>
                            <input class="type-here" type="url" name="quote_source_url" id="quote-source-url">
                        </div>

                        <input type="submit" value="Submit a Quote"> <p class="error-msg"><i class="fas fa-exclamation-triangle"></i> We were not able to complete this task</p>
                      


                    </form>
     
                       
                </div><!-- .quote-submission-wrapper -->


                <?php else: ?>
                <p>Sorry, you must me logged in to submit a quote!</p>
                <p>
                    <?php echo sprintf( '<a href="%1s">%2s</a>', esc_url( wp_login_url() ), 'Click here to login.' );?>
                </p>
         

            <?php endif; ?>


        </section>
        <i class="fas fa-quote-right outer-quote-right"></i>
</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>