  class products {
    constructor (name ,price) {
       this.name =name ,
       this.price =price
    } 
    displayproducts(){
        console.log(`product: ${this.name}`);
        console.log(`price: $${this.price.toFixed(2)}`);   
    }
    calculateTotal (salesTax){
       return this.price + (this.price * salesTax)
    }
  } 

  const salesTax = 0.05;

  const product1 = new products ("shirt", 10.55);
  const product2 = new products ("inner", 8.55);
  const product3 = new products ("hat", 12.55);


  product2.displayproducts();

  const total = product1.calculateTotal(salesTax)

  console.log(`total price (with tax) : $${total.toFixed(2)}`);
  