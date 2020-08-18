//brendon eich-14 days
//es5
//declaration of variables  - var = hoisted
console.log(name);
var name = "dct";
console.log(name);

//es6
//declare = let or const - do not get hoisted
//reference error===variable is not found..............city is not defined
//console.log(city)
let city = "BANGALORE";
console.log(city); //'bangalore'
