const count = {
  value: 0,
  getValue() {
    return this.value;
  },
  up: function () {
    return ++this.value;
  },
  down() {
    return --this.value;
  },
  reset() {
    this.value = 0;
    return this.value;
  },
  incrementBy(num) {
    this.value += num;
    return this.value;
  },
  decrementBY(num) {
    this.value -= num;
    return this.getValue();
  },
};
console.log(count.getValue()); //0
console.log(count.up()); //1
console.log(count.up()); //2
console.log(count.value); //2
console.log(count.down()); //1
console.log(count.reset()); //0
console.log(count.value); //0
console.log(count.incrementBy(5)); //5
console.log(count.incrementBy(9)); //14
console.log(count.decrementBY(7)); //7
