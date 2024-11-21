// call back = a function that passed into another function as an arguement


sum(displayconsole , 1 , 2);

function sum (callback , x, y){
    let result = x + y ;
    callback(result)
}
   
function displayconsole (result){
  console.log(result);
  
}
