var button = document.getElementById('button').addEventListener
    ('click', buttonClick);

function buttonClick(event){
//    console.log(event.target);
//    console.log(event.target.id);
//   console.log(event.target.className);
//    console.log(event.target.classList);
    
//    var output = document.getElementById("output");
//    output.innerHTML = '<h3>' + event.target.id + '</h3>';
//    console.log(event.type);

    console.log(event.clientX);
    console.log(event.clientY);

}


