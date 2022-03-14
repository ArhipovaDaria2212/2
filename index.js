$(document).ready(function() {
    $("div#head1").draggable({revert:true});
    $("div#head2").draggable({helper:function(event){return $("<div>Я элемент помощник.</div>")}});
});