//NaN - not a Number
let result = -10 / 0;
let price = 25;
console.log(result); //-infinity
console.log(typeof result); //number
console.log(Math.abs(result)); //infinity

result = 10 / "a";
price = 25;
console.log(result); //NaN
console.log(typeof result); //"number"
globalThis.parseFloat("123.56");

console.log(result == NaN); //false
console.log(Number.isNaN(result)); //true
console.log(Number.isNaN(price)); //true
