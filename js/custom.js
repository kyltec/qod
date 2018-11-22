(function($) {
  $(document).ready(function() {
    //get a random post and append content to the dom
    $('#new-quote-button').on('click', function(event) {
      event.preventDefault;
      // ajax request
      getQuote();
    });

    function getQuote() {
      $.ajax({
        method: 'GET',
        url:
          qod_vars.rest_url +
          'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
      })
        .done(function(data) {
          // append content to the DOM replace the content
          console.log(data);
          $('.entry-content').empty();
          $('.entry-content').append(data[0].content.rendered);

          $('.entry-title').empty();
          $('.entry-title').append(`${data[0].title.rendered}`);

          $('.source').empty();

          if (data[0]._qod_quote_source_url.length > 0) {
            $('.source').append(
              ` &nbsp;, <a target="_blank" href="${
                data[0]._qod_quote_source_url
              }">${data[0]._qod_quote_source}</a>`
            );
          } else {
            $('.source').append(data[0]._qod_quote_source);
          }
        })
        .fail(function(err) {
          // append message for user or alert a message saying someting went wrong
          console.log(err);
        });
    }
  });
})(jQuery);
