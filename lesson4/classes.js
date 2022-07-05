// Interface and readonly property
function log(val) { console.log(val); }
var complexType = { id: 1, name: 'Serhii' };
var p1 = { x: 2, y: 2 };
// p1.x = 4;
// p1.y = 3;
log(p1);
// ---cut---
var user = {
    name: 'Serhii',
    id: 2312
};
function getAdminUser() {
    console.log(user.name);
}
function deleteUser(user) {
    user.name = '';
    console.log(user);
}
getAdminUser();
deleteUser(user);
