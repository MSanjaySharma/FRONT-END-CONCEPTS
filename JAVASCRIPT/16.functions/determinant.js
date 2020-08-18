function determinant(m) {
  let det = 0,
    currDimension = m.length;
  let sign = 1;
  if (currDimension === 1) return m[0][0];
  for (let i = 0; i < m.length; i++) {
    sign = i % 2 === 0 ? 1 : -1;
    det = det + sign * m[0][i] * determinant(minor(m, i));
  }

  function minor(m, index) {
    let temp = [];
    for (let i = 0; i < m.length; i++) temp[i] = m[i].slice(0);
    temp.splice(0, 1);
    for (let i = 0; i < temp.length; i++) {
      temp[i].splice(index, 1);
    }
    return temp;
  }
  return det;
}
m1 = [
  [1, 3],
  [2, 5],
];
m2 = [
  [2, 5, 3],
  [1, -2, -1],
  [1, 3, 4],
];

console.log(determinant([[1]])); //1
console.log(determinant(m1)); //-1
console.log(determinant(m2)); //-20
