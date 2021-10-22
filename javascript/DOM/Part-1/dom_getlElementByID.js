
// GETELEMENTBYID //

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
console.log(headerTitle.textContent);

console.log(headerTitle.innerText); // This will display the inner text only
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = "Goodbye";
//headerTitle.innerHTML = `<h3>Hello</h3>` // This will put an HTML inside of an headerTitle element
header.style.borderBottom = 'solid 3px #000';

// G