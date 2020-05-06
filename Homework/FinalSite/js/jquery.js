$(document).ready(function(){


  $("aside ul li:first-child").click(function(){
    $(".Mercedes").show();
    $(".BMW").hide();
    $(".Aston").hide();
    $(".Audi").hide();

    });

  $("aside ul li:nth-child(2)").click(function(){
    $(".Mercedes").hide();
    $(".BMW").show();
    $(".Aston").hide();
    $(".Audi").hide();
  });

  $("aside ul li:nth-child(3)").click(function(){
    $(".Mercedes").hide();
    $(".BMW").hide();
    $(".Aston").hide();
    $(".Audi").show();
  });
  $("aside ul li:nth-child(4)").click(function(){
    $(".Mercedes").hide();
    $(".BMW").hide();
    $(".Aston").show();
    $(".Audi").hide();
    });



    });
