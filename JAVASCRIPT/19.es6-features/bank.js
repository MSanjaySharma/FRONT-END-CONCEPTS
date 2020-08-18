class Customer {
  constructor(acc, nam, bal) {
    this.accountNumber = acc;
    this.name = nam;
    this.balance = bal;
  }

  transaction(amount, code) {
    if (code) this.balance += amount;
    else
      this.balance < amount
        ? console.log(
            `The withdrawl amount INR ${amount} is insufficient for the specified withdrawl\n\n`
          )
        : (this.balance -= amount);
    return this.display();
  }
  display() {
    return `account Number:::::${this.accountNumber} \ncustomer name::::${this.name} \nbalance::::::${this.balance}\n\n`;
  }
}

const c1 = new Customer("SBI123", "EMP1", 1500);
const c2 = new Customer("SBI145", "EMP2", 3100);

console.log(c1.display());
console.log(c1.transaction(5000, 1));
console.log(c1.transaction(5000, 0));
console.log(c1.transaction(7000, 0));

console.log(c2.display());
console.log(c2.transaction(5000, 1));
console.log(c2.transaction(5000, 0));
console.log(c2.transaction(7000, 0));
