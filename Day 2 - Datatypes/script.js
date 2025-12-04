"use strict"; //treat all JS code as newer version

// alert(3+3); // we are using nodejs, not browser

// https://tc39.es use for refrance

console.log(3
    +
    3); // code readability should be high


let name = "Om";
let age = 20;
let is_good = true;
let address;
let value = null;

console.log(name, age, is_good, address, value);
console.log(typeof name, typeof age, typeof is_good, typeof address, typeof value);


console.table([name, age, is_good, address, value]);
console.table([typeof name, typeof age, typeof is_good, typeof address, typeof value]);


// String => ""
// Number => 2 to power 53
// Boolean => true/false
// Undefined => variable decleared but value not
// Null => standalone value
// Symbol => unique
// BigInt

// object