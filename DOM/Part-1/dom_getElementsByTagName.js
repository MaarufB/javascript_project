// GETELEMENTSBYTAGNAME //

var li = document.getElementsByTagName('li');

console.log(items);
li[1].textContent = 'Hello 2'
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

// Changing multiple style in list
for(var i=0; i<li.length; i++){
    li[i].style.backgroundColor = "#f4f4f4";
    li[i].style.fontWeight = 'bold';
    console.log(li[i].innerText);
}
