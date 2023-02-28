"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(ammount) {
        if (ammount <= 0)
            throw new Error("invalid ammount");
        this.balance += ammount;
    }
}
let account = new Account(1, "Em", 0);
//# sourceMappingURL=oop.js.map