"use strict";
class Acount {
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
//# sourceMappingURL=oop.js.map