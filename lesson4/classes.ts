// Interface and readonly property

function log(val: any): void {console.log(val)}

interface IComplexType {
  id: number;
  name?: string;
}

let complexType : IComplexType = {id: 1, name: 'Serhii'}

interface Point {
  readonly x: number,
  readonly y: number,
}

let p1: Point = {x:2, y:2}

// p1.x = 4;
// p1.y = 3;
log(p1)

// @noErrors
interface User {
  name: string;
  id: number;
}
// ---cut---

const user: User = {
  name: 'Serhii',
  id: 2312,
}

function getAdminUser()/* : User */ {
  console.log(user.name)
}

function deleteUser(user: User) {
  user.name = '';
  console.log(user)
}



getAdminUser();
deleteUser(user);