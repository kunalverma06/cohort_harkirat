"use strict";
const num = 5;
console.log(num); // this is how we give a type to a variable in typescript
// there are various types in typescript such as number, string, boolean, object, array, tuple, enum, any, void, null, undefined, never, unknown
// note: any type can be assigned to any variable jiski value can be anything, it is a way to bypass the type checking in typescript
function sum(a, b) {
    return a + b;
}
const result = sum(5, 10); // note we didnt give the type of result variable but typescript automatically inferred the type of result variable as number this is called type inference ( but we should always give the type of the variable) good practice
function callbackfunction(fx) {
    return fx(5, 10);
}
const a = callbackfunction(sum); // this is how we pass a function as an argument to another function
console.log(a);
// we have defined the structure of an object using interface Person
function isAdult(person) {
    if (person.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
// so the object that we pass to the function isAdult should have the structure of the Person interface
const value = isAdult({
    name: 'John',
    age: 20,
    number: 1234567890
});
console.log(value);
class Employee {
    constructor(name, age) {
        this.name = name; //this is used to refer to the properties of the class
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name); //this is function that is defined in the User interface since we have implemented the User interface in the Employee class we have to define the greet method in the Employee class
        // everything defined in the interface should be defined in the class that implements the interface 
    }
}
const employee = new Employee('John', 20);
employee.greet('Hello'); // this is how we call the greet method of the Employee class
