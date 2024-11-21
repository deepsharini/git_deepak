const textbox = document.getElementById ("textbox");
const tofarenheit = document.getElementById ("tofarenheit");
const tocelsius = document.getElementById ("tocelsius");
const result = document.getElementById ("result");
let temp;


function convert() {

  if (tofarenheit.Checked) {
      result.textContent = 'hello'
  }
   else if (tocelsius.Checked){

   }
  
   else {
     result.textContent = 'select a unit';
  }
}
