$(document).ready(function(){
    $("#drag1").draggable({stack:"#drop1"});
    $("#drag2").draggable({stack:"#drop1",revert:true});
    $("#drop1").droppable({
       accept:"#drag1",
       over:function(){
          $("#drag1").css("background-color","#d7fa99");
          $("#drop1").css("background-color","#d7fa99");
       },
       drop:function(){
          $("#drag1").css("display","none");
          $("#drop1").css("background-color","#c4f66f");
          $("#drop1").html("Перемещение завершено успешно.");
       }
    });
 });