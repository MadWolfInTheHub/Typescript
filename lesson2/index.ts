// Typescript functions

function log(val: any) : void{console.log(val)};

// placing a type annotation tells js to return a specific data type

function addNumbers (a: number, b: number): string {
  return (a + b).toString();
}
function addNumbers2 (a: number, b: number): number {
  return a + b;
}

// anynomous functions
//  question mark tells the code that this arg or parametr is optional

let addString = function (a: string, b?: string) {
  return a + b;
};

log(addString('Serhii '));

