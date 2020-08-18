const person = {
  id: 1,
  name: "arjum",
  city: "bangalore",
};

function findKeys(person) {
  result = [];
  for (const key in person) {
    result.push(key);
  }
  return result;
}

console.log(findKeys(person)); //["id", "name", "city"]
