const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const count = document.getElementById("count");
let countt= 0; 

increase.onclick = function(){
  countt ++;
  count.textContent = countt;
}


reset.onclick = function(){
  countt = 0;
  count.textContent = countt;
}


decrease.onclick = function(){
  countt --;
  count.textContent = countt ;
}