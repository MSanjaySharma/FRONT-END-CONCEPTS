function mexicanWave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let string = "";
    if (str[i] !== " ") {
      for (let j = 0; j < str.length; j++) {
        if (i === j) string += str[j].toUpperCase();
        if (i !== j) string += str[j];
      }
      result.push(string);
    }
  }
  return result;
}
console.log(mexicanWave(" gap "));

function mexicanWaveReplace(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let string = str;
    result.push(string.replace(str[i], str[i].toUpperCase()));
  }
  return result;
}

console.log(mexicanWaveReplace("hello"));
