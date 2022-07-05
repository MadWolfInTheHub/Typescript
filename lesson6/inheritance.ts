// Inherotance

interface IBase {
  id: number;

}

interface IderivedFromBase {
  name: string;

}

class InterfaceInheritace implements IderivedFromBase, IBase {
  id: number;
  name: string;

}
