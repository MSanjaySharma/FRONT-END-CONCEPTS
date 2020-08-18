function highestRank(str) {
  strArr = str.split(" ");
  rankArr = str.split(" ").map((ele) => {
    let sum = 0;
    for (let i = 0; i < ele.length; i++) sum += ele[i].charCodeAt();
    return sum;
  });

  let rank = 0;
  for (let i = 0; i < rankArr.length; i++) {
    if (rank < rankArr[i]) rank = rankArr[i];
  }
  return strArr[rankArr.indexOf(rank)];
}

console.log(highestRank("iszzz a way"));
console.log(highestRank("is a way"));
