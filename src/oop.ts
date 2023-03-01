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
    
    getTax(): number {
        let tax = this.calculateTax();
        return tax;
    }

    getBalance(): number {
        return this._balance
    }

    private calculateTax(): number {
        return this._balance * .8;
    }
}

let account = new Account(1, "Em", 0); 
console.log(account instanceof Account);

// Access control keywords
// Access modifiers: public, private, protected
console.log(account.getBalance());