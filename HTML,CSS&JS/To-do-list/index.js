const addBtn = document.getElementById('add-btn');
const inputEl = document.getElementById('user-input');
const UlEl = document.querySelector('.list-item-main-div ul');
const liItem = document.getElementsByTagName('li');
const listItemMainDIV =document.querySelector('.list-item-main-div');


let TaskNum =1;
let LiItemLength;

function Input() {
   return inputEl.value.length;
};

function createListElement() {
   let NewListEl = document.createElement('li');
   let newLiElTextSpan = document.createElement('span');
   newLiElTextSpan.appendChild(document.createTextNode(`${TaskNum++}. ${inputEl.value.charAt(0).toUpperCase() + inputEl.value.slice(1)}`))
   NewListEl.appendChild(newLiElTextSpan);
   UlEl.appendChild(NewListEl);
   LiItemLength = liItem.length;
   inputEl.value = '';
   NewListEl.addEventListener ('click' , CrossTask)
   function CrossTask() {
      NewListEl.classList.toggle('task-done')
   }
   const closeBtn = document.createElement('button');
   closeBtn.appendChild(document.createTextNode('X'))
   NewListEl.appendChild(closeBtn);
   closeBtn.addEventListener('click' , DeleteListItem);
   function DeleteListItem() {
     NewListEl.remove()
     LiItemLength--;
     TaskNum--
     if(liItem === 0){
      listItemMainDIV.style.display ='none';
     }
   }  
}

function addListAfterClick (){
   if(Input()> 0){
      listItemMainDIV.style.display ="block"
      createListElement();
   } 
   else if(Input() === 0){
     document.querySelector('.warn-message-div').style.display='block'
     setTimeout(()=>{document.querySelector ('.warn-message-div').style.display='none'},3000)
   }
   
}
function addListAfterKeypress (event){
  if(Input()> 0 ){
    listItemMainDIV.style.display ="block"
 } 
 else if(Input() === 0 && event.which === 13){
   document.querySelector('.warn-message-div').style.display='block'
   setTimeout(()=>{document.querySelector ('.warn-message-div').style.display='none'},3000)
 }
 
}

addBtn.addEventListener('click', addListAfterClick)

inputEl.addEventListener('keypress', addListAfterKeypress)