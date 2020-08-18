function chopStr(str, limit) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % limit === 0) result += " ";
    result = result + str[i];
  }
  return result.slice(1).split(" ");
}

console.log(chopStr("resource", 2)); //Array(4) ["re", "so", "ur", "ce"]
console.log(chopStr("resource", 3)); //Array(3) ["res", "our", "ce"]
