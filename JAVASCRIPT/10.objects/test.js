const user = {
  name: "bangalore",
  count: 1,
};

console.log(user.name.length);
console.log(user["name"].length);
console.log(typeof user["name"].length);
console.log(typeof user["name"]);

function testa(user) {
  for (let i = 0; i < user.name.length; i++) {
    console.log("sanjay");
  }
}
console.log(testa(user));

function updateCount(user) {
  user.count++;
}
updateCount(user);
console.log(user.count);
