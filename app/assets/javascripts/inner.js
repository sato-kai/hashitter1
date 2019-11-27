$(document).on("turbolinks:load",function(){

  function appendInner1(){
    var innerHtml = '';
    innerHtml = `<div id="inner">
                  <svg version="1.1" viewBox="0 0 210 297" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg">
                    <path d="m84.667 177.94c15.255 18.068 29.123 17.226 42.333 0 5.2917-2.6458 10.583 2.6458 15.53 5.7858 5.0938 3.2334 10.928 12.735 8.2826 39.193l-2.6458 19.05-10.583 2e-5v-29.633 42.333h-63.5v-42.333l1e-6 29.104-10.583-1e-5 -2.1167-18.521c-3.175-21.167 1.0528-34.621 5.5096-37.572 7.1904-4.7614 13.324-8.8904 17.774-7.4072z" stroke-width="3" stroke="#000"></path>
                  </svg>
                </div>`;
    $('.inner').append(innerHtml);
  }

  $('input[name="user[avatar_attributes][inner]"]:radio').change(function(){
    var innerStyle = $('input[name="user[avatar_attributes][inner]"]:checked').val();
    var color = $('#inner-color-field').val();
    if (innerStyle == ''){
      $('#inner').remove();
      $('#inner').css('fill', color)
    }else if (innerStyle == 'inner1'){
      $('#inner').remove();
      appendInner1();
      $('#inner').css('fill', color)
    };
    
  });

  $('input[name="user[avatar_attributes][inner_color]"]').change(function(){
    var color = $(this).val();
    $('#inner').css('fill', color);
    $('#hidden-inner-color').val(color);
    $('#inner-color-field').val(color)
  });

});