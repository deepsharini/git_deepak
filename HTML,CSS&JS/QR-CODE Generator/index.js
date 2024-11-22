let wrapper = document.querySelector('.wrapper')
let generateButton = document.querySelector('.Generate-btn')
let QRinput = document.querySelector('.QR-input')
let QRimg = document.querySelector('.QR-img')

function QRgeneratingFunction (){
   generateButton.addEventListener('click', ()=>{
      let QrValue = QRinput.value;
      if(!QrValue) return alert("please enter anything...");
      generateButton.innerHTML = "generating QR code..."
      QRimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QrValue}`
      QRimg.addEventListener("load", ()=>{
         wrapper.classList.add("active")  ;
         generateButton.innerHTML = "Generate QR"
        
      })
      QrValue = "";
   })

}
QRgeneratingFunction()

QRinput.addEventListener("keyup", ()=> {
   if(!QRinput.value){
     wrapper.classList.remove("active") 
   }
})


