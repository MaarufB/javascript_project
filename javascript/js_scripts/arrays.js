/* multi
lin comments
*/

// Arrays - variables that hold multiple values
// javascript arrays you can contain a different data types

const some_numbers = new Array(1,2,3,4,5) // When we see a `new` keyword it means we were constructing an array
const some_fruits = ['Apple', 'Banana', 'egg plant']
const combine_types = ['string', 'string2', 1,2, true]


console.log(some_numbers)
console.log(some_fruits)
console.log(combine_types)

// Adding new item on list
some_fruits.push('mango')
console.log(some_fruits)

// get the specific index of an array
console.log(some_fruits.indexOf('Banana'))