$(document).on("turbolinks:load",function(){
  $('.select-parts').hide();
  $('.hidden-tab').on('click', function(){
    var index = $('.hidden-tab').index(this);
    notClick = $('.hidden-tab').not(this);
    $('.select-parts').eq(index).toggle();
    $('.hidden-tab').not(this).next().hide();
    $('.hidden-tab').eq(index).toggleClass('hovered');
    $('.hidden-tab').not(this).removeClass('hovered');
  });
});
