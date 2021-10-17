// Object literals are just key value name. In other programming language it is more likely a dictionary

const person = {
    firstName : "Ma-aruf",
    lastName : "Burad",
    age : 23,
    isMarried : false,
    hobbies : ['music', 'coding', 'movies'],
    address : {
        street : "50 main st",
        city : 'Boston',
        state : 'MA'
    }
}

console.log(person)
// accessing single value
console.log(person.lastName)
//accessing value of list
console.log(person.hobbies[0])
// accesing another object literal inside of a literal
console.log(person.address.city)
//pulling out nultiple object
const { firstName, lastName, address} = person
console.log(lastName)

// Add properties
person.email = 'maarufburad1231@gmail.com'
console.log(person.email)