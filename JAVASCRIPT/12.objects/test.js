function slice(a, b, c) {
  let result = [];
  if (c === undefined || c > a.length) c = a.length;
  for (let i = b; i < c; ++i) result.push(a[i]);
  return result;
}

console.log(slice([1, 2, 3, 4, 5], 2, 10));
console.log(slice([1, 2, 3, 4, 5], 2));

console.log(slice([1, 2, 3, 4, 5], 2, 4));
console.log(slice([1, 2, 3, 4, 5], 0, 2));
