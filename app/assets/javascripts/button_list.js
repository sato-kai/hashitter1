$(document).on("turbolinks:load",function(){
  $(".tooltipt").hide();
  $(".button-list").hover(function(){
    $(this).children(".tooltipt").fadeIn("fast");
  }, function(){
    $(this).children(".tooltipt").fadeOut("fast");
  });
});