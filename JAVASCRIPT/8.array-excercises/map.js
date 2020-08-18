const numbers = [10, 15, 20, 25];

//c style
function alterElements(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] + 2);
  }
  return result;
}

console.log(alterElements(numbers)); //Array(4) [12, 17, 22, 27]
console.log(numbers); //Array(4) [10, 15, 20, 25]

//js style
function alterElementsJs(numbers) {
  const result = numbers.map(numbers.map((variable) => variable + 2));
  return result;
}

//es6 arrow
console.log(numbers.map((variable) => variable + 2));
