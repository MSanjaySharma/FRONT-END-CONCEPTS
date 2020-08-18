const passswords = [
  "Password123",
  "instantaccess",
  "qwerty",
  "range",
  "gopro123",
  "harryp!tter",
];

function authenticate(passwords, str) {
  for (let i = 0; i < passswords.length; i++) {
    if (passwords[i] === str) {
      return "authenticated";
    }
  }
  return "not authenticated";
}

//console.log(authenticate(password,"Password123"));            //"authenticated"
console.log(authenticate(passwords, "notknown")); //"not authenticated"

function authenticateInClass(passwords, str) {
  let result = "not authenticated";
  for (let i = 0; i < passswords.length; i++) {
    if (passwords[i] === str) {
      result = "authenticated";
      break;
    }
  }
  return result;
}

console.log(authenticate(password, "Password123")); //"authenticated"
console.log(authenticate(passwords, "lostpassword")); //"not authenticated"

function authenticateFlagApproach(passwords, str) {
  let result = "not authenticated";
  let flag = 0;
  for (let i = 0; i < passswords.length; i++) {
    if (passwords[i] === str) {
      flag = 1;
      break;
    }
  }
  if (flag === 0) return result;
  else return "authenticated";
}

console.log(authenticate(password, "Password123")); //"authenticated"
console.log(authenticate(passwords, "lostpassword")); //"not authenticated"
console.log(authenticate(passswords, "qwerty")); //"authenticated"
