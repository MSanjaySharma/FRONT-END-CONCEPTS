function countVowels(str) {
  let result = 0;
  const vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    /*  
            MY LONGER CODE
       //if(str[i].includes("a")||str[i].includes("e")||str[i].includes("i")||str[i].includes("o")||str[i].includes("u")) */

    //CORRECT APPROACH
    if (vowels.includes(str[i])) result++;
  }
  return result;
}

function countVowels2(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    //MY LONG APPROACH NOT WORTHWHILE THE EFFORT countVowels1 is much crisper shorter code
    if (
      str[i].includes("a") ||
      str[i].includes("e") ||
      str[i].includes("i") ||
      str[i].includes("o") ||
      str[i].includes("u")
    )
      result++;
  }
  return result;
}

console.log(countVowels("academy"));
console.log(countVowels2("academy"));
