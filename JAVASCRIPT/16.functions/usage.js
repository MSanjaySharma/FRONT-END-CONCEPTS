const numbers = [10, 15, 20, 25, 30];

//filter -- get all numbers which are even
/* 
const result = numbers.filter(function (ele){
    return(ele%2===0);
})

console.log(result); */

const result = numbers.filter((ele) => {
  return ele % 2 === 0;
});

console.log(result);

//option 1 -if only one argument is passed to function then () is optional
const result1 = numbers.filter((ele) => {
  return ele % 2 === 0;
});

//optional 2 - if only one statement is to be executed then {} and return keyword is optional
const result2 = numbers.filter((ele) => ele % 2 === 0); //same line is neccesary
