// Class
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}


// Instantiate Object
const person1 = new Person('Ma-aruf', 'Burad', '12-31-1997');

console.log(person1.getFullName());
console.log(person1);