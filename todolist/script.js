/*$(document).ready(function(){
    $('#button').click(function(){
        var toAdd= $('input[name=checkListItem]').val();
        $('.list').append("<div class='item'>"+toAdd+"</div>");
        });
    $(document).on('click','.item',function(){
        $(this).remove();
        });
    }); */
var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};
var add=function(item){
 var html=template(item);
    $(html).appendTo('.list');
};

var main = function() {
  $('form').submit(function() {
     var text= $('#todo').val();
    if(text!=="")
    {
   var html=template(text);
    $(html).appendTo('.list');
    $('#todo').val("");
    }
   
    return false;  
  });
  
   $(document).on("click",'.glyphicon-remove',function(){
   $(this).parent().remove();
   });
  
  $(document).on("click",'.glyphicon-star',function(){
    $(this).toggleClass('active');
    });
  if(annyang){
  var commands={'add *item' : add, }
annyang.addCommands(commands);
annyang.start();
}
}; 

$(document).ready(main);
