import {Component} from '@angular/core';
import { Task } from '../../models/task';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'avaya-todo-detail',
    template: `
    <h1>todo detail</h1>
    <p>
        <strong>Title</strong>
        {{task?.title}}
    </p>
    <p>
        <strong>Description</strong>
        {{task?.description}}
    </p>
    `
})
export class TodoDetailComponent {
    public task: Task;

    constructor(private _activatedRoute: ActivatedRoute, private _taskService: TaskService) {
        this._activatedRoute.params.subscribe((params: Params) => {
            const id = params.id;
            this._taskService.getSingleTask(id).subscribe((task: Task) => {
                this.task = task;
            })
        });
    }
}