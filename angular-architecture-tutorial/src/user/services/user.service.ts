/**
 * angular service
 * holds information on the user
 */


import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

//@Injectable()
export class UserService {

    public username: string = '';

    public getUsername(): string {
        return this.username
    }

    public getUsernameLength(): number {
        return this.username.length;
    }

    //constructor(private _http: Http) {}
}