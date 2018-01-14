

import {Component} from '@angular/core';
import { StringArrayService } from '../../services/string-array.service';

@Component({
    selector: 'avaya-string-list',
    template: `
    <h1>String list</h1>
    <ul>
        <li *ngFor="let str of strings; index as i">
            {{str}}
            <button (click)="deleteElementInArray(i)">
                Delete
            </button>
        </li>
    </ul>
    `
})
export class StringListComponent {
    public strings: string[] = [];

    constructor(private _stringService: StringArrayService) {
        //this.strings = this._stringService.stringArray;
        this._stringService.stringsSubject.subscribe((stringsArray: string[]) => {
            this.strings = stringsArray;
        })
    }

    public deleteElementInArray(indexToDelete: number) {
        this._stringService.deleteElementInArray(indexToDelete);
    }
}