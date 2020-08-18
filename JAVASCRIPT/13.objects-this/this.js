const person = {
    id:1,
    name:"mohan",
    details:function() {        //inside method this refers to the current object
        return(this);
    },
}

console.log(person.details());      //Object {id: 1, name: "mohan", details: }

function printThis() {
    return(this);                   //inside a function declared in global space this refers to the global object
}

console.log(printThis());           //prints the global object;

console.log(this);                  //prints an empty object;{}
