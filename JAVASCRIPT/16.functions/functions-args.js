function add() {
  //pass variable numbers of arguments
  //method overloading---methods with same name but different arguments
  //inside every function theres a access to a special keyword called arguments === objects
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(`arg ${i} ::: ${arguments[i]}`);
  }
  //keyword , special object , contains all the arguments being passed to the function key :value , key is the index and value is argument value
}

console.log(add(10));
console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(arguments);
console.log(undefined == null); //true

//Math.min(10,   n number of arguments can be passed);

const person = {
  name: "arjun",
  city: "mysore",
};

//arguments objects has a length property;

console.log(arguments.length); //5

//since arguments has a length property we  can use the for loop to loop over the individual properties;  i.e. the arguments that we pass to it;
