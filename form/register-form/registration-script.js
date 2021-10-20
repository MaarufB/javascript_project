let firstName = document.getElementById("firstName");
let middleName = document.getElementById("middleName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age")
const saveBtn = document.getElementById("submit-btn");

const mainTable = document.getElementById("main-table");

const textField = []
textField.push(firstName);
textField.push(middleName);
textField.push(lastName);
textField.push(age);

let registeredList = Object();

saveBtn.addEventListener("click",(event)=>{
    event.preventDefault();
 
    AddPeson();
});

function AddPeson(){
     registeredList  = {
        personFirstName : firstName.value,
        personMiddleName : middleName.value,
        personLastName : lastName.value,
        personAge : age.value
    }
    var tr = document.createElement("tr");
    var tdFirstName = document.createElement("td");

    tr.innerHTML = `
                    <td>${firstName.value}</td>
                    <td>${middleName.value}</td>
                    <td>${lastName.value}</td>
                    <td>${age.value}</td>`;

    mainTable.appendChild(tr);

    for(let field of textField){
        field.value = "";
    }


    console.log(JSON.stringify(registeredList));
}


function validateTextField(textField){
    var field;
}