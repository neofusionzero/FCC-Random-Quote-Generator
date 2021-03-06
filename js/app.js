$(document).ready(function() {
  $.ajaxSetup({
    cache: false
  });
  //load initial quote and build tweet button
  $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function(json) {
    var quote = json.shift();
    var html = '';
    html += '<p>' + quote.content + '</p><br>';
    html += '<p>- ' + quote.title + '</p>';
    $('#quoteBox').html(html);
      var twtterContainer = $('<a></a>')
    .addClass('twitter-share-button')
    .attr('href', 'https://twitter.com/share')
    .attr('data-size', 'large')
    .attr('data-url', ' ')
    .attr('data-text', $('#quoteBox').text());
  $('#twtterContainer').append(twtterContainer);
  twttr.widgets.load();
  });
  //reload quote and tweet button when new quote is clicked
  $('#randomQuote').on('click', function() {
    $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function(json) {
      var quote = json.shift();
      var html = '';
      html += '<p>' + quote.content + '</p><br>';
      html += '<p>- ' + quote.title + '</p>';
      $('#quoteBox').html(html);
      customText = $('#quoteBox').text();
      $('#twtterContainer iframe').remove();
      var twtterContainer = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'https://twitter.com/share')
        .attr('data-size', 'large')
        .attr('data-url', ' ')
        .attr('data-text', $('#quoteBox').text());
      $('#twtterContainer').append(twtterContainer);
      twttr.widgets.load();
    });
  });
});
