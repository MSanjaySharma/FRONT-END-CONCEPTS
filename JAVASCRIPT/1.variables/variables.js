//IMP
var n = 10; //number
console.log(typeof typeof n); //always string
var article = {
  title: "sanjay", //object==key value pair
  score: 10,
};

// variables - are used to store values within a program
// name, price, description, category, stock
// string, number, boolean, array, object

var name = "marker"; // string
console.log(name, typeof name);

var price = 15; // number
console.log(price, typeof price);

var description = "white board marker"; // string
var stock = 150; // number
var codEligible = true; // boolean

console.log(codEligible, typeof codEligible);

var fruits = ["mango", "kiwi", "water melon"]; // array
console.log(fruits, typeof fruits);

var article = {
  // object
  title: "Javascript",
  body: "FULL STACK JAVASCRIPT",
};
console.log(article, typeof article);

// function
var greet = function () {
  // anonymous function
  return "HI There";
};
console.log(greet);
console.log(greet());
