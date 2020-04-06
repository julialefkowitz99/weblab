$(document).ready(function(){

  $(".step1").hide();
  $(".step2").hide();
  $(".step3").hide();
  $(".step4").hide();
  $(".step5").hide();
  $(".step6").hide();



  $("aside ul li:first-child").click(function(){
    $(".step1").show();
    $(".step2").hide();
    $(".step3").hide();
    $(".step4").hide();
    $(".step5").hide();
    $(".step6").hide();
  });

  $("aside ul li:nth-child(2)").click(function(){
    $(".step1").hide();
    $(".step2").show();
    $(".step3").hide();
    $(".step4").hide();
    $(".step5").hide();
    $(".step6").hide();
  });

  $("aside ul li:nth-child(3)").click(function(){
    $(".step1").hide();
    $(".step2").hide();
    $(".step3").show();
    $(".step4").hide();
    $(".step5").hide();
    $(".step6").hide();
  });
  $("aside ul li:nth-child(4)").click(function(){
    $(".step1").hide();
    $(".step2").hide();
    $(".step3").hide();
    $(".step4").show();
    $(".step5").hide();
    $(".step6").hide();
  });
  $("aside ul li:nth-child(5)").click(function(){
    $(".step1").hide();
    $(".step2").hide();
    $(".step3").hide();
    $(".step4").hide();
    $(".step5").show();
    $(".step6").hide();
  });
  $("nav ul li:first-child").click(function(){
    $("body").css("background-color", "rgba(17, 193, 210, 0.7)");
  });
  $("nav ul li:nth-child(2)").click(function(){
    $("h1").html("<center> BEST <b>PANCAKES EVER </center></b>"); 
  });



  });  //end of your document
