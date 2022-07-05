// NameSpaces
var FirstNameSpace;
(function (FirstNameSpace) {
    var NotExported = /** @class */ (function () {
        function NotExported() {
        }
        return NotExported;
    }());
    var NameSpaceClass = /** @class */ (function () {
        function NameSpaceClass() {
        }
        return NameSpaceClass;
    }());
    FirstNameSpace.NameSpaceClass = NameSpaceClass;
})(FirstNameSpace || (FirstNameSpace = {}));
var SecondNameSpace;
(function (SecondNameSpace) {
    var NameSpaceClass = /** @class */ (function () {
        function NameSpaceClass() {
        }
        return NameSpaceClass;
    }());
    SecondNameSpace.NameSpaceClass = NameSpaceClass;
})(SecondNameSpace || (SecondNameSpace = {}));
var firstNameSpace = new FirstNameSpace.NameSpaceClass();
// let notExported = new FirstNameSpace.NotExportd()
var secondNameSpace = new SecondNameSpace.NameSpaceClass();
