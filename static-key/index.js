
class mathUtil{

  static pi = 3.14453
  
  static plus (a,b){
      return a+b;
  }
  static minus (a,b){
      return (a + (b - mathUtil.pi)).toFixed(2);
  }
}

console.log(mathUtil.pi);
console.log(mathUtil.plus(1,2));
console.log(mathUtil.minus(1,2));


/* 
static = keyword that defines properties and methods that belong to a class  itself rather than the objects created form that class */


  