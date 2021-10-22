// GETELEMETSBYNAME //
var items = document.getElementsByClassName('list-group-item');
var itemList = document.querySelectorAll('list-item-group');
console.log(items);
items[1].textContent = 'Hello 2'
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// Changing multiple style in list
for(var i=0; i<items.length; i++){
    items[i].style.backgroundColor = "#f4f4f4";
    items[i].style.fontWeight = 'bold';
    console.log(items[i].innerText);
}
