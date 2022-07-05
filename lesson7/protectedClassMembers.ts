// Protected Classes Members

class ClassUsingProteted {
  protected id: number;

  public getId() {
    return this.id;
  }

}

class DetivedFromProtecred extends ClassUsingProteted {
  constructor() {
    super();
    this.id = 0;
  }

}

let derivedFromProtected = new DetivedFromProtecred();
derivedFromProtected.id = 1;
console.log(`getId returns ${derivedFromProtected.getId}`);
