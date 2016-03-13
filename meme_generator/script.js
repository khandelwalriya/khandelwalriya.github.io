var main = function() {
  $('#top-text').keyup(function(){

    $('.top-caption').text($('#top-text').val());
  });
  $('#bottom-text').keyup(function(){

    $('.bottom-caption').text($('#bottom-text').val());
  });
  
  $('#image-url').keyup(function(){
    var i= $('#image-url').val();
  $('.meme.thumbnail img').attr("src",i);
  
  });
}
 
$(document).ready(main);