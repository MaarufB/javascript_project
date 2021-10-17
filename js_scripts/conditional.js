// CONDITIONAL

const x = 10;

// We are using double equal. Even though we change the type of x it will still equal
if (x == 10){
    console.log(`x is ${x}`);
}

const y = '10';
// Using a triple equal sign will validate the condition. It will be equal if both have the same type and format
if(y === 10){
    console.log(`y is not ${y}`)
}


// Ternary operator

const z = 10;
const color = z > 10 ? 'red' : 'blue';
console.log(color);