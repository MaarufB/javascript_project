class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Car("Ford", 2015);

console.log(`My car is ${myCar.name} ${myCar.age()}`)