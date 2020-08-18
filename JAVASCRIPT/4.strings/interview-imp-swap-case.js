function copyStr(str) {
  let result = "";
  for (const i of str) //for of loop implementation
    result = result + i;

  return result;
}

function copyStrforloop(str) {
  let result = "";
  for (
    let i = 0;
    i < str.length;
    i++ //for loop implementation
  )
    result = result + str[i];
  return result;
}

function copyStrForeach(str) {
  let a = [];
  for (const i of str) a.push(i);
  let result = "";
  a.forEach(function (i) {
    //for each loop implemenatation
    result = result + i;
  });

  return result;
}

console.log(copyStr("example"));
console.log(copyStrForeach("example"));
console.log(copyStrforloop("example"));
