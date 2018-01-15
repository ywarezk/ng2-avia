import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { TaskService } from './services/task.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing/todo-routing.module';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';

@NgModule({
    declarations: [TodoListComponent, TodoDetailComponent, SearchComponent],
    imports: [
        HttpClientModule,
        TodoRoutingModule,
        CommonModule
    ],
    providers: [
        TaskService
    ]
})
export class TodoModule {

}