$(document).ready(function(){
    $("div.col-md-3#port").hover(function(){
        $(this).find(".description").css("display", "flex");
    },function(){
        $(this).find(".description").hide();
    });
});

$("#submit").click(function(){
   var name = $("#btmcont div input[type=text][name=name]").val();
   var email = $("#btmcont div input[type=email][name=email]").val();
   var message = $("#btmcont div textarea[name=message]").val();
   if(name && email && message !== null){
       alert("Hello " + name +" we have received your message. Thank you for reaching out to us. ");
   }else {
       alert("You Must Fill All Fields!")
   }
});