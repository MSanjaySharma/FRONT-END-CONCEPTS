/* const p1='sachin';
const p2='virat';
const p3="dhoni" */

const players = ["sachin", "virat", "dhoni"];
console.log(players[0]); //"sachin"
console.log(typeof players); //"object"
console.log(Array.isArray(players)); //"true"

const student = {
  id: 1,
  name: "arjun",
};

console.log(student); //Object {id: 1, name: "arjun"}
console.log(typeof student); //"object"
console.log(Array.isArray(student)); //false

/* array doesnt get buffer overflow error as it is implemented as a linked list internally */

//const values =[10,'sachin',true,undefined,[],{}]
