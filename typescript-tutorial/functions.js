"use strict";
// functions
var _this = this;
var myHelloFunction = function (message) {
    return message;
};
myHelloFunction('hello world');
// lambda functions
// (arg1: string, arg2: number) : string => {return arg1;}
// arg1 => {....}
// (arg1) => arg1
// arg1 => arg1 + 10
var myStringLambda = function (arg1) { return arg1.length; };
// this
var printThis = function () {
    console.log(this);
};
printThis();
var myDictionary = { 'a': printThis };
myDictionary['a']();
var myDictionary2 = { 'a': function () { return console.log(_this); } };
//# sourceMappingURL=functions.js.map