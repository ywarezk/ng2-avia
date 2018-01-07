"use strict";
// advanced types
var myNumberArray = [];
var myStringArray = [];
myNumberArray.push(10);
// myNumberArray.push('hello'); // Error!
var myStringOrNumberArray = [];
var myAnyArray = [];
for (var _i = 0, myAnyArray_1 = myAnyArray; _i < myAnyArray_1.length; _i++) {
    var i = myAnyArray_1[_i];
    console.log(i);
}
// dictionary
var myNumberDictionary = { 'foo': 10, 'bar': 20 };
//Object.prototype.yariv = 'katz';
for (var key in myNumberDictionary) {
    console.log(key);
}
//# sourceMappingURL=advanced-types.js.map