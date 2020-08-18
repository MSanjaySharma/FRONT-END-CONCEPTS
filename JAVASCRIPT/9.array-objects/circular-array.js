let string = "abc";

function circularPrint(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let asciiCode = str[i].charCodeAt();
    //a b c d e f g h i j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
    //1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
    //97                                                                 122
    let changedAsciiCode = ((asciiCode - 96 + 16) % 26) + 96;
    result += String.fromCharCode(changedAsciiCode);
  }
  return result;
}

console.log(circularPrint(string));
