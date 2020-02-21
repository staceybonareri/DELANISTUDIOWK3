$(document).ready(function(){
    $("#port").hover(function(){
        $(this).find("description").show();
    },function(){
        $(this).find("description").hide();
    });
});