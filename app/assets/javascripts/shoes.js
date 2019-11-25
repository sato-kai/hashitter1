$(document).on("turbolinks:load",function(){

  $('input[name="user[avatar_attributes][shoes_color]"]').change(function(){
    var color = $(this).val();
    $('#shoes').css('fill', color)
    $('#hidden-shoes-color').val(color);
    $('#shoes-color-field').val(color)
  });

});