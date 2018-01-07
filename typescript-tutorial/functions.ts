// functions

const myHelloFunction: (arg1: string) => string = function(message: string): string {
    return message;
}

myHelloFunction('hello world');

// lambda functions

// (arg1: string, arg2: number) : string => {return arg1;}
// arg1 => {....}
// (arg1) => arg1
// arg1 => arg1 + 10

const myStringLambda: (arg1: string) => number = (arg1): number => arg1.length;

// this

const printThis: () => void = function() {
    console.log(this);
}


printThis();

const myDictionary: {[key : string] : any} = {'a': printThis}

myDictionary['a']();

const myDictionary2: {[key : string] : any} = {'a': () => console.log(this)};






















