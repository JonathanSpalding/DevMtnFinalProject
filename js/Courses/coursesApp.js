$(document).ready(function(){
  $('#bicentennialPark').click(function(){
    $.ajax({
      method: 'GET',
      url: 'courses.json',
      success: function(res){
        console.log(res);
        addDataToDom(res);
      },
      error: function(err){
        console.log(err);
      }
    })
  })
