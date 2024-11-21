const checkbox = document.getElementById("checkbox");
const visa  = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function () {

if (checkbox.checked) {
   subResult.textContent = `you are SUBSCRIBED`;
}

else{
  subResult.textContent = `you are not subscribed`;
}

if (visa.checked){
   paymentResult.textContent =`you are paying with visa`;
}

else if (mastercard.checked) {
  paymentResult.textContent =`you are paying with mastercard`;
}

else if (paypal.checked) {
  paymentResult.textContent =`you are paying with paypal`;
}

else{
  paymentResult.textContent =`you must select PAYMENT type`;
}

}



