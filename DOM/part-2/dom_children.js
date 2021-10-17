// CHILDNODE //
var itemList = document.querySelector("#items");

console.log(itemList.childNodes)
/*


NodeList(9) [text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text] */

console.log(typeof(itemList.childNodes))

// CHILDREN //
// Children properties is recommended to use rather than childreNode

console.log(itemList.children[0].innerHTML);
itemList.children[1].style.backgroundColor = "yellow";

// FirstChild
console.log(itemList.firstChild);

// FirstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

// LastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4"; 
