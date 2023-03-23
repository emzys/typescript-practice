// Generic classes

class KeyValuePair<T> {
    constructor(public key: T, public value: string) {}
}

// let pair = new KeyValuePair<number>(1,"hi");
let pair = new KeyValuePair<string>("1","hi");