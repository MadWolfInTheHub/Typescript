var SinmpleClass = /** @class */ (function () {
    function SinmpleClass() {
    }
    SinmpleClass.prototype.print = function () {
        console.log('Creating an instance of a class');
        console.log("Simple class has id: ".concat(this.id));
    };
    return SinmpleClass;
}());
// This keyword
var mySimpleClass = new SinmpleClass();
mySimpleClass.id = 234;
mySimpleClass.print();
function printClass(a) {
    a.print();
    return null;
}
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.prototype.print = function () {
        console.log('ClassA.print()');
    };
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    ClassB.prototype.print = function () {
        console.log('ClassB.print()');
    };
    return ClassB;
}());
var classA = new ClassA();
classA.print();
var classB = new ClassB();
// Classes constructors
var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    ClassWithConstructor.prototype.getName = function () {
        return this.name;
    };
    return ClassWithConstructor;
}());
var classWithConstructor = new ClassWithConstructor(10, 'Apple');
console.log(classWithConstructor.getName());
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
var ClassWithPrivateProperty = /** @class */ (function () {
    function ClassWithPrivateProperty() {
    }
    Object.defineProperty(ClassWithPrivateProperty.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClassWithPrivateProperty.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClassWithPrivateProperty.prototype, "hobby", {
        get: function () {
            return this._hobby;
        },
        set: function (value) {
            this._hobby = value;
        },
        enumerable: false,
        configurable: true
    });
    return ClassWithPrivateProperty;
}());
var classWithPrivat = new ClassWithPrivateProperty();
classWithPrivat.name = 'Serhii';
console.log(classWithPrivat.name);
ClassWithPrivateProperty._hobby = 'playing video games';
console.log(ClassWithPrivateProperty._hobby);
