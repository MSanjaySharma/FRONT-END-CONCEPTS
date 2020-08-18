const person = {
  name: "arjun",
  city: "bangalore",
  designation: "Sr software engineer",
};

function countKeys(person) {
  let count = 0;
  for (const key in person) {
    count++;
  }
  return count;
}

console.log(countKeys(person));
