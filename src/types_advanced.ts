// union types
let weight: number | string;

// intersection type
type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textbox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// literal type
type Quantity = 50 | 100;
let quantity: Quantity = 100;

// nullable types
function greet(name:string|null|undefined) {
  if (name)
    console.log(name.toUpperCase);
  else
    console.log("Hola!");
}

// optional chaining
type Customer = {
  birthday: Date
}

function getCustomer(id:number): Customer | null {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional elemenet access operator
// customer?.[0]
// let log: any = (message: string) => console.log(message);
let log: any = null;
log?.('a')