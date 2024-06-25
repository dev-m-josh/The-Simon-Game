

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userclickedPattern = [];

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    //when a user clicks on a button, the corresponding sound should be played.
    playSound(userChosenColour);

  });


function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 3) + 1;
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Using jQuery to selecting the button with the same id as the randomChosenColour

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //playing sound for the button selected
    playSound (randomChosenColour);
}


function playSound(name) {

    //
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }





























