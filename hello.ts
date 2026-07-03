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

// console.log(`hi ${person.firstName} , Your age is ${person.age}`);

//return object in a function
function surazKing(): { lastName: string; rolno: number } {
  return {
    lastName: "Suraz",
    rolno: 45,
  };
}

//tuple
const myTuple: [string, number] = ["hello", 42];
// console.log(myTuple[1]);

//enums
enum WeatherConditons {
  Sunny = "sunny",
  Cloudy = "cloudy",
}
// console.log(WeatherConditons.Cloudy);

//interfaces

interface Person {
  firstName: string;
  lastname: string;
  age: number;
}
const customer: Person = {
  firstName: "Suraz",
  lastname: "Agrahari",
  age: 34,
};
interface MathOperation {
  (x: number, y: number): number;
}
const adder: MathOperation = (a, b) => a + b;

// console.log(adder(5, 3));

interface PersonDetails {
  firstName: string;
  lastName: string;
  sayHello(): void;
}

function greet(person: PersonDetails) {
  console.log(`Hello ${person.firstName} ${person.lastName}`);
  person.sayHello();
}

const john: PersonDetails = {
  firstName: "John",
  lastName: "Doe",
  sayHello() {
    console.log("Hi there");
  },
};

// greet(john);
//Generic

function printInfo<T>(x: T, y: T): [T, T] {
  return [x, y];
}
interface Dog {
  name: string;
  breed: string;
}

printInfo<Dog>(
  { name: "Buddy", breed: "Lavandor" },
  { name: "Charlie", breed: "Labrador" },
);

// printInfo<string>("Hello"); //hello
// printInfo<number>(20); //20;

function getRandomKeyPair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKeys = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKeys, value: obj[randKeys] };
}
const stringObj = { a: "apple", b: "ball", c: "cat" };
console.log(getRandomKeyPair<string>(stringObj));
