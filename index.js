

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];


var started = false;


var level = 0;

// Using jQuery to detect when a keyboard key has been pressed.
// Call nextSequence when pressed for first time

$(document).keypress(function() {
  if (!started) {

    // Changing h1 to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);


  //Calling checkAnswer() after a user has clicked and chosen their answer
  checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {

  //Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  // Increase the level by 1 every time nextSequence() is called.
  level++;

  // updating the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

//Playing sound

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Creating animation

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function checkAnswer (currentLevel1) {

  if (gamePattern[currentLevel1] === userClickedPattern[currentLevel1]) {
    console.log ("success")

    //If the user got the most recent answer right 
    if (userClickedPattern.length === gamePattern.length) {

      //Calling nextSequence after 1000 millisecond of delay
      setTimeout(function(){
        nextSequence();
      }, 1000)
    }
  }else {
    console.log("wrong");

    //If wrong then play this sound
    playSound("wrong");

    //Add a this class if wrong
    $("body").addClass("game-over");

    //removing the class after 200 milliseconds
    setTimeout(function(){
      $("body").removeClass("game-over")
    }, 200)

    $("h1").text("Game Over, Press Any Key to Restart")

    //Calling startOver when the user fails
    startOver();

  }
}


//Creating startOver function
function startOver (){

  //reseting the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;

}








































