

export class Person {
    constructor(public firstName: string = 'yariv') {

    }
}

export default class Student extends Person {

}



export function echo(message: string) {
    return message;
}