const name = "Vishal";
const repoCount = 14;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Volly-ball');

console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('y'));


const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "  Vishal  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.youtube.com/Om%14gaikead";

console.log(url.replace('%14', '-'));

console.log(url.includes('Om'));

console.log(gameName.split('-'));