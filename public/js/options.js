function search(e){
  e.preventDefault();
  var title = $('#search_input').val();
  $.ajax({
    url: 'http://www.omdapi.com/',
    type: 'get',
    data: {t: title}
  }).done(function(response){
    console.log(response);
    $('#the_options').append(buildOption(response));
    $('#search_input').val('');
  }).fail(console.log('search failed'));
}


// $.getJSON('http://www.omdapi.com/?t=interstellar', function(res) { console.log(res); })


function buildOption(movie){
  var optionTemplate = $.trim($('#option_template').html());
  var $option = $(optionTemplate);
  $option.find('h3').text(movie.title);
  $option.find('h3').append("<img src=" + movie.poster + "/>");
  return $option;
}