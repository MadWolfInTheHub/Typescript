// Typescript annotations
let hello = 'hello everybody wellcome to typescript';
let radius = 4;
let obj = {};
obj = [];
let arr = [];
arr = 4;
arr = '';
arr = {};
let array1 = ['wer'];
let array2 = [2, 4];
let array3 = [true, false];
//  Typescript fundamentals
// specifies the order of data for an array
let truppelTest = ['Serhii', 4, true];
// creates an object
var doorStats;
(function (doorStats) {
    doorStats[doorStats["Open"] = 0] = "Open";
    doorStats[doorStats["Closed"] = 1] = "Closed";
    doorStats[doorStats["Ajar"] = 2] = "Ajar";
})(doorStats || (doorStats = {}));
function log(val) {
    console.log(val);
}
log(doorStats[0]);
// says to function to return nothing
function tellJoke() {
    return 'this is a joke';
}
log(tellJoke());
// Typescript feathures
// Union types
let unionType;
unionType = 1;
unionType = 'Hello';
// Type Gueards
function addWithUnionn(arg1, arg2) {
    {
        return arg1.toString() + arg2.toString();
    }
}
// Type Guards added
function addWithTypeGuards(arg1, arg2) {
    {
        if (typeof arg1 === "string") {
            console.log('first argument is a string');
            return arg1 + arg2;
        }
        if (typeof arg1 === "number" && typeof arg2 === 'number') {
            console.log('both arguments are numbers');
            return arg1 + arg2;
        }
        return arg1.toString() + arg2.toString();
    }
}
addWithTypeGuards("1", 2);
addWithTypeGuards(1, 2);
function addWithAlias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
// Null and Undefined
function testUndef(test) {
    console.log("test parameter: " + test);
}
testUndef();
testUndef(null);
