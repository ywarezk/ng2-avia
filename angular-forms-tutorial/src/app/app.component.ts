import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {NgModel} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
    .ng-invalid:not(form) {
      border: 3px solid red;
    }
    `
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('usernameNgModelInstance') private _usernameNgModel: NgModel;
  @ViewChild('ngFormInstance') private _ngFormInstance: NgForm

  public ngAfterViewInit() {
    //debugger;
  }
}
