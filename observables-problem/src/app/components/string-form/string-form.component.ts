

import {Component} from '@angular/core';
import { StringArrayService } from '../../services/string-array.service';

@Component({
    selector: 'avaya-string-form',
    template: `
    <form (ngSubmit)="addStringToArray()">
        <div class="form-group">
            <label>Enter Text</label>
            <input type="text" name="string" [(ngModel)]="stringInput" />
        </div>
        <div class="form-group">
            <button type="submit">Submit</button>
        </div>
    </form>
    `
})
export class StringFormComponent {
    public stringInput: string = 'Please enter string';

    constructor(private _stringService: StringArrayService) {}

    public addStringToArray() {
        this._stringService.addString(this.stringInput);
    }
}