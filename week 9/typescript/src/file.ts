const num: number = 5
console.log(num) // this is how we give a type to a variable in typescript

// there are various types in typescript such as number, string, boolean, object, array, tuple, enum, any, void, null, undefined, never, unknown

// note: any type can be assigned to any variable jiski value can be anything, it is a way to bypass the type checking in typescript

 function sum (a: number , b: number): number { // this means a is of type number and b is of type number and the return type of the function is number (return type of the function can be void as well if there is not returning statement)
    return a + b ;
}

const result = sum(5, 10) // note we didnt give the type of result variable but typescript automatically inferred the type of result variable as number this is called type inference ( but we should always give the type of the variable) good practice

function callbackfunction(fx : (a: number, b: number) => number) { // this means fx is a function that takes two arguments of type number and returns a number
    return fx(5, 10)

}

const a= callbackfunction(sum) // this is how we pass a function as an argument to another function
console.log(a)


//interfaces in typescript
//interfaces are used to define the structure of an object

interface Person {
    name: string,
    age: number,
    number: number,
}

// we have defined the structure of an object using interface Person

function isAdult(person: Person) { // so here we are passing an object of type Person to the function isAdult and it defining the structure of the object it will accept
    if (person.age >= 18) {
        return true;
    }
    else{
        return false;
    }
}

// so the object that we pass to the function isAdult should have the structure of the Person interface
const value= isAdult({
    name: 'John',
    age: 20,
    number: 1234567890
})
console.log(value);

//Interfaces have another special property. You can implement interfaces as a class.
//Classes can implement interfaces. It means that a class can have the same structure as the interface.

// we have defined the structure of an object using interface Person

interface User{
    name: string,
    age?: number, // ? means that the property is optional and it may or may not be present in the object 
    greet(phrase: string): void // this means that the object of type User should have a greet method that takes a string as an argument and returns nothing
}

class Employee implements User{ // so here we are implementing the User interface in the Employee class
    name: string; //we have defined name and age properties in the Employee class
    age: number;
    constructor(name: string, age: number){ //constructor is a special method in the class that is called when the object of the class is created and it is used to initialize the properties of the class
        this.name = name; //this is used to refer to the properties of the class
        this.age = age;
    }
    greet(phrase: string){
        console.log(phrase + ' ' + this.name) //this is function that is defined in the User interface since we have implemented the User interface in the Employee class we have to define the greet method in the Employee class


        // everything defined in the interface should be defined in the class that implements the interface 
}}

const employee = new Employee('John', 20)
employee.greet('Hello') // this is how we call the greet method of the Employee class


//Interfaces in typescript can also be used to define the structure of a function

interface Add{
    a:number,
    b:number  // this means that the function should take two arguments of type number a
}

function Sum(add: Add){
    return add.a + add.b;
} // this is how we define the structure of a function using an interface


//types in typescript

type addition= {
    a:number,
    b:number
}
 function addd(add: addition){
    return add.a + add.b;

 }
 //how type is different from interface is that we can use type to define the structure of a function as well as a variable but we can only use interface to define the structure of an object
 
//  eg of type type num= number | string | boolean // this means that the variable num can be of type number or string or boolean



// this is the problem why we need generics
// type Input = number[] | string[]

// function Value(arr:Input){
//     return (arr[0]) // this is how we can access the properties of the array
// }

// let first= Value(['hello', 'world']) // this is how we call the Value function
// first.toupperCase() // this will give an error because the type of first is Input and Input can be either a number array or a string array and toUpperCase method is not present in the number array

// Syntax of generics are as follows

function Value<T>(arr: T[]){
    return (arr[0]) // this is how we can access the properties of the array
}

// it means that the function Value is a generic function that takes an array of type T and T can be any type such as number, string, boolean etc
let first=Value<string>(['hello', 'world']) // this is how we call the Value function and we have to specify the type of T in the angle brackets
first.toUpperCase() // this is how we can access the properties of the array



// Enusm in typescript is used to define a set of named constants
// enumeration is a collection of constants

enum Move {
    Up,
    Down,
    Left,
    Right
}

function Game(move: Move){
    if(move === Move.Up){
        console.log('Up')
    }
    else if(move === Move.Down){
        console.log('Down')
    }
    else if(move === Move.Left){
        console.log('Left')
    }
    else if(move === Move.Right){
        console.log('Right')
    }
}

// note it gives 0, 1, 2, 3 as the output because the enum Move is a collection of constants and the value of Up is 0, Down is 1, Left is 2 and Right is 3 

// we can also assign values to the constants in the enum and we can also assign string values to the constants in the enum 

// enum Move {
    // Up = 'up',
    // Down = 'down',
    // Left = 'left',
    // Right = 'right'
// }
// or enum Move{
    // Up = 10,
    // Down = 20,
    // Left,
    // Right

// } now it will have the value of left as 21 and right as 22