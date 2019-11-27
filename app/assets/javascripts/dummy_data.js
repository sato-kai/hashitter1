$(document).on("turbolinks:load",function(){
  $('#dummy-data').on('click', function(e){
    e.preventDefault();
    $('#login-mail').val('test@gmail.com');
    $('#login-pass').val(111111);
  })
});