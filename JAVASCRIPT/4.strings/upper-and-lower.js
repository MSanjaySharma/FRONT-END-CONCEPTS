function upperToLowerViceVersa(str) {
  let string = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) string = string + str[i].toUpperCase();
    else if (str[i] === str[i].toUpperCase())
      string = string + str[i].toLowerCase();
  }
  return string;
}
let str = "BaNgAlOrE";
console.log(upperToLowerViceVersa(str));
