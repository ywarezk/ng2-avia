
import {TestBed, TestComponentRenderer, async, ComponentFixture} from '@angular/core/testing';
import { AboutPageComponent } from './about-page.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('AboutPageComponent', () => {
    let aboutPageFixture: ComponentFixture<AboutPageComponent>;

    /**
     * configurate testing module
     */
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AboutPageComponent]
        });
        TestBed.compileComponents();
    }));

    /**
     * create the component we are testing
     */
    beforeEach(async(() => {
        aboutPageFixture = TestBed.createComponent(AboutPageComponent);
        aboutPageFixture.detectChanges();
    }));

    it('expect true to be true', () => {
        expect(true).toBe(true);
    });

    it('about page should have h1 with text about page', () => {
        const h1: DebugElement = aboutPageFixture.debugElement.query(By.css('h1'));
        expect(h1.nativeElement.innerText).toBe('about page');
    });
})