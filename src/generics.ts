// Generic classes

class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

// let pair = new KeyValuePair<number, string>(1,"hi");
// let pair = new KeyValuePair<string, string>("1","hi");
let pair = new KeyValuePair("1","hi"); // compiler will infer the type