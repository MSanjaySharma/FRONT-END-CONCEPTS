const person = {
  name: "arjun",
  city: "bangalore",
  designation: "Sr software engineer",
  key: "some value",
};

const prop = "name";
//if a property is assigned to a variable we cant use dot operator to access that particular property
console.log(person.prop); //undefined

console.log(person[prop]);

//how to loop===for in loop

for (const key in person) {
  console.log(key, person[key]); //cant use person.key ie the dot opearator
}

for (const k in person) {
  console.log(typeof k);
  console.log(k, person[k]); //key is not a keyword and its just a variable
}

for (const k in person) {
  console.log(typeof k);
  console.log(k, person["key"]); //now it will look for a key called as "key" in the object when person["key"]
}
