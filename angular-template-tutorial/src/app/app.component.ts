import { Component, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child.component';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    '.hidden {display: none;}'
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('instanceAvayaChild') private _thisIsFirstInstanceOfChild: ChildComponent;
  @ViewChild('h2Instance') private _thisIsH2: HTMLHeadingElement
  @ViewChildren(ChildComponent) private _allInstances: ChildComponent[] = [];

  public willBeDictionary: any = null;

  public stamTask: Task = new Task();
  public someDate: Date = new Date();

  public stringToTemplate: string = 'hello from class component';

  public twoWayBinding: string = 'initiating from class';
  public transferMessageToChild: string = 'this message originated from parent';

  public twoWayBindingFromChildParent: string = 'first value from parent';

  public dictObj: {[key: string]: boolean} = {
    'is-avaya': true,
    'is-avaya-button': false
  }

  public groceryList: string[] = [
    'Soya Milk',
    'Tofu',
    'Saten'
  ]

  public sayHelloFromClass(): string {
    return 'hello from method'
  }

  constructor() {
    setTimeout(() => {
      this.stringToTemplate = '3 seconds passed';
      this.willBeDictionary = {
        title: 'hello',
        description: 'foo-bar'
      }
    }, 3000);
  }

  public generateId(): string {
    return 'id-from-class';
  }

  public createRandomNumber(): number {
    return Math.random();
  }

  public someTimesHidden(): boolean {
    return true;
  }

  public mouseOverP(mouseEvent: MouseEvent, isClicked: boolean = false) {
    if (isClicked) {
      (<HTMLParagraphElement>mouseEvent.target).style.backgroundColor='blue';
    } else {
      (<HTMLParagraphElement>mouseEvent.target).style.backgroundColor='orange';
    }
    
  }

  public eventInitiatedFromChild(isMessageVisible: boolean) {
      console.log(`the message visibility is: ${isMessageVisible}`);
  }

  public ngAfterViewInit(): void {
    
  }

  public sayHello() {
    alert('hello world');
  }
}
