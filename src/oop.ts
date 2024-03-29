class Account {
    nickname?: string;

    constructor(
        public readonly id: number, 
        public owner: string, 
        private _balance: number) {
    }

    deposit(ammount: number): void {
        if (ammount <= 0)
            throw new Error("invalid ammount");
        this._balance += ammount;
    }
    
    get tax(): number {
        let tax = this.calculateTax();
        return tax;
    }

    get balance(): number {
        return this._balance
    }
    
    // set balance(value: number) {
    //     if (value <= 0)
    //         throw new Error("invalid value");
    //     this._balance = value
    // }


    private calculateTax(): number {
        return this._balance * .8;
    }
}

let account = new Account(1, "Em", 0); 
console.log(account instanceof Account);

// Access control keywords
// Access modifiers: public, private, protected


// getters and setters
// account.balance = 1;
console.log(account.balance);


// Index signatures
class SeatAssigment {
    [seatNumber: string]: string;
}

let seats = new SeatAssigment();
seats.A1 = "Em";
seats.A2 = "Z";


// Static members
class Ride {
    private static _activeRides: number = 0;

    start() {Ride._activeRides++;}
    stop() {Ride._activeRides--;}

    static get activeRides() {
        return Ride._activeRides;
    }
}

let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);


// Inheritance: 
// in constructor method add super(params), properties without access keyword, pass them in super parameters
class Person {
    constructor (public firstName: string, public lastName: string) {}

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}


// Method overriding
// in tsconfig: "noImplicitOverride": true
class Teacher extends Person {
    override get fullName() {
        return `Professor ${super.fullName}`
    }
}


// Polimorphism
// Open closed principle - classes should be open for extension and closed for modification
function printNames(people: Person[]) {
    for (let person of people) 
        console.log(person.fullName)
}

printNames([
    new Student(1,'Nana','Banana'),
    new Teacher('Jola', 'Granola')
])


// Private vs Protected Members
// protected is like private except that it is inherited


// Abstract classes and methods
abstract class Shape {
    constructor(public color: string) {}

    abstract render() :void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color)
    }

    override render(): void {
        console.log('Rendering a circle');
    }
}


// Interfaces 

// abstract class Calendar {
//     constructor(public name: string) {}

//     abstract addEvent(): void;
//     abstract removeEvent(): void;
// }

interface Calendar {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalendar extends Calendar {
    sync(): void;
}

//shortcut: CMD&. , then select `implement interface`
class GoogleCalendar implements Calendar {
    constructor (public name: string) {}

    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    } // shortcut: CMD&.

}
