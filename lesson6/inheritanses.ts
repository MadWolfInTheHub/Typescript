/* class BaseClass implements IBase {
  id: number;
}

class DerivedFromBase extends BaseClass implements IderivedFromBase {
  name: string;
  
} */

class BaseClassWithConstructor {
  private id: number;
  constructor(_id: number){
    this.id = _id;
  }
}

class DerivedClassWithConstructor extends BaseClassWithConstructor {
  private name: string;
  constructor(_id: number, _name: string){
    super(_id);
    this.name = _name;
  }
}