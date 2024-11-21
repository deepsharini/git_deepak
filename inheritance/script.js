/* inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child) helps with code reusablity  */

class propose {
   love = true 

   proposeByD () {
      console.log(`${this.boy} proposes ${this.girl} `);
      
   }
   proposeByH () {
      console.log(`${this.girl} proposes ${this.boy} `);
      
   }
}

class names extends propose {
   boy = "deepak";
   girl = "harini"
}  

const Names = new names();

Names.proposeByD()
console.log(Names.love);

