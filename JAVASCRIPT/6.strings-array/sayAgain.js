function sayAgain(str, count) {
  let result = "";
  while (count--) {
    result += str;
  }
  return result;
}

console.log(sayAgain("hello", 3)); //"hellohellohello"
