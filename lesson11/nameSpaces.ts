// NameSpaces

namespace FirstNameSpace {
  class NotExported {

  }

  export class NameSpaceClass {
    id: number;

  }

}

namespace SecondNameSpace {
  export class NameSpaceClass {
    name: string;
  }
}

let firstNameSpace = new FirstNameSpace.NameSpaceClass();

// let notExported = new FirstNameSpace.NotExportd()

let secondNameSpace = new SecondNameSpace.NameSpaceClass();