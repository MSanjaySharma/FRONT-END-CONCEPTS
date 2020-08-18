/* 
*********************************
example of lexical scoping

*/

const msg = "hi there";

function print() {
  console.log(msg);
  return true;
}

console.log(print()); //true
