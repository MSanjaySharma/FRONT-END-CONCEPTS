//array are ordered integer indexed,collection of values
//element,value , item all mean the same thing===synonyms

const players = ["sachin", "virat"];
console.log(players);
console.log(players[1]);
console.log(players[2]);
console.log(players[3]);

//properties==length
console.log(players.length); //2

//methods on arrays

//push()
//add element/s to the end of array
//push() returns the length of the new array
console.log(players.push("dhoni")); //3
console.log(players); //
console.log(players.push("suresh", "shikar")); //5

//unshift()
//add element.s to the begging of the array
console.log(players.unshift("shewag")); //6
console.log(players);

//shift()
//remove element from the beginning of the array
console.log(players.shift());
console.log(players);

//pop()
//remove element from the beginnning of the array
console.log(players.pop());
console.log(players);

/* unlike ruby and python pop() and shift() doesnt take any arguments to delete two elements at a time like pop(2
    To get this effect we have to call it twice
 */

//check if an element is present in array
console.log(players.includes("sachin")); //true

console.log(players.join());
console.log(players.toString());

//slice()--same as that of array==used to extract part of the array

const n = [10, 20],
  m = [30, 40];
console.log(n + m); //"10,2030,40"
const result = n.concat(m);
console.log(result); //Array(4) [10, 20, 30, 40]
