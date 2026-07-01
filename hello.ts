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

console.log(typeof add(9, 4));

//leaaarning about void

const display = (x: string): void => {
  console.log(`hello ${x}`);
};

display("Suraz");
