const numbers = [10, 15, 20, 25, 30];

function filterNumbers(numbers) {
  const evens = [],
    odds = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) evens.push(numbers[i]);
    else odds.push(numbers[i]);
  }
  return [evens, odds];
}

//in this case complexity of for is less than filter because here it only gets passed once but in filter multiple times the same array is passed

console.log(filterNumbers(numbers)); //[[10,20,30]    [15,25]]

function filterNumbersFilter(numbers) {
  const evens = numbers.filter((vart) => vart % 2 === 0);
  const odds = numbers.filter((vart) => vart % 2 !== 0);
  return [evens, odds];
}

console.log(filterNumbers(numbers)[1]);
