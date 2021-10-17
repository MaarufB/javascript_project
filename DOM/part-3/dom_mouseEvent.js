var button = document.getElementById("button");
var box = document.getElementById("box");

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);
//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent)



function runEvent(event){
    console.log('EVENT TYPE ' + event.type)

    output.innerHTML = `<h3>MouseX: ${event.offsetX} MouseY: ${event.offsetY}</h3>`;
    console.log(output);

    box.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 40)`

}