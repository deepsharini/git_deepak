
let score = JSON.parse(localStorage.getItem ('score')) || {
  wins: 0,
  losses : 0,
  Tie: 0
}


updateScoreElement()



 /* 
if (!score){
 score = {
  wins: 0,
  losses : 0,
  Tie: 0
 }
} */


function playgame(playerMove){
let computerMove = pickcomputerMove();

let result = '';
if (playerMove === 'scissors'){
if (computerMove === 'rock'){
     result = 'you lose';
} else if (computerMove ==='paper'){
    result = ' you win';
}  else if (computerMove ==='scissors'){
   result = 'Tie';
}
} 

else if (playerMove === 'rock'){
 
if(computerMove === 'rock' ){
   result = 'Tie ';
} else if (computerMove === 'paper'){
   result = 'you lose';
} else if (computerMove === 'scicssor'){
   result = 'you win';
} 
}

else if (playerMove === 'paper'){


   if (computerMove === 'rock'){
   result = 'you lose';
   }
   else if (computerMove === 'paper'){
   result = 'Tie';
   }
   else if (computerMove === 'scissors'){
   result = 'you win';
   }
} 

if (result === 'you win'){
 score.wins += 1 ;
} else if  (result === 'you lose'){
score.losses += 1 ;
} else if (result === 'Tie'){
score.Tie += 1 ;
} 


localStorage.setItem ('score' , JSON.stringify (score));

updateScoreElement()

document.querySelector ('.js-result').innerHTML = result;

document.querySelector ('.js-moves').innerHTML
=`you <img src="rps-img/${playerMove}-emoji.png" class="move-icon">
<img src="rps-img/${computerMove}-emoji.png" alt="" class="move-icon">
computer `;
}

function updateScoreElement () {
 document. querySelector('.js-score')
 .innerHTML = `wins:${score.wins}, losses: ${score.losses} , Tie: ${score.Tie}`;
}

//function for picking computer move 
function pickcomputerMove () {
let randomNumber = Math.random ();

let computerMove = '';

if (randomNumber >= 0 && randomNumber  < 1 / 3 ){
    computerMove = 'rock';
} 
else if (randomNumber >= 1/3 && randomNumber < 2/ 3) {
  computerMove = 'paper';
} else if (randomNumber >= 2/3 && randomNumber < 1) {
  computerMove = 'scissors';
}
console.log ( computerMove);
return computerMove;
}