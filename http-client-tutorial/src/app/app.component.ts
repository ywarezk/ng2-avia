import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TaskService } from './services/task.service';
import { Task } from './models/task';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public tasks: Task[] = [];

  constructor(private _taskService: TaskService) {
    this._taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    }, (err: HttpErrorResponse) => {
      if (typeof err.error === "string") {
        // err.status
      } else {
        alert('you are not connected to wifi')
      }
    });

    const task = new Task();
    task.title = 'foo';
    task.description = 'bar';
    this._taskService.saveTask(task).subscribe((task: Task) => {
      console.log('success');
    })
  }
}
