const user = {
  email: "a@gmail.com",
  password: "secret123",
  allowAccess: true,
  confirmPassword(pass) {
    if (pass !== this.password) return "password confirmation does not exist";
    return true;
  },
  disableAcces() {
    this.allowAccess = false;
    return this.allowAccess;
  },
  enableAcces() {
    this.allowAccess = true;
    return this.allowAccess;
  },
  checkAccess() {
    return this.allowAccess;
  },
};

console.log(user.confirmPassword("secret")); //password confirmation does not exist
console.log(user.confirmPassword("securepass")); //true

console.log(user.checkAccess()); //true
console.log(user.disableAcces()); //false
console.log(user.checkAccess()); //false
console.log(user.enableAcces()); //true
console.log(user.checkAccess()); //true
