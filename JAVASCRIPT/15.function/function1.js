function add(a, b) {
  return a + b;
}

console.log(add()); //in other programming languages it would be an error since
//default parameters are undefined

console.log(add(10, 5, 30)); //if more arguments are passed they are ignored
