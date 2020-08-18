/* 

const numbers = [10,20,30,40]
numbers.forEach(function(ele){
    console.log(ele)
})

*/

/* 
const numbers = [10, 20, 30, 40];

const print = (ele) => {
  console.log(ele);
};

numbers.forEach(print); */

const numbers = [10, 20, 30, 40];

Array.prototype.customForEach = function (cb) {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

numbers.customForEach(function (ele, i, arr) {
  console.log(ele, i, arr);
});

Array.prototype.customMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

const print = (ele) => {
  return ele + 2;
};

numbers.customMap(print);
