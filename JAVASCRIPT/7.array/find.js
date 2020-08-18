const prices = [10, 15, 30, 35, 40];

//find a value based on a condition>25

// c style
function findElement(prices, n) {
  let result;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > n) {
      result = prices[i];
      break;
    }
  }
  return result;
}

console.log(findElement(prices, 25)); //30
console.log(findElement(prices, 255)); //undefined

//js style

function findElementJs(prices, n) {
  const result = prices.find((ele) => {
    return ele > n;
  });
  return result;
}

console.log(findElementJs(prices, 25)); //30
console.log(findElementJs(prices, 255)); //undefined

//es6 arrow function
console.log(prices.find((ele) => ele > 25));

//function which returns true or false is predicate functions

//find()==when the condition is true for the first time the find() will return that element in the array at the index
//if it doesnt evlauate the predicate to true then the find() returns undefined

const result2 = prices.find((ele) => ele % 2 == 0);
console.log(result2);
