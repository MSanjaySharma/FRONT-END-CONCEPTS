const values = [10, "abc", "range", "test", 15];

function filterStrings(values) {
  return values.filter((ele) => typeof ele === "string");
}

const value = ["A", "abc", "AbC", "ABC"];

function countCaps(value) {
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value[i].length; j++)
      if (value[i][j].match(/[A-Z]/)) count++;
  }
  return count;
}
console.log(filterStrings(values)); //Array(3) ["abc", "range", "test"]
console.log(countCaps(value));
