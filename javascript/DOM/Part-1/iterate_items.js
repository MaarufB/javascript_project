const items = document.querySelectorAll(".item");

items.forEach((item) => console.log(item.innerHTML));

const ul = document.querySelector('.items');

//ul.remove(); // this will remove all the ul items on DOM

//ul.lastElementChild.remove(); // remove tha last element on DOM

ul.firstElementChild.textContent = 'Hello'; // Changing the text on DOM
ul.children[1].innerText = 'children';
ul.lastElementChild.innerHTML = '<h1>Hello this is inner HTML<h1>';


// Changing a style

const btn = document.querySelector(".btn");
btn.style.background = 'red';