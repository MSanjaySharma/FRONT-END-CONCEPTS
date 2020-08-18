/* 
function declaration
function add(){

} */

//function expression
//function declaration gets hoisted but function expression doesnt get hoisted

const greet = function (name) {
  return "hi there " + name;
};

console.log(greet("ash"));

/* 
scenario
function add(a, b)  {
    return (a + b);
}
console.log(add(10, 20));

const total = function (m , n) {
    return (m + n);
}
console.log(total(10, 20)); 

total(2, 3)
total(1, 1)
*/

//IIFE immediately invoked function expression
//we declare a function and use it immediately after declaring , not reuse it once again

(function () {
  console.log("hello there");
})();
