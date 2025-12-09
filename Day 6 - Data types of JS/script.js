// Primitive Datatype

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt;

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;

const id = Symbol('1234');
const anotherId = Symbol('1234');

console.log(id === anotherId);

const bigNumber = 12345678998765432n


// Refrence (Non-primitive) datatype

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Om",
    age: 20,
}

console.table(myObj);

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myObj);
console.log(typeof myFunction);