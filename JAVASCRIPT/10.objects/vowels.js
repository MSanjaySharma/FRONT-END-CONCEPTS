const user = {
  name: "bangalore",
};

function vowels(a) {
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

function vowelsObjectjs(user) {
  let result = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 0; i < user.name.toString().length; i++) {
    if (
      user.name[i] === "a" ||
      user.name[i] === "e" ||
      user.name[i] === "i" ||
      user.name[i] === "o" ||
      user["name"][i] === "u"
    )
      result[user["name"][i]]++;
  }
  return result;
}
console.log(vowelsObjectjs(user));
console.log(vowels("bangalore"));
//console.log(vowelsObject("bangalore"));
