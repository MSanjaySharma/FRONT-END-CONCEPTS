let a = 10,
  b = 20;

function add(a, b) {
  //parameters like local variable
  (a = 100), (b = 200);
  return a + b;
}

console.log(add(a, b)); //300
console.log(a, b); //10,20
