$(document).ready(function(){
    $("div.col-md-3#port").hover(function(){
        $(this).find(".description").css("display", "flex");
    },function(){
        $(this).find(".description").hide();
    });
});