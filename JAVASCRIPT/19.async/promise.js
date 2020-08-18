//es6 feature - handling asynchronous js

/* 
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. 

//asynchronous operation
front end
    network operations
    axios.get(url)
        .then(function(){})
        .catch(function(err){})

backend
    connection db
    interaction with db 

A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation completed successfully.
    rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error).

Promise.prototype.then()
    Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled (i.e. if the relevant handler onFulfilled or onRejected is not a function).
pass a function(cb) as an argument, the response value is make available inside the function

Promise.prototype.catch()
    Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.
pass a function (cb) as an argument, the value(error) is made available inside function


*/

function determineNumber(number) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (number % 2 == 0) {
        resolve(number);
      } else {
        reject(number);
      }
    });
  });
}

const successFunc = (ele) => {
  console.log("even", ele);
};

const errorFunc = (ele) => {
  console.log("odd", ele);
};

determineNumber(10).then(successFunc).catch(errorFunc);
