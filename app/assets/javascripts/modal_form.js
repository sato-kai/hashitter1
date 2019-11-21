$(document).on("turbolinks:load",function(){
  // tweet新規投稿
  $('.js-modal-new-tweet-open').on('click',function(){
    console.log(this)
    $('.js-modal-new-tweet').fadeIn();
    return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.modal').fadeOut();
      return false;
  });
  $(".modal-tooltip").hide();
  $(".image-icon").hover(function(){
    $(this).next(".modal-tooltip").fadeIn("fast");
  }, function(){
    $(this).next(".modal-tooltip").fadeOut("fast");
  });
  // tweet編集
  $('.js-modal-edit-tweet-open').on('click',function(){
    console.log(this)
    $('.js-modal-edit-tweet').fadeIn();
    return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.modal').fadeOut();
      return false;
  });
  $(".modal-tooltip").hide();
  $(".image-icon").hover(function(){
    $(this).next(".modal-tooltip").fadeIn("fast");
  }, function(){
    $(this).next(".modal-tooltip").fadeOut("fast");
  });
  // tweet削除
  $('.js-modal-destroy-tweet-open').on('click',function(){
    destroyId = $(this).children("#tweet-delete-button").attr('href');
    $('.js-modal-destroy-tweet').fadeIn();
    return false;
  });
  $('.modal-submit').on('click', '#delete-button', function(e){
    e.preventDefault();
    e.stopPropagation();
    $.ajax({
      url: destroyId,
      type: 'POST',
      data: {"_method": "DELETE"} ,
    })
  });
  $('.js-modal-close').on('click',function(){
      $('.modal').fadeOut();
      return false;
  });
  $(".modal-tooltip").hide();
  $(".image-icon").hover(function(){
    $(this).next(".modal-tooltip").fadeIn("fast");
  }, function(){
    $(this).next(".modal-tooltip").fadeOut("fast");
  });
  // comment新規投稿
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