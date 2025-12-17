const marval_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marval_heros.push(dc_heros);

// console.log(marval_heros);
// console.log(marval_heros[3][1]);

const allHeros = marval_heros.concat(dc_heros);
console.log(allHeros);

const all_New_heros = [...marval_heros, ...dc_heros];

console.log(all_New_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);



console.log(Array.isArray("Vishal"));
console.log(Array.from("Vishal"));
console.log(Array.from({ name: "Vishal" }));

let player_Name = "Vishal";
let score1 = 200;
let score2 = 300;

console.log(Array.of(player_Name, score1, score2));