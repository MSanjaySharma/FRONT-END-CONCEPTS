//es6 - class keyword
//properties - if , name , price
//methods - details

//frontend-- react (16+) -> 2015

class Product {
  //assigning initial values to our properties is done inside constructor

  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  details() {
    return this.id + " " + this.name + " " + this.price;
  }
}

const p1 = new Product(1, "marker", 15);

console.log(p1);
