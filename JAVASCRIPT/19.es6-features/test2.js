let username = "BadUs3rnam3";
let userCheck = /[a-z]+[0-9]+$/i;
let result = userCheck.test(username);

console.log(result);
