//forEach -- to access elements with an array

const fruits = ["apple", "mango", "kiwi"];

/* for loop
initialize; condition;updation  
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
        } 
*/

//forEach---passes the function on all elements once on each element in the array; cant use break in forEach

/* forEach vs find()===forEach just calls function on each element on a array but doesnt return any value to call place

but find(predicate) when called calles the function on all element of the array but is expected to return the value when it first finds the predicate
*/

//for loop will be faster than the forEach //sligthly faster
fruits.forEach((ele) => console.log(ele));

const san = [["apple", "sanjay"], "kiwi", 2];
san.forEach((ele) => console.log(ele[1])); //"sanjay" "i" undefined

//call back function ===passed as an argument
