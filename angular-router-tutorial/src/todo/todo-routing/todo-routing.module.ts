/**
 * routing configuration for todo module
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { TodoDetailComponent } from '../components/todo-detail/todo-detail.component';


// query params: /some-pate?key1=val1&key2=val2
// matrix params /some-path/:id/

 @NgModule({
     imports: [
        RouterModule.forChild([
            {path: 'tasks', component: TodoListComponent, children: [
                {path: ':id', component: TodoDetailComponent}
            ]}

            // {
            //     path: 'tasks',
            //     component: TodoListComponent
            // },
            // {
            //     path: 'tasks/:id',
            //     component: TodoDetailComponent
            // }
        ])
     ],
     exports: [
         RouterModule
     ]
 })
 export class TodoRoutingModule {

 }