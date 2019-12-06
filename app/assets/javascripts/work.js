$(document).on("turbolinks:load",function(){
  var todayRun = $('#today-run').val();
  $('#add-run').on('keyup change', function() {
    var addRun = $('#add-run').val();
    var totalRun = parseFloat(addRun) + parseFloat(todayRun);
    $('#hidden-work').val(totalRun);
    $('#edit-run').val(totalRun);
  });
  $('#edit-run').on('keyup change', function() {
    var editRun = $('#edit-run').val();
    var difference = parseFloat(editRun) - parseFloat(todayRun);
    $('#hidden-work').val(editRun);
    $('#add-run').val(difference);
    
  });
  // ランニングの数値バリデーション
  $('#run-field').on('submit', function(e){
    var hiddenRun = $('#hidden-work').val();
    if(hiddenRun < 0){
      e.preventDefault();
      $('.error-messages').append("今日の走行距離は０km以下で保存できません")
    }
  })
});