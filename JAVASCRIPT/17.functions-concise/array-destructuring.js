//es5
var fruits = ["appple","mango","kiwi"];
var f1 = fruits = fruits[0], f2 = fruits[1];

//es6
const  players = ["dhoni", "virat", "sachin"];
//const [p1, p2] = players
//console.log(p1, p2);

const [p1,, p2] = players;
console.log(p1, p2);

//array destructuring
