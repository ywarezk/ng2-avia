import { HttpClient, HttpResponse, HttpHeaders, HttpInterceptor } from "@angular/common/http";
import {Injectable} from '@angular/core';
import { Observable } from "rxjs/Observable";
import {Task} from '../models/task';

import 'rxjs/add/operator/map';

interface ITask {
    title: string;
    description: string;
}

@Injectable()
export class TaskService {

    constructor(private _httpClient: HttpClient) {

    }

    public getTasks(): Observable<Task[]> {
        return this._httpClient.get<ITask[]>(
            'https://nztodo.herokuapp.com/api/task/?format=json',
            {
                observe: 'response',
                headers: (new HttpHeaders()).set('Authorization', 'foo bar')
            }
        )
            .map((response: HttpResponse<ITask[]>) => {
                const arrTasks: Task[] = [];
                for (let taskJson of response.body) {
                    const task = new Task();
                    task.title = taskJson.title;
                    task.description = taskJson.description;
                    arrTasks.push(task);
                } 
                return arrTasks;
            })
    }

    public saveTask(task: Task): Observable<Task> {
        return this._httpClient.post<ITask>('/api/task/?format=json', {
            title: task.title,
            description: task.description,
            group: 'yariv-katz',
            when: (new Date()).toISOString()
        }).map((json: ITask) => {
            const task = new Task();
            task.title = json.title;
            task.description = json.description;
            return task;
        })
    }

}