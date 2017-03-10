var redCount = 0;
var blueCount = 0;
var greenCount = 0;
var yellowCount = 0;
$(document).ready(function(){

//creates 4 starting boxes
$("body").append("<div class = 'box red'> </div>");
$("body").append("<div class = 'box blue'> </div>");
$("body").append("<div class = 'box green'> </div>");
$("body").append("<div class = 'box yellow'> </div>");


//adds and counts boxes via button clicks
$(".redButton").on("click", function(){
  $("body").append("<div class = 'box red'> </div>");
  redCount += 1;
  $(".redCount").text( "Red Count: " + redCount);
});
$(".blueButton").on("click", function(){
  $("body").append("<div class = 'box blue'> </div>");
  blueCount += 1;
  $(".blueCount").text( "Blue Count: " + blueCount);
});
$(".greenButton").on("click", function(){
  $("body").append("<div class = 'box green'> </div>");
  greenCount += 1;
  $(".greenCount").text( "Green Count: " + greenCount);
});
$(".yellowButton").on("click", function(){
  $("body").append("<div class = 'box yellow'> </div>");
  yellowCount += 1;
  $(".yellowCount").text( "Yellow Count: " + yellowCount);
});



}); //end doc ready
