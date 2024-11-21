 

document.getElementById("mybutton");
document.getElementById("mylabel");    
const min= 1;
const max = 6;

mybutton.onclick =function(){
   random= Math.floor( Math.random ()* max)+ min ; 
   mylabel.textContent = random;
}
