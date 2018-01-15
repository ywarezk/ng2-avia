/**
 * form with text input to search for tasks
 */

import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'avaya-search',
    template: `
    <form>
        <div class="form-group">
            <label>Search</label>
            <input type="text" name="search" class="form-control" (input)="searchChanged($event)" />
        </div>
    </form>
    `
})
export class SearchComponent {

    constructor(private _router: Router) {}

    public searchChanged(event: any) {
        const searchString: string = event.target.value;
        this._router.navigateByUrl(`${location.pathname}?search=${searchString}`);
    }

    public stam() {
        
    }
}