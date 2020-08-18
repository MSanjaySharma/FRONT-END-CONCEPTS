function dynamicObjects(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (result.hasOwnProperty(str[i])) result[str[i]]++;
    else result[str[i]] = 1;
  }
  return result;
}

console.log(dynamicObjects("defdefabc"));
