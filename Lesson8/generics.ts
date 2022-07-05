// Generics

/* function identity(args: number): number {
  return args;
}

function identity1(args: any): any {
  return args;
} */

function identity<T>(args: T): T {
  return args;
}let a  = identity('myString');

let b = identity<number>(1);



// Generics interfaces

interface GenericInterface<T>{
  (arg: T): T;

}

class GenericClass<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}