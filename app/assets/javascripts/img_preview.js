$(document).on("turbolinks:load", function(){
  $(document).on('change', 'input[type="file"]', function(e){
    var file = e.target.files[0];
    var reader = new FileReader();
    if(file.type.indexOf("image") < 0){
      $('.error-messages').append("画像ファイルを指定してください");
      $('.image-label').show();
      return false;
    }
    $('.error-messages').empty();
    //アップロードした画像を設定する
    reader.onload = (function(){
      return function(e){
        if ($('.new-tweet-image').length){
          $('#image_preview').remove();
          $('.new-tweet-image').append(`<img id="image_preview" class="exit-preview">
                                            <i class="fas fa-times image-delete"></i>`);
          $("#image_preview").attr("src", e.target.result);
        } else if ($('.edit-tweet-image').length){
          $('#edit-image_preview').remove();
          $('.edit-tweet-image').append(`<img id="edit-image_preview" class="exit-preview">
                                        <i class="fas fa-times image-delete"></i>`);
          $("#edit-image_preview").attr("src", e.target.result);
        }
      };
    })(file);
    reader.readAsDataURL(file);
    $('#tweet-submit').prop('disabled', false)
    $('.image-label').hide();
    $('.modal-submit').css('margin', 'auto')
    $('input[name="tweet[remove_image]"]').prop("checked", false);
  });

  // 画像削除ボタン
  $(document).on('click', '.image-delete', function(){
    $('.preview-area').empty();
    $('.image-label').show();
    $('.modal-submit').css('margin', 0)
    $('.hidden-form').val('');
    $('input[name="tweet[remove_image]"]').prop("checked",true);
  })
});



