//es5 - constructor function
//properties - if , name , price
//methods - details

//backend -- node +  express

function Product(id, name, price) {
  //asssigning initial values to our properties is done inside function
  this.id = id;
  this.name = name;
  this.price = price;

  this.details = function () {
    return this.id + " " + this.name + " " + this.price;
  };
}

const p1 = new Product(1, "marker", 15);

console.log(p1);
