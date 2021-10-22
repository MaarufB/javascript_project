let my_array = [];

let another_array = ["Apple", "Banana", "Manggo", "Water Melon"];

for(let i=0; i < another_array.length; i++){
    my_array.push(another_array[i]);
    console.log(another_array[i]);
}
console.log(`This is my fruits ${my_array}`)

const main = document.getElementById("main");
const ul = document.createElement("ul");
main.appendChild(ul)
// get the element ul by id
//const ul = document.getElementById("ul");
ul.style.position = "fixed";
ul.style.margin = "100px";

// Make a loop and create list
for(let fruit of another_array){
    const li = document.createElement("li");
    li.style.listStyle = "none";
    li.innerText = fruit;
    ul.appendChild(li)
    console.log("Add")
}