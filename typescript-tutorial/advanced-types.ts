

// advanced types

const myNumberArray: number[] = [];
const myStringArray: Array<string> = [];

myNumberArray.push(10);
// myNumberArray.push('hello'); // Error!

const myStringOrNumberArray: Array<string | number> = [];
const myAnyArray: Array<any> = [];

for(let i of myAnyArray) {
    console.log(i)
}

// dictionary

const myNumberDictionary: {[key: string]: number} = {'foo': 10, 'bar': 20}

//Object.prototype.yariv = 'katz';

for(let key in myNumberDictionary) {
    console.log(key);
}

