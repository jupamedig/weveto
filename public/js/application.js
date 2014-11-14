$(document).ready(function() {
  bindEvents();
});


function bindEvents(){
  // when a user gets added to the mix
  $('#start_form').on('submit', addEvent);
  $('#user_form').on('submit', addUser);
  $('.the_users').on('click', '.delete', deleteUser);
  $('#search_form').on('submit', addOption);
  $('#start_veto').on('submit', startVeto);
  $('#the_options').on('click', '.delete', veto);
}

function addEvent(e){
  e.preventDefault();
  $.ajax({
    url: '/events',
    type: 'POST',
  }).done(function(response){
    $('#next').attr('value', response.id);
    $('#start_form').remove();
    $('#user_form').css('display','block');
    $('#next_form').css('display','block');
  }).fail(console.log('addEvent failed'));
}

function addUser(e){
  e.preventDefault();
  var eventId = parseInt( $("#next").attr('value'));
  var name = $('#user_input').val();
  $.ajax({
    url: '/users',
    type: 'POST',
    data: {name: name, id: eventId}
  }).done(function(response){
    $('.the_users').append(buildUser(response));
    $('#user_input').val('');
  }).fail(console.log('addUser failed'));
}

function deleteUser(e){
  e.preventDefault();
  userDiv = $(e.target).closest('.user');
  userId = userDiv.find('h4').attr('user_id');
  userId = parseInt(userId);
  $.ajax({
    url: '/users',
    type: 'DELETE',
    data: {id: userId}
  }).done(function(){
    userDiv.remove();
  }).fail(console.log('deleteUser failed'))
}

function buildUser(user){
  var userTemplate = $.trim($('#user_template').html());
  var $user = $(userTemplate);
  $user.find('h4').text(user.name);
  $user.find('h4').attr('user_id', user.id);
  return $user;
}

