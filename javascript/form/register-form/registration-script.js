let firstName = document.getElementById("firstName");
let middleName = document.getElementById("middleName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age")
const saveBtn = document.getElementById("submit-btn");

const mainTable = document.getElementById("main-table");
let fieldName = document.forms["registration-form"]["firstName"];

const textField = []
textField.push(firstName);
textField.push(middleName);
textField.push(lastName);
textField.push(age);

let localPersonStorage = JSON.parse(localStorage.getItem("registeredList"));

let registeredList = [];
console.log(JSON.stringify(localPersonStorage))
console.log(typeof(localPersonStorage));
console.log(localPersonStorage.length)

localPersonStorage.forEach((person) => AddPeson(person));

saveBtn.addEventListener("click",(event)=>{
    event.preventDefault();
   
    AddPeson();
});



function AddPeson(person){
    //   registeredList  = {
    //      personFirstName : firstName.value,
    //      personMiddleName : middleName.value,
    //      personLastName : lastName.value,
    //      personAge : age.value
    //  }

    var list = document.querySelector("#person-list");
    var tr = document.createElement("tr");

    tr.innerHTML = `<td>${firstName.value}</td>
                    <td>${middleName.value}</td>
                    <td>${lastName.value}</td>
                    <td>${age.value}</td>`;

    list.appendChild(tr);
    mainTable.appendChild(tr);
    console.log(JSON.stringify(registeredList));
    localStorage.setItem("registeredList", JSON.stringify(registeredList));
}


function validateTextField(textField){
    var field;
}

function UpdatePerson(){}