import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StringArrayService } from './services/string-array.service';
import {FormsModule} from '@angular/forms';
import { StringFormComponent } from './components/string-form/string-form.component';
import { StringListComponent } from './components/string-list/string-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StringFormComponent,
    StringListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StringArrayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
