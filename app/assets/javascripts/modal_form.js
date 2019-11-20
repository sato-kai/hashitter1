$(document).on("turbolinks:load",function(){
  $('.js-modal-open').on('click',function(){
    $('.js-modal').fadeIn();
    return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  });
  $(".modal-tooltip").hide();
  $(".image-icon").hover(function(){
    console.log("OK")
    $(this).next(".modal-tooltip").fadeIn("fast");
  }, function(){
    $(this).next(".modal-tooltip").fadeOut("fast");
  });
});