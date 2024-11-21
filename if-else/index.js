

const text =document.getElementById("text");
const submit =document.getElementById("submit");
const result =document.getElementById("result");
let age;


submit.onclick = function(){

   age = text.value;
   age = Number(age);
   
   if(age >=100){
      result.textContent = `your are too old to enter this site`;
     
    } 
    
    else if (age >= 18){
      result.textContent =`yoou old enough to enter this site`;
     
    }
    
    else if(age < 0){
      result.textContent =`your age can't be below 0`;
       
    } 
    else {
      result.textContent =`you must 18+ to enter this site`;
      
    }

}
