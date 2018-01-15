/**
 * service query backend to get tasks or a single task
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Task, ITask } from '../models/task';

import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

    constructor(private _httpClient: HttpClient) {

    }

    public getAllTasks(search: string = ''): Observable<Task[]> {
        return this._httpClient
            .get<ITask[]>(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`)
            .map((tasks: ITask[]) => {
                return tasks.map((singleTask: ITask) => {
                    const task: Task = new Task();
                    task.title = singleTask.title;
                    task.description = singleTask.description;
                    task.id = singleTask.id;
                    return task;
                })
            })
    }

    public getSingleTask(id: number): Observable<Task> {
        return this._httpClient
            .get<ITask>(`https://nztodo.herokuapp.com/api/task/${id}/?format=json`)
            .map((task: ITask) => {
                const taskInstance: Task = new Task();
                taskInstance.title = task.title;
                taskInstance.description = task.description;
                taskInstance.id = task.id;
                return taskInstance;
            })
    }
}

