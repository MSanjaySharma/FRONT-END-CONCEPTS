//c++ , java , python

//create an object ---> first create a class ===class is a blueprint for an object ---it contains all the methods and properties for an object
//class is a user defined data type



//es 5 - constructor function
//no way of creating a class here
//constructor function were used to provide class like featurees to javascript
//name of constructor function should be caps
//it contains properties - firstName , lastName
//methods -- fulName
function Person(fName,lName) {
        //properties
        this.firstName = fName;
        this.lastName = lName;
        //methods
        this.fullName = function () {
            return(this.firstName + this.lastName);
        }
}

const p1 = new Person("sachin ", "tendulkar");

const p2 = new Person("sanjay ","sharma");

const p3 = new function sanjay(){
    this.name="we are here";
    console.log("created a new instance");
    return(console.log("sanjay1"));

    //only this stuff is pushed inside an object rest is just executed as it is
}

console.log(p3);

//new keyword always returns a object


//es6 --class