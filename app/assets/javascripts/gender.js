$(document).on("turbolinks:load",function(){
  
  function appendMensHair1(){
    var mensHairHtml = '';
    mensHairHtml = `<div class="mens-hair" id="hair">
                      <svg version="1.1" viewBox="0 0 210 297" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg">
                        <path d="m169.33 120.79-10.583-21.167c0 8.4667-10.583 19.05-21.167 21.167l1.5875-21.167c-3.5879 4.5086-22.754 19.05-33.338 21.167l4.2333-26.987c-12.056 25.957-57.15 35.454-67.733 35.454v-22.225 33.337l-7.9375-21.696c-2.6458 21.167-4.7625 0-4.7625-31.75 4.2333-30.692 23.283-31.75 4.2333-29.104 29.633-44.979 82.622-23.927 29.633-31.221 24.342-2.6458 62.533-14.38 63.5 0.52917 6.819 3.507 31.75 4.7625 42.333 38.629 15.012 15.805 11.32 30.968 10.583 44.45l-10.583 29.104v-32.808z" stroke-width="2.5" stroke="#0c080c"></path>
                      </svg>
                    </div>`;
    $('.hair').append(mensHairHtml);
  }
  function appendLadiesHair1(){
    var ladiesHairHtml = '';
    ladiesHairHtml = `<div class="ladies-hair" id="hair">
                        <svg version="1.1" viewBox="0 0 210 297" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg">
                          <path d="m137.58 93.8c-4.1375 6.1587-10.051 12.565-31.75 21.167l10.583-21.167c-19.155 19.684-45.239 27.985-74.083 31.75l21.167 42.333-10.583-10.583v10.583l-13.758-21.167c-7.4083-10.583-17.992-31.75-12.171-63.5 9.3032-24.916 13.471-51.186 78.846-62.442 42.359 7.3462 73.104 24.377 76.2 62.442 8.4667 21.167 2.6823 58.225-7.9375 67.204l-14.288 17.462-2.1167-13.229-10.054 12.171c5.9372-5.5448 10.508 1.3806 21.696-41.275l-10.583-31.75c0 10.583-4.0156 14.888-21.167 21.167z" stroke-width="3" stroke="#000"></path>
                        </svg>
                      </div>`;
    $('.hair').append(ladiesHairHtml);
  }
  $('input[name="user[gender]"]:radio').change(function(){
    var getGender = $('input[name="user[gender]"]:checked').val();
    var color = $('input[name="user[avatar_attributes][hair_color]"]:checked').attr('class');
    if (getGender == '男性'){
      $('#hair').remove();
      appendMensHair1();
      $('#hair').addClass(color);
    }else {
      $('#hair').remove();
      appendLadiesHair1();
      $('#hair').addClass(color);
    }
  })
});
