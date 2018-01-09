
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'avaya-child',
    exportAs: 'childTemplateReference',
    template: `
    <h1 [style.visibility]="isVisible ? 'visible' : 'hidden'">
        {{message}}
    </h1>
    <button (click)="changeVisibility()">
        Toggle Visibility
    </button>
    <input 
        type="text" 
        [value]="inputFromParent" 
        (input)="passTextToParent($event)" />
    `
})
export class ChildComponent implements OnInit{
    @Input("messageToChild") public message: string = '';
    @Output() public visibleClicked: EventEmitter<boolean> = new EventEmitter();
    
    @Input() public inputFromParent: string = '';
    @Output() public inputFromParentChange: EventEmitter<string> = new EventEmitter();

    public passTextToParent(event: KeyboardEvent) {
        this.inputFromParentChange.emit((<HTMLInputElement>event.target).value);
    }

    public isVisible: boolean = true;

    public ngOnInit() {

    }

    public changeVisibility() {
        this.isVisible = !this.isVisible;
        this.visibleClicked.emit(this.isVisible);
    }
}