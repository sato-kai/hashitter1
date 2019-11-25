$(document).on("turbolinks:load",function(){


  function appendSlimBottoms(){
    var bottomsHtml = '';
    bottomsHtml = `<div id="bottoms">
                    <svg version="1.1" viewBox="0 0 210 297" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="#000" stroke-width="3">
                        <path d="m74.083 254.67h63.5v21.167h-31.75v-10.583 10.583h-31.75z"/>
                        <path class="skin" d="m84.667 275.83h42.333v10.583h-21.167v-10.583 10.583h-21.167z"/>
                      </g>
                    </svg>
                  </div>`;
    $('.bottoms').append(bottomsHtml);
  }
  function appendBottoms1(){
    var bottomsHtml = '';
    bottomsHtml = `<div id="bottoms">
                    <svg version="1.1" viewBox="0 0 210 297" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="#000" stroke-width="3">
                        <path d="m79.375 254.67h52.917l-5.2917 31.75h-42.333z" stroke-width="3"></path>
                        <path d="m105.83 265.25v21.167" stroke-width="3"></path>
                      </g>
                      <div class='white' id='line'>
                        <svg version="1.1" viewBox="0 0 210 297" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg">
                          <path d="m128.59 256.79-5.2917 27.517" stroke-linecap="round" stroke-width="1.5"></path>
                          <path d="m124.88 256.79-5.2917 27.517" stroke-linecap="round" stroke-width="1.5"></path>
                        </svg>
                      </div>
                    </svg>
                  </div>`;
    $('.bottoms').append(bottomsHtml);
  }
  function appendBottoms2(){
    var bottomsHtml = '';
    bottomsHtml = `<div id="bottoms">
                    <svg version="1.1" viewBox="0 0 210 297" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="#000" stroke-width="3">
                        <path class="skin" d="m87.842 267.9 35.98-8e-3 -3.7017 18.528h-28.575z"></path>
                        <path d="m77.258 254.67h57.15l2.1167 13.229c-26.458 0-37.181-0.44146-61.383 0z" stroke-linejoi="round"></path>
                        <path d="m105.83 268.95v17.462"></path>
                      </g>
                    </svg>
                  </div>`;
    $('.bottoms').append(bottomsHtml);
  }
  function appendBottoms3(){
    var bottomsHtml = '';
    bottomsHtml = `<div id="bottoms">
                    <svg version="1.1" viewBox="0 0 210 297" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="#000">
                        <path class="skin" d="m88.371 267.9h34.925l-3.175 18.521h-28.575z" stroke-width="3"></path>
                        <path d="m81.492 254.67h49.213l-3.175 13.229c-26.458 0-19.19-0.44146-43.392 0z" stroke-linejoi="round" stroke-width="3"></path>
                        <path d="m105.83 261.55v24.871" stroke-linecap="round" stroke-width="2.5"></path>
                      </g>
                    </svg>
                  </div>`;
    $('.bottoms').append(bottomsHtml);
  }

  $('input[name="user[avatar_attributes][bottoms]"]:radio').change(function(){
    var bottomsStyle = $('input[name="user[avatar_attributes][bottoms]"]:checked').val();
    var color = $('#bottoms-color-field').val();
    if (bottomsStyle == 'slim'){
      $('#bottoms').remove();
      appendSlimBottoms();
      $('#bottoms').css('fill', color)
    }else if (bottomsStyle == 'bottoms1'){
      $('#bottoms').remove();
      appendBottoms1();
      $('#bottoms').css('fill', color)
    }else if (bottomsStyle == 'bottoms2'){
      $('#bottoms').remove();
      appendBottoms2();
      $('#bottoms').css('fill', color)
    }else {
      $('#bottoms').remove();
      appendBottoms3();
      $('#bottoms').css('fill', color)
    };
    
  });

  $('input[name="user[avatar_attributes][bottoms_color]"]').change(function(){
    var color = $(this).val();
    $('#bottoms').css('fill', color)
    $('#hidden-bottoms-color').val(color);
    $('#bottoms-color-field').val(color)
  });

});