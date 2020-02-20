// This file contains the game logic.
// All the event-listening should happen in buttons.js

// variables
userInput = [];
simonInput = [];
var id, color, level=0;
var buttonSound = [
    "https://www.soundjay.com/button/sounds/button-11.mp3",
    "https://www.soundjay.com/button/sounds/button-10.mp3",
    "https://www.soundjay.com/button/sounds/button-37.mp3",
    "https://www.soundjay.com/button/sounds/button-1.mp3"
];
$(document).ready(function(){
    $(".start").click(function(){
        level++;
        startGame();
    })
})

function startGame() {
    console.log(level)
    randomPattern();
    var i=0;
    var myInterval= setInterval(function(){
        id= simonInput[i]
        color = $("#"+id).attr("class").split(" ")[1];
        console.log(id+" "+color)
        addClassSound
    }, 1000);

}
function randomPattern() {
    let number = Math.floor(Math.random() * 4);
   simonInput.push(number)
  }
