// Enum
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
    DoorState[DoorState["Ajar"] = 2] = "Ajar"; // 2
})(DoorState || (DoorState = {}));
var openDoor = DoorState.Closed;
console.log("Open Door is: ".concat(openDoor));
console.log(DoorState);
