console.clear();
class Calculator{
    constructor(firstNum, secondNum, operatorNumber){
        this.firstNum = firstNum;
        this.secondNum =  secondNum;
        this.operator = operatorNumber;
    }

    getAnswer(){
        if (this.operator == '+'){
            return this.getSum();
        }
        else if(this.operator == '-'){
            return this.getDifference();
        }
        else if(this.operator == 'x'){
            return this.getProduct();
        }
        else if(this.operator == '/'){
            return this.getQuotient();
        }
    }

    getProduct() {
        
        return parseInt(this.firstNum) * parseInt(this.secondNum);
    }

    getSum(){
        return parseInt(this.firstNum) + parseInt(this.secondNum);
    }

    getDifference(){
        return parseInt(this.firstNum) - parseInt(this.secondNum);
    }

    getQuotient(){
        return parseInt(this.firstNum) / parseInt(this.secondNum);
    }
}

class DisplayAnswer{
    constructor(answer, elem){
        this.answer = answer;
        this.elem = elem;
    }
}

let displayTextLabel = document.getElementById('text-field');

// Numbers input
const btnZero =  document.getElementById('btn-zero');
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const btnFour = document.getElementById('btn-four');
const btnFive = document.getElementById('btn-five');
const btnSix = document.getElementById('btn-six');
const btnSeven =  document.getElementById('btn-eight');
const btnEight = document.getElementById('btn-eight');
const btnNine =  document.getElementById('btn-nine');

// Operators
const btnAdd = document.getElementById('btn-add');
const btnMinus =  document.getElementById('btn-subtract');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide =  document.getElementById('btn-divide');

// Variable holders
let firstNum = 0;
let secondNum = 0;
let answer = 0;
let operator;
let btnInput = ''
let elemInnerText = document.querySelector('.text-field').innerHTML;
let selector = document.querySelectorAll('.input-btn');
let selectBtn = document.querySelector('.input-btn');

let inputNumbers = []
let inputOperators = []

selector.forEach((select)=>{
    !isNaN(select.innerText) ? inputNumbers.push(select.innerText) : inputOperators.push(select.innerText);
})

inputOperators.splice(inputOperators.indexOf('='));

console.log(inputOperators);

for(btn of selector){

    btn.addEventListener('click', function(e){
        e.preventDefault();

        if (inputNumbers.includes(this.innerHTML)){
            //firstNum == '0' ? firstNum = parseInt(this.innerHTML) : secondNum = parseInt(this.innerHTML); 
            btnInput += this.innerHTML;
            document.querySelector('.text-field').innerText = btnInput;
        }
        else if(inputOperators.includes(this.innerHTML)){
            operator = this.innerHTML;
            btnInput += this.innerHTML;
            document.querySelector('.text-field').innerText += operator; 
            console.log(`Operator ${operator}`);
        }
        else if(this.innerHTML == '='){
            firstNum = btnInput.split(operator)[0];
            secondNum = btnInput.split(operator)[1];
            var calClass = new Calculator(firstNum, secondNum, operator);
            console.log(calClass.getAnswer());
            btnInput = '';
            document.querySelector('.text-field').innerText += `=${calClass.getAnswer()}`;
        }
    });
}