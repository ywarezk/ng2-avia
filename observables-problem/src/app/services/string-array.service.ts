import { Subject } from "rxjs/Subject";




export class StringArrayService {
    public stringsSubject: Subject<string[]> = new Subject();

    public stringArray: string[] = [];

    public deleteElementInArray(indexToDelete: number) {
        const newStringArray: string[] = [];
        for(let i=0; i<this.stringArray.length; i++) {
            if (i === indexToDelete) continue;
            newStringArray.push(this.stringArray[i]);
        }
        this.stringArray = newStringArray; 
        this.stringsSubject.next(this.stringArray);
    }

    public addString(str: string) {
        this.stringArray.push(str);
        this.stringsSubject.next(this.stringArray);
    }
    
}