var person = {
    name : "arjun",
    details : function() {
        return ( ` Hi , name is ${this.name}`);
    }
}

console.log(person.details());
//es6 concise method
const student = {
    name : "rakesh",
    details () {
        return ( ` Hi , name is ${this.name}`);
        
    }
}

console.log(student.details());