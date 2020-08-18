const player = {
  firstName: "sachin",
  lastName: "tendulkar",
  fullName: function () {
    //arrow function dont work here
    return `${this.firstName} ${this.lastName}`;
  },
};

const student = {
  name: "mohan",
  greet: function (str) {
    return `Hi  ${str} my name is ${this.name} `;
  },
};
console.log(player.fullName());
console.log(student.greet("mahi"));
console.log(student.greet("sujith"));
