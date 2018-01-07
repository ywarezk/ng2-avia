// type annotation

// string

let myStr: string = 'hello world';
myStr = "foo bar";
myStr = `
hello world
foo bar
${1 + 1}
`;

let myStr2 = 'Avaya';

myStr = `
hello world
typescript lesson
in ${myStr2}
`

// number

let myNum: number = 10;
// myNum = '0'; // error!

// boolean

let myBoolean: boolean | number = true;
myBoolean = 0;


let decideWhatVar = 'hello';
// decideWhatVar = 10; // type prediction

// any

let varCanContainAll: any = 'sdfasdf';
varCanContainAll = 10;

'hello world' + (<string>varCanContainAll)
'hello world' + (varCanContainAll as string)

