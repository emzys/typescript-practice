// NOTES

// tsc file_name.ts
// tsc -init (=> tsconfig.json)
// tsc => to compile

// //debugging practice
// let age: number = 20;
// if (age < 50) 
//     age += 10;

// //types practice
// normal JS types + any, unknown, never, enum, tuple

// type any 
// not recommended nbut if needed, in tsconfig file:
// "noImplicitAny": false,

// arrays
// let numbers: number[] = [1,2,3];

// touple
// let user: [number, string] = [1,"Emilia"]

//enum
//pascal convention
// enum Size { Small = 's', Medium = 'm', Large = 'l' }
// enum Size { Small = 1, Medium, Large }
// const enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Small;
