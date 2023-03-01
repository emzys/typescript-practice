"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(ammount) {
        if (ammount <= 0)
            throw new Error("invalid ammount");
        this._balance += ammount;
    }
    get tax() {
        let tax = this.calculateTax();
        return tax;
    }
    get balance() {
        return this._balance;
    }
    calculateTax() {
        return this._balance * .8;
    }
}
let account = new Account(1, "Em", 0);
console.log(account instanceof Account);
console.log(account.balance);
//# sourceMappingURL=oop.js.map