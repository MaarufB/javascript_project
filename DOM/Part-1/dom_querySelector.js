// QUERYSELECTOR //
// We can use id selector or class selector or a css selector like or even html tag
var header = document.querySelector('#main-header') 
console.log(header.innerHTML);
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = "Hello World";

var submit = document.querySelector(`input[type="submit"]`);
submit.value = "Send"

var item = document.querySelector('.list-group-item');
item.style.color = "red"; // this will only be applied to the first one

var lastItem = document.querySelector
('.list-group-item:last-child');
lastItem.style.color = "blue";

var secondItem = document.querySelector
('.list-group-item:nth-child(2)'); // this is a css selector called suedo nth-child(2)
secondItem.style.color = "coral";