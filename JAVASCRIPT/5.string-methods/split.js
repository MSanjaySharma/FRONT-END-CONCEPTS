const tags = "js, react, node, express";
const result = tags.split(", ");
console.log(result); //Array(4) ["js", "react", "node", "express"]

const result2 = tags.split("-"); //it didnt find any seperator so returns the entire string as a array at index 0
console.log(result2); //Array(1) ["js, react, node, express"]

const fruits = "watermelon.lemon.appple.orange";
const result3 = fruits.split(".");
console.log(result3); //Array(4) ["watermelon", "lemon", "appple", "orange"]

const emails = "1@gmail.com, 2@@gmail.com, 3@gmail.com";
const result4 = emails.split(", ");
console.log(result4); //Array(3) ["1@gmail.com", "2@@gmail.com", "3@gmail.com"]
