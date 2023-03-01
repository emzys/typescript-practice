"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(ammount) {
        if (ammount <= 0)
            throw new Error("invalid ammount");
        this._balance += ammount;
    }
    getTax() {
        let tax = this.calculateTax();
        return tax;
    }
    getBalance() {
        return this._balance;
    }
    calculateTax() {
        return this._balance * .8;
    }
}
let account = new Account(1, "Em", 0);
console.log(account instanceof Account);
console.log(account.getBalance());
//# sourceMappingURL=oop.js.map