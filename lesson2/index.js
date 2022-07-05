// Typescript functions
function log(val) { console.log(val); }
;
// placing a type annotation tells js to return a specific data type
function addNumbers(a, b) {
    return (a + b).toString();
}
function addNumbers2(a, b) {
    return a + b;
}
// anynomous functions
//  question mark tells the code that this arg or parametr is optional
let addString = function (a, b) {
    return a + b;
};
log(addString('Serhii '));
