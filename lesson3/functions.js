// To define a defult paremetr
function log(val) { console.log(val); }
;
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Kryvenko'; }
    return firstName + ' ' + lastName;
}
function buildPerson(firstName) {
    var remainigName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        remainigName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + remainigName.join(' ');
}
var personOne = buildPerson('John', 'Steve', 'Paul', 'Daniel');
log(buildName('Serhii'));
log(personOne);
