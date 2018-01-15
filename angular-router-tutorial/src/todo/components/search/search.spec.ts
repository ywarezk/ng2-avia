import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {

    let searchFixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [RouterTestingModule.withRoutes([
                {path: '**', component: SearchComponent}
            ])]
        });
        TestBed.compileComponents();
    }));

    beforeEach(async(() => {
        searchFixture = TestBed.createComponent(SearchComponent);
        searchFixture.detectChanges();
    }));

    it('when user types test in the text input, then searchChanged is called', async(() => {
        spyOn(searchFixture.componentInstance, 'searchChanged');
        const input: DebugElement = searchFixture.debugElement.query(By.css('input[name="search"]'));
        input.nativeElement.value = 'test';
        input.nativeElement.dispatchEvent(new Event('input'));
        searchFixture.detectChanges();
        expect(searchFixture.componentInstance.searchChanged).toHaveBeenCalled();
    }));


})