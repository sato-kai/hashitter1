$(document).on("turbolinks:load",function(){
  $('.js-modal-tweet-open').on('click',function(){
    $('.js-modal-tweet').fadeIn();
    return false;
  });
  $('.js-modal-tweet-close').on('click',function(){
      $('.js-modal-tweet').fadeOut();
      return false;
  });
  $(".modal-tooltip").hide();
  $(".image-icon").hover(function(){
    $(this).next(".modal-tooltip").fadeIn("fast");
  }, function(){
    $(this).next(".modal-tooltip").fadeOut("fast");
  });

  $('.js-modal-comment-open').on('click',function(){
    $('.js-modal-comment').fadeIn();
    return false;
  });
  $('.js-modal-comment-close').on('click',function(){
      $('.js-modal-comment').fadeOut();
      return false;
  });
  $(".modal-tooltip").hide();
  $(".image-icon").hover(function(){
    $(this).next(".modal-tooltip").fadeIn("fast");
  }, function(){
    $(this).next(".modal-tooltip").fadeOut("fast");
  });
});