//  foreach ()  = method used to iterate over the elemnents of an array and apply a specified function (callback) to each element
   
    //syntax =  array.forEach(callback);
    // element , index , array are provided 

let num = [1, 2, 3, 4, 5]


 num.forEach(power)
 num.forEach(triple)
 num.forEach(doubled)
 num.forEach(display)

function display(num){
   console.log(num);
   
}

function doubled (element , index , array){
  array[index] = element * 2
}
function triple (element , index , array){
  array[index] = element * 3
}
function power (element , index , array){
  array[index] = Math.pow (element , 2)
}

// arrow function = a consise way to write a fucntion expressions good for simple functions that you use only (parameters) => some code 


const numbers = [ 1, 2, 3, 4, 5, 6]

const square = numbers.map ((element )=> Math.pow (element, 2))

console.log(square);

