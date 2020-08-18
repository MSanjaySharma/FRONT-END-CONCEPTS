var name = "arjun" , city = "bangalore" ;

//es 5

var person = {
    name : name,
    city:city
}

console.log(person);

//es6 --concise properties
const students = {
    name,
    city,
    //jam, //will throw error ::access before initialisation;
}

//let jam = 'yes';

console.log(students);