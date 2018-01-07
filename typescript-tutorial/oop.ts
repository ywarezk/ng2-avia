// classes example

// class and properties

class Person {

    constructor(public firstName: string = 'Yariv', public lastName: string = 'Katz') {
    }

    public sayHello(): void {
        console.log(`${this.firstName} ${this.lastName} said hello`);
    }


}

const myPerson: Person = new Person('Yariv', 'Katz');
const myPerson2: Person = new Person();
const myPerson3: Person = new Person(undefined, 'avaya');

// inheritance

class Student extends Person {

    constructor(firstName: string, lastName: string, public grade: number) {
        super(firstName, lastName);
    }

    public sayHello(): void {
        super.sayHello();
        console.log(`my grade is: ${this.grade}`);
    }
}

// abstract class

abstract class Pokemon {
    constructor(public strength: number = 100){

    }

    abstract battle() : string;
}

// const pikachu: Pokemon = new Pokemon(); // Error!

class WaterPokemon extends Pokemon {
    public battle() : string {
        return 'Win!';
    }
}

const squirtle: WaterPokemon = new WaterPokemon();

// generic types

// function echo(message: string): string {
//     return message;
// }

function echoNumber(myNumber: number): number {
    return myNumber;
}

function echoAll(allTypes: any): any {
    return allTypes;
}


function echo<T>(message: T) : T {
    return message;
}


function echoPokemon<T extends Pokemon | Person>(pokemon: T ) : T {
    return pokemon
}

// function echoPokemon(pokemon: Pokemon): Pokemon {
//     return pokemon;
// }

class Avaya<T> {
    constructor(public saveMe: T) {}
}

const myAvaya: Avaya<string> = new Avaya('hello');
// const myAvayaNumber: Avaya = new Avaya(10);

echo<string>('hello world');

// decorators

//Input

//@Input
// @Input({

// })
class MyClass {

    //@Input() public firstName: string;

    // @Input()
    // sayHello() {

    // }

}
















