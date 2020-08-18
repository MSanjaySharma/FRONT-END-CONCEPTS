const developer = {
  id: 1,
  name: "mani",
  skills: ["js", "react"],
  details: function () {
    // this  - current obj
    this.skills.forEach((skill) => {
      console.log(`${this.name} knows ${skill}`);
    });
  },
};

developer.details();

// inside an arrow function, the value of this, will always be the value of this outside the function, because inside an arrow function, this doesnt have a value of this own

console.log(this); // {}

// const printEs5 = function(){
//     console.log(this) // global object
// }
// printEs5()

const printEs6 = () => {
  console.log(this); // {}
};
printEs6();
