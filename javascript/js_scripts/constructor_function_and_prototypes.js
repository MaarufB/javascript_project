function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// prototyping
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
    }

//Prototyping
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}




// Instantiate Object
const person1 = new Person('Ma-aruf', 'Burad', '12-31-1997');

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);