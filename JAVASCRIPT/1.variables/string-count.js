//jess from facebook unit testing
function strCount(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) if (str[i] == char) count++; //count+=count or count=count+1;
  return count;
}
//electron js
console.log(strCount("hello", "o")); //1
console.log(strCount("hello", "l")); //2

//var is used in legacy projects
