// type Person = {
//   name: string;
// };
// const person: Person = {
//   name: "John",
// };
// console.log(person.name);

//string
// let myName: string = "Suraz";
// console.log(myName);
//number
// let myRollNo: number = 21;
// console.log(myRollNo);
//boolean
// let myBool: boolean = true;
// console.log(myBool);

//any datatype
// let favVar: any = 90;
// favVar = "Surax";
// console.log(favVar);
//no error

function add(x: number, y: number): number {
  return x + x;
}

// console.log(typeof add(9, 4));

//leaaarning about void

const display = (x: string): void => {
  console.log(`hello ${x}`);
};

// display("Suraz");

//Array
const number: number[] = [1, 2, 3, 4, 5];

//Objects

const person: { firstName: string; age: number } = {
  firstName: "Suraz",
  age: 34,
};

console.log(`hi ${person.firstName} , Your age is ${person.age}`);

//return object in a function
function surazKing(): { lastName: string; rolno: number } {
  return {
    lastName: "Suraz",
    rolno: 45,
  };
}
