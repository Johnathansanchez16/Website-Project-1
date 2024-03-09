
function check(element){
var itemBox=element.parentNode;
var checked=itemBox.getAttribute('checked');
let ring=new Audio('chime.mp3');
if(checked === 'false'){
ring.play();
itemBox.setAttribute('checked','true');
}
else{
itemBox.setAttribute('checked','false')
ring.load();
}
itemBox.classList.toggle("clicked");
var allSubtasks=itemBox.parentNode.querySelectorAll('#sublist-item-box');
allSubtasks.forEach(function(child){
if (child.style.display === 'none') {
    child.style.display = 'block';
  } else {
    child.style.display = 'none';
  }
});

}
function checkSubtask(element){
var checked=element.getAttribute('checked');
let ring=new Audio('chime.mp3');
if(checked === 'false'){
ring.play();

element.setAttribute('checked','true');
}
else{
element.setAttribute('checked','false')
ring.load();
}
var itemBox=element.parentNode;
itemBox.classList.toggle("clicked");
}

function colorChange(element){
var checked=element.parentNode.parentNode.getAttribute('checked');
if(checked==='false'){
var dropList=element.parentNode.querySelector("#myDropList");
dropList.classList.toggle("show");
}
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
var dropList = element.parentNode;
dropList.classList.toggle("show");
}

function removeItem(element){
let swoosh=new Audio('swoosh.m4a');
swoosh.play();
var itemBox = element.closest('li');
itemBox.remove();
}

function removeSubtask(element){
let swoosh=new Audio('swoosh.m4a');
swoosh.play();
var subtask = element.closest('#sublist-item-box');
subtask.parentNode.removeChild(subtask);
}

function addNewItem(event){
var value=document.querySelector('.new-item-prompt #input-box').value;
if(event.keyCode==13&&(value=="")){
document.querySelector("#error-message").style.display="block"
setTimeout(function(){
document.querySelector("#error-message").style.display="none";
},5000);
}
if(event.keyCode==13&&!(value=="")){
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
var checked=element.parentNode.parentNode.getAttribute('checked');
if(checked==='false'){
var newItem=document.querySelector('#sublist-item-box').cloneNode(true);
newItem.style.display="block";
element.closest('ul li').appendChild(newItem);
}
}
