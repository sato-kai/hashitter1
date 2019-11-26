$(document).on("turbolinks:load",function(){
  // tweet新規投稿
  $('.js-modal-new-tweet-open').on('click',function(){
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
  // work入力
  $('.js-modal-work-open').on('click',function(){
    $('.js-modal-work').fadeIn();
    return false;
  });
  $('.js-modal-work-close').on('click',function(){
      $('.js-modal-work').fadeOut();
      return false;
  });
  $('.works-new-btn').on('click',function(e){
    newWorkLink = $(this).attr('href');
    getId = $(this).attr('id');
    e.preventDefault();
    $.ajax({
      url: newWorkLink,
      type: 'GET',
    })
    location.reload();
    return false;
  });
  // ログアウト
  $('.js-modal-logout').on('click',function(){
    logoutId = $(this).attr('href');
    $('.js-modal-logout').fadeIn();
    return false;
  });
  $('#logout-submit').on('click', '#logout-button', function(e){
    e.preventDefault();
    e.stopPropagation();
    $.ajax({
      url: logoutId,
      type: 'POST',
      data: {"_method": "DELETE"},
    })
    setTimeout(function(){
      location.reload();
    },100);
  });
  $('.js-modal-close').on('click',function(){
      $('.modal').fadeOut();
      return false;
  });
});