// Single selector
const displayForm = document.getElementById("my-form");
console.log(displayForm);
// Other way to access document element
const displayFormQuery = document.querySelector(".container"); // can access class element
console.log(displayFormQuery);

// Multiple element selector
const queryAll = document.querySelectorAll(".item");
console.log(queryAll);

const byClass = document.getElementsByClassName("item");
console.log(byClass);

const byTagName = document.getElementsByTagName("li");
console.log(byTagName);

// Loop through an item
