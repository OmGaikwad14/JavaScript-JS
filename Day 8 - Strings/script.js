const name = "Vishal";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Volly-Ball-Game');

console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-9, 10)
console.log(anotherString);

const newString1 = "  Vishal  ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://vishal.com/vishal%18babar";

console.log(url.replace('%18', '-'));
console.log(url.includes('vishal'));

console.log(gameName.split('-'));
