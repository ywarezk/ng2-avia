"use strict";
// classes example
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class and properties
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        if (firstName === void 0) { firstName = 'Yariv'; }
        if (lastName === void 0) { lastName = 'Katz'; }
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.sayHello = function () {
        console.log(this.firstName + " " + this.lastName + " said hello");
    };
    return Person;
}());
var myPerson = new Person('Yariv', 'Katz');
var myPerson2 = new Person();
var myPerson3 = new Person(undefined, 'avaya');
// inheritance
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, grade) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this);
        console.log("my grade is: " + this.grade);
    };
    return Student;
}(Person));
// abstract class
var Pokemon = /** @class */ (function () {
    function Pokemon(strength) {
        if (strength === void 0) { strength = 100; }
        this.strength = strength;
    }
    return Pokemon;
}());
// const pikachu: Pokemon = new Pokemon(); // Error!
var WaterPokemon = /** @class */ (function (_super) {
    __extends(WaterPokemon, _super);
    function WaterPokemon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WaterPokemon.prototype.battle = function () {
        return 'Win!';
    };
    return WaterPokemon;
}(Pokemon));
var squirtle = new WaterPokemon();
// generic types
// function echo(message: string): string {
//     return message;
// }
function echoNumber(myNumber) {
    return myNumber;
}
function echoAll(allTypes) {
    return allTypes;
}
function echo(message) {
    return message;
}
function echoPokemon(pokemon) {
    return pokemon;
}
// function echoPokemon(pokemon: Pokemon): Pokemon {
//     return pokemon;
// }
var Avaya = /** @class */ (function () {
    function Avaya(saveMe) {
        this.saveMe = saveMe;
    }
    return Avaya;
}());
var myAvaya = new Avaya('hello');
// const myAvayaNumber: Avaya = new Avaya(10);
echo('hello world');
// decorators
//Input
//@Input
// @Input({
// })
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}());
//# sourceMappingURL=oop.js.map