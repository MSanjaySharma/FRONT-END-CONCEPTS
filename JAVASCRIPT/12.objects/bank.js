const bank = {
  accountNumber: 123,
  name: "jane",
  balance: 5000,
  transaction(amount, code) {
    if (code) this.balance += amount;
    else
      this.balance < amount
        ? console.log(
            `The withdrawl amount INR ${amount} is insufficient for the specified withdrawl\n\n`
          )
        : (this.balance -= amount);
    return this.display();
  },
  display() {
    return `account Number:::::${this.accountNumber} \ncustomer name::::${this.name} \nbalance::::::${this.balance}\n\n`;
  },
};

console.log(bank.display());
console.log(bank.transaction(5000, 1));
console.log(bank.transaction(5000, 0));
console.log(bank.transaction(7000, 0));
