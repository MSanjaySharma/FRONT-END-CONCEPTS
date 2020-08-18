function phone(phonenumber) {
  /*  using string literals from es6
        console.log(`(${phonenumber.slice(0,3)}) ${phonenumber.slice(3,6)}-${phonenumber.slice(7)}`); */

  //using string concat from es5
  let result =
    "(" +
    phonenumber.slice(0, 3) +
    ") " +
    phonenumber.slice(3, 6) +
    "-" +
    phonenumber.slice(7);
  return result;
}

let phonenumber = "1234567890";
console.log(phone(phonenumber));
