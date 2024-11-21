
function Car(make , model , year , color) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color
  this.drive = function () {
     console.log(`you drive the ${this.model}`);
     
  }
}

const car_1 = new Car ("ford" , "mustang" , "2022" , "red");

const car_2 = new Car ("cheverlet" , "camero" , "2022" , "silver");

const car_3 = new Car ("dodge" , "charger" , "2022" , "blue");


console.log(car_1);
console.log(car_2);
console.log(car_3);

car_1.drive()
