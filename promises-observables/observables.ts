

// Observables

// import {Observer} from 'rxjs/Observer';
// import {Observable} from 'rxjs/Observable';
// import {Subscription} from 'rxjs';
// import { EventTargetLike } from 'rxjs/observable/FromEventObservable';

import {Subject} from 'rxjs';
import { AnonymousSubject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// const myTimerObservable: Observable<number> = Observable.create((observer: Observer<number>) => {
//     console.log('starting to run the async code');
//     let counter = 0;
//     const mySetIntervalId: number = setInterval(() => {
//         console.log('async code is now running');
//         if (counter < 5) {
//             observer.next(counter);
//         } else {
//             console.log('closing data stream');
//             observer.complete();
//         }
        
//         // observer.next(counter + 1);
//         counter++;
//     }, 1000);

//     return function(){
//         console.log('Tear down logic');
//         clearInterval(mySetIntervalId);
//     }
// });

// // subscription

// const mySubscription: Subscription = myTimerObservable.subscribe(
//     function success(num: number) {
//         console.log(num);
//     },
//     function error(err: any) {

//     },
//     function complete() {
//         console.log('the complete of observer is now running')
//     }
// )

// myTimerObservable.subscribe(
//     function success() {
//         console.log('the second observable');
//     }
// )

// subscription cancelation

// setTimeout(() => {
//     console.log('canceling the subscription');
//     mySubscription.unsubscribe();
// }, 5000);


// operators

// declare var Rx: any;

// const myEventObservable = Rx.Observable
//     .fromEvent((<HTMLElement>document.getElementById('search')), 'input')
//     .map((event: any) => {
//         return event.target.value;
//     })
//     .debounceTime(500)
//     .distinctUntilChanged();



// myEventObservable.subscribe((stringUserTyped: string) => {
//     console.log(stringUserTyped);
// });

const myIntSubject: BehaviorSubject<number> = new BehaviorSubject(12);

myIntSubject.next(10);

myIntSubject.subscribe((num: number) => {
    console.log(num);
});

myIntSubject.next(20);



