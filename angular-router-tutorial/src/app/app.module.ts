import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Error404PageComponent } from './components/error404-page/error404-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Error404PageComponent,
    AboutPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
