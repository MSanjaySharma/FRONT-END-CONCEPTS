function buildObject(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i][0]] = arr[i][1];
  }
  return result;
}

//build two dimensional array from object
function buildArray(obj) {
  let result = [];
  for (const key in obj) {
    let ele = [];
    ele.push(key, obj[key]);
    result.push(ele);
  }
  return result;
}

console.log(buildArray({ white: "peace", blue: "ocean" }));

console.log(
  buildObject([
    ["white", "peace"],
    ["blue", "ocean"],
  ])
);
