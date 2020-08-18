function countVowels(a) {
  let result = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 0; i < a.length; i++) {
    if (
      a[i] === "a" ||
      a[i] === "e" ||
      a[i] === "i" ||
      a[i] === "o" ||
      a[i] === "u"
    )
      result[a[i]]++;
  }
  return result;
}

function countVowelsHasOwn(a) {
  let result = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 0; i < a.length; i++) {
    if (result.hasOwnProperty(a[i]));
    result[a[i]]++;
  }
  return result;
}
