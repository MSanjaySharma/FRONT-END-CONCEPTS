function hashTags(str) {
  let result = "#";
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    result =
      result + words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    //result=result + individualElement[0].toUpperCase() + individualElement.slice(1).toLowerCase();
  }
  return result;
}
console.log(hashTags("javascript is awesome")); //#JavascriptIsAwesome
console.log(hashTags("make in india")); //#MakeInIndia

/* 


typeof words //"object"
words.length//3;
words[0] make
words[1]    in
words[2]    india   
loop ==3

i=0
words[i].chatAt(0).toUpperCase()


*/
