/**
 * ui component that contains a login screen
 */

import {Component} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'avaya-login',
    //selector: '.avaya-login',
    //selector: '[avaya-login]'


    // template: `
    //     <form>
    //         <label>login</label>
    //         <input type="text" name="username" />
    //     </form>
    // `
    templateUrl: 'login.component.html',
    
    //styles: [
        //.header {
        //    margin-bottom: 3px
        //}
    //]
    styleUrls: [],
    //encapsulation: ViewEncapsulation.None,

    // providers: [UserService]
})
export class LoginComponent {

    constructor(private _userService: UserService) {
        
    }

}