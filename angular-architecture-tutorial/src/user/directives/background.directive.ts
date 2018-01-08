/**
 * directive change the background color
 * <div avaya-background></div>
 */

 import {Directive, ElementRef} from '@angular/core';

 @Directive({
     selector: '[avaya-background]'
 })
 export class BackgroundDirective {
    constructor(private _element: ElementRef) {
        this._element.nativeElement.style.backgroundColor = 'red';
    }
 }