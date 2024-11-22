const scoreElement = document.querySelector('.score');
let playArea = document.querySelector(".play-area");
let highScoreElemnet = document.querySelector(".high-score");
const MobileControls = document.querySelectorAll(".controls i");
 
let GameOver = false; 
let foodX, foodY;
let snakeHeadX = 10, snakeHeadY = 5;
let snakeBody =[];
let velocityX = 0, velocityY= 0;
let setIntervalId;
let score = 0;

let highScore = localStorage.getItem("score") || 0;
  highScoreElemnet.innerText = `High score: ${highScore}`

const FoodPositioning = ()=>{
  foodX = Math.floor(Math.random()*30) + 1
  foodY = Math.floor(Math.random()*30) + 1
}

const handleGameOver = ()=> {
     alert("Game over! Press Ok to New Game...")
     clearInterval(setIntervalId)
     location.reload()
}

const controls = (e)=> {
   if(e.key === "ArrowUp" && velocityY != 1){
      velocityX=0; 
      velocityY = -1;
   } else if(e.key === "ArrowDown"  && velocityY != -1){
         velocityX= 0; 
         velocityY = 1;
   } else if(e.key === "ArrowLeft" && velocityX !=1){
         velocityX= -1;
          velocityY = 0;
   } else if(e.key === "ArrowRight" && velocityX != -1){
      velocityX= 1;
      velocityY = 0;
   }
   initGame()
}

MobileControls.forEach(key => {
   key.addEventListener('click', ()=> {
       controls({key: key.dataset.key})
   })
});

const initGame = ()=>{
   if(GameOver) {
       return handleGameOver()
   }
   let htmlMarkup = `<div class="food" style="grid-area: ${foodY}/${foodX}"></div>`
   // change food position when the head hits the food
   if(snakeHeadX === foodX && snakeHeadY === foodY){
       FoodPositioning()
       snakeBody.push([foodX , foodY])
       score++

       highScore = score >= highScore ? score : highScore;
       localStorage.setItem("score" , highScore)
       scoreElement.innerText = `score: ${score}`;

   }  

   for (let i = snakeBody.length-1; i>0; i--){
       snakeBody[i] = snakeBody [i -1 ]
      
      }
snakeBody[0] = [snakeHeadX , snakeHeadY]
   snakeHeadX += velocityX;
   snakeHeadY += velocityY;

   if(snakeHeadX <= 0 || snakeHeadX > 30 || snakeHeadY <= 0 || snakeHeadY > 30){
      GameOver = true;
   }
  //adding the snake body from the value taken from the snakehead 
   for (let i = 0; i<snakeBody.length; i++){
       htmlMarkup+= `<div class="snakeHead" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;

      if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[1][0]){
          GameOver = true;
      }
   }

  
   playArea.innerHTML = htmlMarkup;
}
document.addEventListener("keydown", controls);
FoodPositioning();
setIntervalId = setInterval(initGame , 125);

