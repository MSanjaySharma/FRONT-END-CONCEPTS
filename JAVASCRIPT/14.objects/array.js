const numbers = [1, 2, 3, 4, 5];

numbers.push(6);
numbers.unshift(10);

const fruits = ["apple", "mango", "kiwi", "banana"];

//splice()--meant for removing element from the given array---returns the deleted ARRAY
//add element to a given index

console.log(fruits.splice(1, 0, "strawberry"));
console.log(fruits.splice(1, 0, "gru", "la"));
console.log(fruits);

console.log(numbers.splice(3, 2)); //array of removed elements is returned;
console.log(numbers);
