/**
 * modue that contains route configuration for root module (AppModule)
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { AboutPageComponent } from '../components/about-page/about-page.component';
import { Error404PageComponent } from '../components/error404-page/error404-page.component';
import { AdminPageComponent } from '../components/admin-page/admin-page.component';
import { LoggedinGuardService } from './guards/loggedin.service';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', loadChildren: '../../todo/todo.module#TodoModule'},
            {path: '', component: HomePageComponent},
            {path: 'about', component: AboutPageComponent},
            {path: 'admin', component: AdminPageComponent, canActivate: [LoggedinGuardService]},
            {path: '**', component: Error404PageComponent}
        ], {enableTracing: true})
    ],
    providers: [LoggedinGuardService],
    exports: [RouterModule]
})
export class AppRoutingModule {

}