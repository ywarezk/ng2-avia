import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ChildComponent } from './child.component';
import { Child1Component } from './child1.component';
import { SnakePipe } from './pipes/snake.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child1Component,
    SnakePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
