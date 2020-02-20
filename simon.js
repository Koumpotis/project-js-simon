let userPattern= require('./buttons.js');
let pattern = [];
let htmlButtonNames = ['blue','green', 'red', 'yellow'];

function randomPattern() {
  let number = Math.floor(Math.random() * 4);

  pattern.push(htmlButtonNames[number]);

  //THIS IS FOR LATER SO THE GAME GOES ON UNTIL THE USER LOSES.
   if (userPattern === pattern){
    randomPattern();

  } else if ( userInput !== pattern){
    console.log(`Game Over! Better luck next time! You reached level ${pattern.length}!`);
  }
}

//SANITY CHECKS FOR STHE randomPattern FUNCTION
for (let a=1; a<=5; a++){
randomPattern();
}
console.log(pattern);
