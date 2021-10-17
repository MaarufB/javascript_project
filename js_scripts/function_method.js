
function addNum(num1, num2){
    return num1 + num2;
}

addNum(1,1);

//console.log(addNum(2,2))

// create an arrow funtion
const addNumber = (num1=1, num2=1) => num1 + num2;
console.log(addNumber())

// one parameter
const one_param = num1 => num1 + 1
console.log(one_param(2))