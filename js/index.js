$(document).ready(function() {
  $(".credit-card").mouseenter(function() {
    $(this).css({
      "box-shadow": "0px 4px 50px 0px rgba(0,0,0, 1)",
      "transition": "2s"
    });
  });
  $(".credit-card").mouseleave(function() {
    $(this).css({
      "box-shadow": "0px 0px 0px 0px rgba(0,0,0, 1)",
      "transition": "2s"
    });
  });

 
  $(function() {
 $("input").on('keyup', function() {
   
   var logged = $(this).val();
 var str1 = $(this).val().substring(0,4);
   $("#firstfour").html(str1);
   var numint = 0;
   numint+=4;
   console.log(numint);
   
var fifth = logged.replace(logged.charAt(numint + 1), " ");
   console.log(fifth);
 });
});
  
  if ($("input").length=17)
    {
      $("#account-number").css({"border":"rgba(0,0,0,0)", "background" : "rgba(0,0,0,0)" });
    }
  /*
$("#account-number").on("input", function(){
  $("#firstfour").text(this.value.substring(0,4));
  
});

*/
  


 
    
    
    
 

  
});