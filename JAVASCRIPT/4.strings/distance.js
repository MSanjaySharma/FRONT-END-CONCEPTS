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

//es 6 ==string literals || template strings || template literals===use back tick ``

const name = "sanjay";

console.log("hello " + name); //"hello sanjay"

console.log(`hello ${name}`); //"hello sanjay"

console.log(
  `The distance between ${source} and ${destination} is ${
    distance + 4
  } kms and the time taken to travel is ${time}.`
);
