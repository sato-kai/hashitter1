$(document).on("turbolinks:load",function(){
  $('.rank-circle').on('click', function(){
    $('.side-accordion').show();
    $('.side-accordion').animate({'margin-right': '0px'}, 300);
    $(this).fadeOut();
    $('.times-circle').fadeIn();
  })
  $('.times-circle').on('click', function(){
    $('.side-accordion').animate({'margin-right': '-70%'}, 300, function(){
      $('.side-accordion').hide();
    });
    $(this).fadeOut();
    $('.rank-circle').fadeIn();
  })
});