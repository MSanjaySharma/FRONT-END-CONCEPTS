function phophoneUsingSubstr(phonenumber) {
  //using string literals from es6
  //console.log(`(${phonenumber.substr(0,3)}) ${phonenumber.substr(3,3)}-${phonenumber.substr(6)}`);

  //using string concat from es5
  let result =
    "(" +
    phonenumber.substr(0, 3) +
    ") " +
    phonenumber.substr(3, 3) +
    "-" +
    phonenumber.substr(6);
  return result;
}

let phonenumber = "1234567890";
console.log(phophoneUsingSubstr(phonenumber));
