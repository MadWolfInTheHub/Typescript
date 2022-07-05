// Typescript annotations


let hello: string = 'hello everybody wellcome to typescript'
let radius: number = 4;

let obj: object = {};
obj = [];

let arr: any = [];
arr = 4;
arr = '';
arr = {};

let array1: string[] = ['wer'];
let array2: number[] = [ 2, 4];
let array3: boolean[] = [ true, false];


//  Typescript fundamentals

// specifies the order of data for an array
let truppelTest: [string, number, boolean] = ['Serhii', 4, true] 


// creates an object
enum doorStats {
  Open, 
  Closed, 
  Ajar
}

function log(val: any, ) {
  console.log(val);

}

log(doorStats[0])


// says to function to return nothing
function tellJoke(): void {
  return 'this is a joke'
}

log(tellJoke());



// Typescript feathures

// Union types

let unionType: string | number;

unionType = 1;
unionType = 'Hello';

// Type Gueards

function addWithUnionn(arg1: string | number, arg2: string | number) {
  {
    return arg1.toString() + arg2.toString();
  }
}

// Type Guards added

function addWithTypeGuards(arg1: string | number, arg2: string | number) {
  {
    if(typeof arg1 === "string") {
      console.log('first argument is a string')
      return arg1 + arg2;
    }

    if(typeof arg1 === "number" && typeof arg2 === 'number') {
      console.log('both arguments are numbers')
      return arg1 + arg2;
    }
    return arg1.toString() + arg2.toString();
  }
}
addWithTypeGuards("1", 2)
addWithTypeGuards(1, 2)


// Type Aliases 

type stringOrNumber = string | number;

function addWithAlias (arg1: stringOrNumber, arg2: stringOrNumber) {
  return arg1.toString() + arg2.toString();
}


// Null and Undefined

function testUndef(test: null | number) {
  console.log("test parameter: " + test)
} 

testUndef();
testUndef(null);