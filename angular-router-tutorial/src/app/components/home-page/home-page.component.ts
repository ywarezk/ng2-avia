import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'avaya-home-page',
    template: `
    <h1>
        You are in the home page
    </h1>
    <button (click)="moveToAboutpage()">
        Move me to about page
    </button>
    `
})
export class HomePageComponent {

    constructor(private _routerService: Router) {}

    public moveToAboutpage(): void {
        this._routerService.navigateByUrl('/about');
    }
}