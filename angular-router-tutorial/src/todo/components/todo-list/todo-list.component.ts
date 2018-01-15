import {Component} from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { ParamMap } from '@angular/router/src/shared';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'avaya-todo-list',
    styles: [
        `
        ul{
            float: left;
            width: 300;
            border: 2px solid red;
        }
        .child {
            float: right;
            width: 300px;
            border: 2px solid green;
        }
        `
    ],
    template: `
    <h1>Task list</h1>
    <avaya-search></avaya-search>
    <ul>
        <li *ngFor="let task of tasks">
            <a [routerLink]="'/tasks/' + task.id + '?search=' + search">
                {{task.title}}
            </a>
        </li>
    </ul>
    <div class="child">
        <router-outlet></router-outlet>
    </div>
    
    `
})
export class TodoListComponent {
    public tasks: Task[] = [];
    public search: string = '';

    constructor(private _taskService: TaskService, private _activatedRoute: ActivatedRoute) {
        // this._taskService.getAllTasks()
        //     .subscribe((tasks: Task[]) => {
        //         this.tasks = tasks;
        //     })

        // this._activatedRoute.queryParams.subscribe((params: Params) => {
        //     console.log(params.search);
        // })

        this._activatedRoute.queryParamMap
            .map((params: ParamMap) => {
                this.search = params.get('search');
                return params.get('search');
            })
            // .filter((search: string) => {
            //     return search && search.length > 3;
            // })
            .debounceTime(500)
            .distinctUntilChanged()
            .mergeMap((search: string) => {
                return this._taskService.getAllTasks(search);
            })
            .subscribe((tasks: Task[]) => {
                this.tasks = tasks;
            })
    }
}