const person = {
  name: "arjun",
  city: "bangalore",
  designation: "Sr software engineer",
};

//get all the keys  /properties
console.log(Object.keys(person));
//object.keys is an method on Object object***************** it returns an array......*********

//get all the values
console.log(Object.values(person));
//object.values is an method on Object object***************** it returns an array......*********

//how to check if a key is present within a an object
console.log(Object.keys(person).includes("city")); //true
console.log(Object.keys(person).includes("gender")); //false

//hasOwnProperty is not a method **********its a property of the object************** under consideration
console.log(person.hasOwnProperty("city")); //true
console.log(person.hasOwnProperty("gender")); //false

//how to check if a value is present
console.log(Object.values(person).includes("bangalore")); //true
