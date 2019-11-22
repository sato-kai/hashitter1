$(document).on("turbolinks:load",function(){
  $('input[name="user[avatar_attributes][hair]"]:checked').next().css('fill', 'black')
  $('input[name="user[avatar_attributes][hair]"]:not(:checked)').next().css('fill', 'white')
  $('input[name="user[avatar_attributes][hair]"]:radio').change(function(){
    $('input[name="user[avatar_attributes][hair]"]:checked').next().css('fill', 'black')
    $('input[name="user[avatar_attributes][hair]"]:not(:checked)').next().css('fill', 'white')
  });

  $('input[name="user[avatar_attributes][tops]"]:checked').next().css('fill', 'black')
  $('input[name="user[avatar_attributes][tops]"]:not(:checked)').next().css('fill', 'white')
  $('input[name="user[avatar_attributes][tops]"]:radio').change(function(){
    $('input[name="user[avatar_attributes][tops]"]:checked').next().css('fill', 'black')
    $('input[name="user[avatar_attributes][tops]"]:not(:checked)').next().css('fill', 'white')
  });

  $('input[name="user[avatar_attributes][bottoms]"]:checked').next().css('fill', 'black')
  $('input[name="user[avatar_attributes][bottoms]"]:not(:checked)').next().css('fill', 'white')
  $('input[name="user[avatar_attributes][bottoms]"]:radio').change(function(){
    $('input[name="user[avatar_attributes][bottoms]"]:checked').next().css('fill', 'black')
    $('input[name="user[avatar_attributes][bottoms]"]:not(:checked)').next().css('fill', 'white')
  });
});