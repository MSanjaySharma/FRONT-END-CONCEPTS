let a = 10;
let b = a;

console.log(a, b); //10 10
a = 20;
console.log(a, b); //20 10
b = 30;
console.log(a, b); //20 30

let anumbers = [10, 20];
let bnumbers = anumbers;

console.log(anumbers, bnumbers); //[ 10, 20 ] [ 10, 20 ]

anumbers.push(30);

console.log(anumbers, bnumbers); //[ 10, 20, 30 ] [ 10, 20, 30 ]

bnumbers.pop();

console.log(anumbers, bnumbers); //[ 10, 20 ] [ 10, 20 ]
