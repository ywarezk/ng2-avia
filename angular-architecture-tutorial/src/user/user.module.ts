/**
 * angular module
 * for UserModule
 * UserModule contains:
 * LoginComponent, BackgroundDirective, UserService
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {UserService} from './services/user.service';
import { BackgroundDirective } from './directives/background.directive';

 @NgModule({
     declarations: [
         LoginComponent, BackgroundDirective
     ],
     imports: [
         CommonModule
     ],
     exports: [LoginComponent],
     providers: [UserService]
 })
 export class UserModule {

 }

