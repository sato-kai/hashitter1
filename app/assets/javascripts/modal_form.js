$(document).on("turbolinks:load",function(){
  // tweet新規投稿はtweets/new.js.erbに記載

  // 送信ボタンを押した時にバリデーションチェック
  $(document).on('submit', function(e){
    if ($('.tweet-field').val() == '' && $('.hidden-form').val() == ''){
      e.preventDefault();
      $('.error-messages').append("テキストまたは画像を入力してください")
    }
  })
  // バリデーション解除
  $(document).on('keyup', function(){
    $('#tweet-submit').prop('disabled', false)
    $('#comment-submit').prop('disabled', false)
    $('.error-messages').empty();
  })

  // tweet編集
  $('.js-modal-edit-tweet-open').on('click',function(){
    $('.js-modal-edit-tweet').fadeIn();
    if ($('.image').length){
      $('.image-label').hide();
      $('.modal-submit').css('margin', 'auto')
    }
  });
  // tweet削除
  $('.js-modal-destroy-tweet-open').on('click',function(){
    destroyId = $(this).children("#tweet-delete-button").attr('href');
    $('.js-modal-destroy-tweet').fadeIn();
    return false;
  });
  $('.modal-submit').on('click', '#delete-button', function(){
    $.ajax({
      url: destroyId,
      type: 'POST',
      data: {"_method": "DELETE"} ,
    })
  });
  // comment新規投稿
  $('.js-modal-comment-open').on('click',function(){
    $('.js-modal-comment').fadeIn();
    return false;
  });
  $('#new_comment').on('submit', function(e){
    if ($('.comment-field').val() == ''){
      e.preventDefault();
      $('.error-messages').append("コメントを入力してください")
    }
  })
  // work入力
  $('.js-modal-work-open').on('click',function(){
    $('.js-modal-work').fadeIn();
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
  $('#logout-submit').on('click', '#logout-button', function(){
    $.ajax({
      url: logoutId,
      type: 'POST',
      data: {"_method": "DELETE"},
    })
    setTimeout(function(){
      location.reload();
    },300);
  });

  // モーダルの黒い部分または×マークが押された時
  $('.js-modal-close').on('click',function(){
    $('.modal').fadeOut();
    return false;
  });
  // 新規投稿モーダルフェードアウト
  $(document).on('click', '.js-modal-close', function(){
    $('.modal-new-tweet').fadeOut(function(){
      $('.modal-new-tweet').remove();
    });
  })
  // 画像ボタン
  $(".modal-tooltip").hide();
  $(".image-icon").hover(function(){
    $(this).next(".modal-tooltip").fadeIn("fast");
  }, function(){
    $(this).next(".modal-tooltip").fadeOut("fast");
  });
});
