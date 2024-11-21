
const minNum = 1;
const maxNum = 100 ;
const answer = Math.floor( Math.random() * (maxNum - minNum +1) )+minNum  ;

let attempts = 0;
let guess;
let running = true ;
 
while(running){
  guess= window.prompt (`guess a number between ${nimNum} - ${maxNum}`)
  guess = Number (guess);
  
 if(isNaN(guess)){
  window.alert ("please select a valid number") ;
 }
 else if(guess< maxNum || guess > maxNum ){
   window.alert("please select a valid number");
 }
 else {
  attempts ++;
    
 }
  running= false ;
}
