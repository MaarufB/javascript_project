var itemInput = document.querySelector(`input[type="text"]`);
var form = document.querySelector(`form`);
var select = document.querySelector(`select`);

//itemInput.addEventListener(`keydown`, runEvent);
//itemInput.addEventListener(`keyup`, runEvent);
//itemInput.addEventListener(`keypress`, runEvent);
//itemInput.addEventListener(`focus`, runEvent);
//itemInput.addEventListener(`blur`, runEvent);

//itemInput.addEventListener(`cut`, runEvent);
//itemInput.addEventListener(`paste`, runEvent);
select.addEventListener(`change`, runEvent);
itemInput.addEventListener(`input`, runEvent);

// we are going to use the submit button

form.addEventListener(`submit`, runEvent);


function runEvent(event){
    event.preventDefault();
    console.log(`${event.type}`)
    //console.log(event.target.value);

    // get the select value
    var selectVal = event.target.value;
    //console.log(selectVal);

    //document.getElementById('output').innerHTML = `<h3>${event.target.value}</h3>`;

}