console.log("5" + 5); //'55'
console.log(5 + "2"); //'52'
console.log(5 + 5 + "3"); //'103'
console.log(5 + "5" + 5); //'555'
console.log(5 + parseInt("5") + 5); //15
console.log("6" + 4 + 4); //644
console.log("6" + (4 + 4)); //"68"
console.log("6"); //"6"

const source = "bangalore",
  destination = "mysore",
  distance = 140,
  time = "3hrs 30 mins";
//the distance between banglore to mysore is 140 kms and the time taken to travel is 3hrs 30 mins

console.log(
  "The distance between " +
    source +
    " and " +
    destination +
    " is " +
    (distance + 4) +
    " kms and the time taken to travel is " +
    time
);
