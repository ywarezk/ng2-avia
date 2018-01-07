

interface ILength {
    length: number;
    name?: string;

}

interface IFirstName {
    firstName: string;
    sayHello: (message: string) => void;
}

const myDict: ILength = {'length': 10};

class Person2 implements ILength, IFirstName {
    //private length: number = 0;
    public firstName: string = 'yariv';
    constructor(public length: number) {}

    public sayHello(arg: string) {
        console.log(arg);
    }
}

