const prices = [10, 15, 30, 35, 40];
//find all elemetns greater than 25

//c style
function filterElements(prices, n) {
  const result = [];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > n) {
      result.push(prices[i]);
    }
  }
  return result;
}

console.log(filterElements(prices, 25)); //Array(3) [30, 35, 40]
console.log(filterElements(prices, 250)); //[]

//js style
function filterElementsJs(prices, n) {
  const result = prices.filter((ele) => ele > n);
  return result;
}

//filter()  method always return array======it takes predicate function as its argument
console.log(filterElementsJs(prices, 25)); //Array(3) [30, 35, 40]
console.log(filterElementsJs(prices, 250)); //[]

//facebook uses pagination for infinte scroll
