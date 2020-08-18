//es5
function add(a, b) {
  a = typeof a === "undefined" ? 0 : a;
  b = typeof b === "undefined" ? 0 : b;
  return a + b;
}

//es6
function add(a = 0, b = 0) {
  a = typeof a === "undefined" ? 0 : a;
  b = typeof b === "undefined" ? 0 : b;
  return a + b;
}

console.log(add()); //0
console.log(add(10)); //10
console.log(add(10, 20)); //30

//function overloading is not supported in js;
