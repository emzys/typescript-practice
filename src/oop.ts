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
