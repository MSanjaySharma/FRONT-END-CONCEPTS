//object===unordered , string indexed , collection of values

const person = {
  name: "arjun",
  city: "bangalore",
};

console.log(person);
console.log(person["city"]);
console.log(person[city]); //here its trying to look for a variable called as city      //ReferenceError: city is not defined
console.log(person.age); //undefined
console.log(person["age"]); //undefined

//how to add new property (key value pair)
//unlike array theres no methods to add new key value pair in the objcets;
person.designation = "Sr.software engineer";
console.log(person);
person["company"] = "amazon";
console.log(person);

//update the property value

person.designation = "full stack developer";
console.log(person);

//delete a property===delete is an operator
delete person.company;
