function aeiou(str) {
  let stack = [],
    result = "",
    count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    )
      stack.push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      result += stack[stack.length - count - 1];
      count++;
    } else result += str[i];
  }
  return result;
}
let str = "bangalore";
console.log("original === %s", str); //placeholders do work in javascript %s %d %f implicit conversions also are taking place
console.log("modified === %s", aeiou(str));
