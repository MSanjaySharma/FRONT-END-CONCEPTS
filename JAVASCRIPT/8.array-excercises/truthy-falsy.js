const values = [
  1,
  true,
  "abc",
  0,
  -1,
  false,
  "",
  [],
  ["a"],
  {},
  undefined,
  NaN,
  null,
];

/* 
falsy===0    ""         false       undefined           NaN     null
truthy===  1        -1      "abc"           true        []      {}  
*/

function filterValues(values) {
  return values.filter((ele) => ele);
}

function filterValuesFalse(values) {
  return values.filter((ele) => !ele);
}

console.log(filterValues(values)); //truthy values //Array(7) [1, true, "abc", -1, Array(0), Array(1), Object]
console.log(filterValuesFalse(values)); //Array(6) [0, false, "", undefined, NaN, null]
