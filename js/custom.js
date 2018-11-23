(function($) {
  $(document).ready(function() {
    //get a random post and append content to the dom
    $('#new-quote-button').on('click', function(event) {
      event.preventDefault;
      // ajax request
      getQuote();
    });

    function getQuote() {
      lastPage = document.URL;

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
          $('.entry-title').append(data[0].title.rendered);

          $('.source').empty();

          if (data[0]._qod_quote_source_url.length > 0) {
            $('.source').append(
              ` &nbsp;, <a target="_blank" href="${
                data[0]._qod_quote_source_url
              }">${data[0]._qod_quote_source}</a>`
            );
          } else {
            $('.source').append(` &nbsp; ${data[0]._qod_quote_source}`);
          }

          history.pushState(null, null, qod_vars.home_url + '/' + data[0].slug);
        })
        .fail(function(err) {
          // append message for user or alert a message saying someting went wrong
          $('.entry-content').empty();
          $('.entry-content').append('<p>Sorry an error has occured</p>');
          console.log(err);
        });
    } // end of getQuote

    $(window).on('popstate', function() {
      window.location.replace(lastPage);
    });

    // submit a form and create a new quote post

    $('#quote-submission-form').on('submit', function(event) {
      event.preventDefault();
      postQuote();
    });

    function postQuote() {
      // get value of form input
      // $('#form-id ).val();
      const $quoteAuthor = $('#quote-author').val();
      const $quote = $('#quote-content').val();
      const $quoteSource = $('#quote-source').val();
      const $quoteSourceUrl = $('#quote-source-url').val();
      const $submitForm = $('#quote-submission-form');
      const $submitFormWrap = $('.quote-submission-wrapper');

      $.ajax({
        method: 'POST',
        url: qod_vars.rest_url + 'wp/v2/posts',
        data: {
          title: $quoteAuthor,
          content: $quote,
          _qod_quote_source_url: $quoteSourceUrl,
          _qod_quote_source: $quoteSource,
          status: 'publish'
        },
        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-WP-Nonce', qod_vars.nonce);
        }
      })
        .done(function(response) {
          $submitForm.slideUp();
          $submitFormWrap.append('<p>Thanks for your submission<p>');
        })
        .fail(function(wentWrong) {
          $('.error-msg').toggle();
          console.log('error');
        });
    }
  }); // end document ready
})(jQuery);
