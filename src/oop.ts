class Account {
    readonly id: number;
    owner: string;
    balance: number;
    nichckname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(ammount: number): void {
        if (ammount <= 0)
            throw new Error("invalid ammount");
        this.balance += ammount;
    }
}

let account = new Account(1, "Em", 0); 
console.log(account instanceof Account);