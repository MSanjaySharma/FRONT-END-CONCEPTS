//counter
//methods - getCount()
class Counter {
  constructor() {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }

  up() {
    return this.count++;
  }

  down() {
    return this.count--;
  }

  reset() {
    this.count = 0;
    return this.getCount();
  }

  incrementBy(num) {
    this.count += num;
    return this.getCount();
  }

  decrementBy(num) {
    this.count -= num;
    return this.getCount();
  }
}

const c1 = new Counter();

console.log(c1.getCount()); //0
console.log(c1.up()); //1
console.log(c1.down()); //0
console.log(c1.incrementBy(5)); //5
console.log(c1.decrementBy(4)); //1
