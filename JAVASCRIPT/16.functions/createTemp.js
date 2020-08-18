function createTemp(m, index) {
  let temp = [...m];
  temp.splice(index, 1);
  for (let i = 0; i < temp.length; i++) {
    temp[i].splice(index, 1);
  }
  return temp;
}

console.log(
  createTemp(
    [
      ["01", "02", "03"],
      ["10", "11", "12"],
      ["20", "21", "22"],
    ],
    0
  )
);
