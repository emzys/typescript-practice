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
class SeatAssigment {
}
let seats = new SeatAssigment();
seats.A1 = "Em";
seats.A2 = "Z";
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
}
class Teacher extends Person {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
//# sourceMappingURL=oop.js.map