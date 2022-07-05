// To define a defult paremetr

function log(val: any): void {console.log(val)};

function buildName(firstName: string, lastName: string = 'Kryvenko') {
  return firstName + ' ' + lastName
}

function buildPerson(firstName: string, ...remainigName: string[]) {
  return firstName + ' ' + remainigName.join(' ')
}

let personOne = buildPerson('John', 'Steve', 'Paul', 'Daniel')

log(buildName('Serhii'));

log(personOne)

