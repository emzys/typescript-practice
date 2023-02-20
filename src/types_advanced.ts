// TYPE ALIASSESS
// type Employee = {
//   readonly id: number,
//   name: string,
//   retire: (date: Date) => void
// }

// let employee: Employee = {
//   id: 1,
//   name: "Em",
//   retire: (date: Date) => {console.log(date)}
// }

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
console.log(customer?.birthday?.getFullYear()); // Optional property access operator

// Optional elemenet access operator
// customer?.[0]
// let log: any = (message: string) => console.log(message);
let log: any = null;
log?.('a')

// Nullish Coaelscing Operator: ??
let speed: number | null = null;
let ride = {
  // Falsy (undefined, null, '', false, 0)
  speed: speed ?? 30
}

// Type Assertions 
// eg could be HTMLElement, HTMLInputElement -> different associated methods to tap into
// no type conversion actually happening, we need to know what type the element actually is or our code will break
// let phone = document.getElementById('phone') as HTMLInputElement;
let phone = <HTMLInputElement> document.getElementById('phone');
phone.value;

// The unknown type
function render(document: unknown) {
  // Narrowing
  if (typeof document === 'string') {
    document.toLocaleUpperCase();
  }
  // if (document instanceof WordDocument) {}
  // document.move();
  // document.fly();
  // document.whatever();
}
