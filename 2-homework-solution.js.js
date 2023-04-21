//----------------------------------------1, 2,5,6--------------------------

function car(make, model, year){
 this.make =make;
 this.model = model;
 this.year =year;
 this.owner = owner;
 this.getCarInfo= function(){
    return this.make + " " + this.model + " " + "is released in" +
    " " + this.year;
 
}


class Vehicle {
    constructor(make,model){
        this.make = make;
        this.model - model;
    }
}

class Car extends Vehicle{
    constructor (make, model, year){
        super (make, model);
        this.year = year;
    }
owners=[]
}

this.addOwner = function (owner){
        this.owners.push(owner);
    }
    this.removeOwner = function (owner){
        const index = this.owners.indexOf(owner);
        if (index > -1){
            this.owners.splice(index, 1);
        }
    }
    
    this.getOwnersCount = this.owners.length;
    this.getOwnerNames = function(){
        return this.fullName();
    }
    this.getFullInfo = function(){
        return this.make + " " + this. model + " " + "from" + " " + this.year +
        "." + " " + this.getOwnersCount() + " " + "Person owns this car." +
        " " + "These are" + " " + this.getOwnerNames();
    }

}




function Person(name, surname, age, gender, cars = []){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars
    this.fullName = function(){
        return this.name +  " " + this.surname;
    }
    this.countCars = function(){
        return cars.length;
    }
    //7
    this.buysCar = function(car){
        this.cars.push(car);
        car.owners.push(this)
    }
   
}
//----------------------------------------1, 2,5,6--------------------------

function car(make, model, year){
 this.make =make;
 this.model = model;
 this.year =year;
 this.owner = owner;
 this.getCarInfo= function(){
    return this.make + " " + this.model + " " + "is released in" +
    " " + this.year;
 
}


class Vehicle {
    constructor(make,model){
        this.make = make;
        this.model - model;
    }
}

class Car extends Vehicle{
    constructor (make, model, year){
        super (make, model);
        this.year = year;
    }
owners=[]
}

this.addOwner = function (owner){
        this.owners.push(owner);
    }
    this.removeOwner = function (owner){
        const index = this.owners.indexOf(owner);
        if (index > -1){
            this.owners.splice(index, 1);
        }
    }
    
    this.getOwnersCount = this.owners.length;
    this.getOwnerNames = function(){
        return this.fullName();
    }
    this.getFullInfo = function(){
        return this.make + " " + this. model + " " + "from" + " " + this.year +
        "." + " " + this.getOwnersCount() + " " + "Person owns this car." +
        " " + "These are" + " " + this.getOwnerNames();
    }

}




function Person(name, surname, age, gender, cars = []){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars
    this.fullName = function(){
        return this.name +  " " + this.surname;
    }
    this.countCars = function(){
        return cars.length;
    }
    //7
    this.buysCar = function(car){
        this.cars.push(car);
        car.owners.push(this)
    }
   
}