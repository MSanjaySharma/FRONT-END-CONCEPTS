var person = {
    name : "arjun",
    city : "bangalore",
}

var name = person.name , city = person.city;
console.log(name, city);

//es6 object destructuring

const product = {
    id:1,
    rating:4.5,
    pName:"marker",
    price:15
}

const { id, pName} = product; //object destructuring syntax;

console.log(id, pName);