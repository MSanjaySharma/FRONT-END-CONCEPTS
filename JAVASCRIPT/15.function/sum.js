function sumTotal(prices) {
  let total = 0;
  prices.forEach((n) => (total += n));
  return total;
}
const userTotal1 = [10, 20, 30, 40];
console.log(sumTotal(userTotal1));
