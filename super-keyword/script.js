/* super = keyword is used in classes to call the constructor or acess the properties and methods of a parent (superclass) 
this = this Object
super = the parent  */


class animal {
   constructor (name, age){
    this.name = name;
    this.age = age;
   } 
   
   move(speed){
     console.log(`this ${this.name} Moves at a speed of ${speed}mph`); 
   }
   }

class rabit extends animal {
    
  constructor (name , age , runSpeed ){
    super(name,  age)
     this.runSpeed = runSpeed;
  }
  Run(){
    console.log(`this ${this.name} can run`);
    super.move(this.runSpeed)
  }
  
}
class fish extends animal {
  constructor (name , age , SwimSpeed ){
    super(name, age)
    this.SwimSpeed = SwimSpeed;
}
}
class hawk extends animal {
   
  constructor (name , age , flySpeed ){
    super(name , age);
    this. flySpeed= flySpeed;
}
}



const Rabit = new rabit ("rabbit" , 1 , 25) 
const Fish = new fish ("fish" , 2 , 11) 
const Hawk = new hawk ("hawk" , 3 , 55) 

console.log(Rabit);
Rabit.Run()