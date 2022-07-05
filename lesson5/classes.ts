class SinmpleClass {
  id: number;
  print(): void {
    console.log('Creating an instance of a class');
    console.log(`Simple class has id: ${this.id}`);
  }
}

// This keyword

let mySimpleClass = new SinmpleClass();

mySimpleClass.id = 234;

mySimpleClass.print()

// Implementing Interfaces

interface Iprint{
  print();
}

function printClass(a: Iprint){
  a.print();
  return null;
}

class ClassA implements Iprint{
  print() {
    console.log('ClassA.print()')
  }
}

class ClassB implements Iprint{
  print() {
    console.log('ClassB.print()')
  }
}

let classA = new ClassA()
classA.print()
let classB = new ClassB()


// Classes constructors

class ClassWithConstructor {
  id: number;
  name: string;

  constructor(_id: number, _name: string) {
    this.id = _id;
    this.name =_name;
  }

  getName(): string {
    return this.name;
  }
}

let classWithConstructor = new ClassWithConstructor(10, 'Apple');
console.log(classWithConstructor.getName())


// Class Modifiers

/* class ClassWithPublicProperty{
  public id: number;
  readonly name: string = 'Serhii';
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 20;


publicAccess.name = 'Serhii';

console.log(publicAccess)

class ClassWithAumaticProperties {
  constructor(public id: number, private name: string) {
  }
}

let myAutoClass = new ClassWithAumaticProperties(1, 'ClassName');

console.log(`myAutoclass id: ${myAutoClass.id}`)
console.log(`myAutoclass name: ${myAutoClass.name}`) */

class ClassWithPrivateProperty{
  private _id: number;
  private _name: string;
  static _hobby: string;

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get hobby(): string {
    return this._hobby;
  }
  public set hobby(value: string) {
    this._hobby = value;
  }
}

let classWithPrivat = new ClassWithPrivateProperty();
classWithPrivat.name = 'Serhii'

console.log(classWithPrivat.name)

ClassWithPrivateProperty._hobby = 'playing video games'

console.log(ClassWithPrivateProperty._hobby)