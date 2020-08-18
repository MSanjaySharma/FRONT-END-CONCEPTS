//promise function
function addAsync(x, y) {
  return new Promise((resolve, reject) => {
    if (x === undefined || y === undefined) {
      reject(new Error("Must provide two parameters"));
    } else {
      resolve(x + y);
    }
  });
}

//consumer function
async function main() {
  try {
    const result = await addAsync(12, 3);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

main();
