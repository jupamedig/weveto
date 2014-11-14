$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  bindEvents();

});


function bindEvents(){
  // when a user gets added to the mix
  $('#event_form').on('submit', addOccasion);
  $('#user_form').on('submit', addUser);
  $('#add_option').on('submit', addOption);
  $('#the_users').on('click', '.delete', deleteUser);

  // gotta use event delegation for removing users
  // $('.the_users').on('click', '#delete', removeUser)

  // gotta use event delegation for removing options
}

function addOccasion(e){
  e.preventDefault();
  var formData = $(this).serialize();
  $.ajax({
    url: '/occasion',
    type: 'POST',
    data: formData
  }).done(function(response){
    $("<h2 class='the_event'>you're planning for <span id='highlight_occasion'>" + response.occasion + "</span></h2>").insertAfter($('#event_form'));
    $('.the_event').attr('id', response.id);
    $('#next').attr('value', response.id);
    $('#event_form').remove();
  }).fail(console.log('addOccasion failed'));
}

function addUser(e){
  e.preventDefault();
  var eventId = parseInt( $(".the_event").attr('id'));
  var name = $('#user_input').val();
  $.ajax({
    url: '/users',
    type: 'POST',
    data: {name: name, id: eventId}
  }).done(function(response){
    $('#the_users').append(buildUser(response));
    $('#user_input').val('');
  }).fail(console.log('addUser failed'));
}

function deleteUser(e){
  e.preventDefault();
  userDiv = $(e.target).closest('.user');
  userId = userDiv.find('h3').attr('user_id');
  userId = parseInt(userId);
  $.ajax({
    url: '/users',
    type: 'DELETE',
    data: {id: userId}
  }).done(function(){
    userDiv.remove();
  }).fail(console.log('deleteUser failed'))
}

function addOption(){}

function buildUser(user){
  var userTemplate = $.trim($('#user_template').html());
  var $user = $(userTemplate);
  $user.find('h3').text(user.name);
  $user.find('h3').attr('user_id', user.id);
  return $user;
}

