
import {TestBed, async, ComponentFixture} from '@angular/core/testing'
import { TodoDetailComponent } from './todo-detail.component';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {By} from '@angular/platform-browser';

import 'rxjs/add/observable/of';

describe('TodoDetailComponent', () => {
    let todoDetailComponentFixture: ComponentFixture<TodoDetailComponent>;

    let mockActivatedRoute = {
        params: Observable.of({id: 1})
    }

    let mockHttpClient = {
        get: function<T>(url: string) {
            return Observable.of({
                title: 'test',
                description: 'test',
                id: 1
            });
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoDetailComponent],
            providers: [
                TaskService,
                {
                    provide: ActivatedRoute,
                    useValue: mockActivatedRoute
                },
                {
                    provide: HttpClient,
                    useValue: mockHttpClient
                }
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(async(() => {
        todoDetailComponentFixture = TestBed.createComponent(TodoDetailComponent);
        todoDetailComponentFixture.detectChanges();
    }));

    it('title and description should be filled with mock data', () => {
        const ps = todoDetailComponentFixture.debugElement.queryAll(By.css('p'));
        expect(ps[0].nativeElement.innerText).toBe('Title test');
        expect(ps[1].nativeElement.innerText).toBe('Description test');
    })

});
