let xnumbers = [10, 20];
//1st approach---slice;
let ynumberes = xnumbers.slice(0);

//2nd approach---concat
let znumbers = [].concat(xnumbers);

console.log(xnumbers, ynumberes);

xnumbers = push(30);

console.log(xnumbers, ynumberes); //[10,20,30] [10,20]
