$(document).on("turbolinks:load",function(){
  $(".nav-text").hide();
  $(".button-list").hover(function(){
    $(this).children(".nav-text").fadeIn("fast");
  }, function(){
    $(this).children(".nav-text").fadeOut("fast");
  });
});