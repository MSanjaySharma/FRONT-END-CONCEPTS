const values = [10, 20, 30, 40, 50];

function randomEle(values) {
  return values[Math.floor(Math.random() * values.length)];
}
console.log(randomEle(values));
