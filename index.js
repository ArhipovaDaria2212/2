$(document).ready(function() {
    $(document).ready(function(){
        $("#drag1").draggable({stack:"#drop1"});
        $("#drop1").droppable({
           over:function(){
              $("#drag1").css("background-color","#d7fa99");
              $("#drop1").css("background-color","#d7fa99");
           },
           drop:function(){
              $("#drag1").css("display","none");
              $("#drop1").css("background-color","#c4f66f");
              $("#drop1").html("Перемещение завершено успешно.");
              alert("Вы перетащили элемент с id=drag1 в область с id=drop1.");
           }
        });
     });
});