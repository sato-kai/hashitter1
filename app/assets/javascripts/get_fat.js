$(document).on("turbolinks:load",function(){
  var path = location.pathname
  if (path == "/users/get_fat"){
    $('.large-avatar').hide();
    $('.large-avatar').each(function(i){
      $(this).delay(4000 * i).fadeIn(3000);
      $(this).delay(3000 * i).fadeOut(3000);
    })
    $('.avatar-comment').hide();
    $('.avatar-comment').each(function(i){
      $(this).delay(5000 * i).fadeIn(5000);
      $(this).delay(100 * i).fadeOut(100);
    })
    $('.sign-up-after-announce').hide().delay(20000).fadeIn(1000)
  }
});