function reverseStr(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) result = str[i] + result;
  return result;
}

/* 
THERES NO BUILTIN METHOD IN JS FOR REVERSE OF STRING

BUT THERES A REVERSE ON A ARRAY 

console.log(name.split("").reverse().join(""));

*/
