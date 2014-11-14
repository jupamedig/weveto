function addOption(e){
  e.preventDefault();
  var title = $('#search_input').val();
  $.ajax({
    url: 'http://www.omdbapi.com/',
    type: 'GET',
    contentType: 'text/plain',
    data: {t: title}
  }).done(function(response){
    console.log(JSON.parse(response));
    $('#the_options').append(buildOption(JSON.parse(response)));
    $('#search_input').val('');
  }).fail(console.log('search failed'));
}


function startVeto(e){
  e.preventDefault();
  $.ajax({
   url: '/veto',
   type: 'GET'
  }).done(function(response){
    console.log(response)
    $('.delete').css('display','inline');
    $('#search_form').remove();
    $('#start_veto').remove();
  }).fail(console.log('startVeto failed'));

}

function veto(e){
  e.preventDefault();
  optionDiv = $(e.target).closest('.option');
  $.ajax({
    url: '/movie',
    type: 'DELETE',
  }).done(function(response){
    optionDiv.remove();
    checkForLast();
  }).fail(console.log('deleteUser failed'))
}

function buildOption(movie){
  var optionTemplate = $.trim($('#option_template').html());
  var $option = $(optionTemplate);
  $option.find('h3').text(movie.Title);
  $option.find('h3').closest('div').append("<h4>" + movie.Plot + "</h4>");
  $option.find('h3').closest('div').append("<h4>" + movie.Runtime + "</h4>");
  $option.find('h3').closest('div').append("<img src=" + movie.Poster + "/>");
  return $option;
}

var checkForLast = function(){
  if ($('.option').length === 2) {
    $('.delete').click(function(e){
      e.preventDefault();
    });
    $('.delete').css('display','none');
    $('.option').prepend('<p>WINNER</p>')
  }
}
