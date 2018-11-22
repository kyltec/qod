<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
	<fieldset class=error-field>
		<label>
			<input type="search" class="search-field" placeholder="SEARCH ..." value="<?php echo esc_attr( get_search_query() ); ?>" name="s" title="Search for:" />
		</label>
		<i class="fas fa-search search-icon"></i>
		<button class="search-submit">
			<?php echo esc_html( 'Search' ); ?>
		</button>
	</fieldset>
</form>
