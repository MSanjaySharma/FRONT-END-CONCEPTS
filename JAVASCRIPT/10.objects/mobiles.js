/* const mobiles=["9035965778","9035653232","8865509883","9945506245","9124207883","9206995872"];

console.log(mobiles[Math.floor(Math.random()*mobiles.length)]); */

//object ===key values pair
//property :value

//const mobiles=[["abc","9035954778"],["def","90785651232"]]

//python has dictionary and we call it as object in javascript

const mobiles = {
  abc: "9035348778",
  def: "9085651252",
  ghi: "8884598873",
};

const product = {
  id: 1,
  name: "marker",
  price: 15,
  rating: 4.5,
  seller: "camlin",
};

//property will always be string

console.log(product.id); //if using dot operator we dont need to use any kind of string
console.log(product["id"]); //if using [] to access the elements of the object we need to pass it as a string
