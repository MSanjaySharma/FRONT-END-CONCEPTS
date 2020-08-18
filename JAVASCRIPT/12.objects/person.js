const person1 = {
  id: "1",
  name: "arjun",
  details: function () {
    return `${this.id}---${this.name}`;
  },
};

const student1 = {
  id: "2",
  name: "ursa",
  details: function () {
    return `${this.id}---${this.name}`;
  },
};

console.log(person1.details());
console.log(student1.details());
