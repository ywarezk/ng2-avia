"use strict";
var myDict = { 'length': 10 };
var Person2 = /** @class */ (function () {
    function Person2(length) {
        this.length = length;
        //private length: number = 0;
        this.firstName = 'yariv';
    }
    Person2.prototype.sayHello = function (arg) {
        console.log(arg);
    };
    return Person2;
}());
//# sourceMappingURL=interfaces.js.map