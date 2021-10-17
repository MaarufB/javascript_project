// createElement //
// Create a div
var newDiv = document.createElement('div');

// Add a class
newDiv.className = "hello";

// add an ID
newDiv.id = "hello-id"

// add attribute
newDiv.setAttribute('title', 'Hello Div');

// Create a text node
var newDivText = document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '30px';

console.log(newDiv.innerText);
console.log(newDiv); 