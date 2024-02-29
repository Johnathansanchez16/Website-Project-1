function check(element){
let ring=new Audio('positive-response-81640.mp3');
ring.play();
ring.pause();
ring.load();
element.parentNode.parentNode.classList.toggle("clicked");
element.parentNode.parentNode.parentNode.querySelector("#sublist-item-box").classList.toggle("clicked");
}

function colorChange(element){
var dropList=element.parentNode.querySelector("#myDropList");
dropList.classList.toggle("show");
}
function colorSelect(color, element){
var categoryInput=element.parentNode.parentNode.querySelector('#category-input');
var categoryBox=element.parentNode.parentNode.parentNode.querySelector('#category-box');
switch(color){
case 'red':
categoryInput.style.backgroundColor="#ff9696";
categoryBox.style.backgroundColor="#ff9696";
break;
case 'orange':
categoryInput.style.backgroundColor="#ffd596";
categoryBox.style.backgroundColor="#ffd596";
break;
case 'yellow':
categoryInput.style.backgroundColor="#fffd96";
categoryBox.style.backgroundColor="#fffd96";
break;
case 'green':
categoryInput.style.backgroundColor='#96ffad';
categoryBox.style.backgroundColor='#96ffad';
break;
case 'blue':
categoryInput.style.backgroundColor="#96d9ff";
categoryBox.style.backgroundColor="#96d9ff";
break;
case 'purple':
categoryInput.style.backgroundColor="#c496ff";
categoryBox.style.backgroundColor="#c496ff";
break;
}
}
function removeItem(element){
var itemBox = element.closest('li');
itemBox.remove();
}
function removeSubtask(element){
var subtask = element.closest('#sublist-item-box');
subtask.parentNode.removeChild(subtask);
}
function addNewItem(event){
if(event.keyCode==13){
var newItem=document.querySelector('.item-box').cloneNode(true);
input=document.querySelector('.new-item-prompt #input-box').value;
document.querySelector('.new-item-prompt #input-box').value='';
newItem.querySelector('#name-box #input-box').value=input;
newItem.style.display="block";
var newElement=document.createElement("li");
newElement.appendChild(newItem);
document.querySelector('ul').appendChild(newElement);
}
}
function newSubtask(element){
var newItem=document.querySelector('#sublist-item-box').cloneNode(true);
newItem.style.display="block";
element.closest('ul li').appendChild(newItem);
}
