"use strict";
// promise example
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());
var myTimePromise = new Promise(function (resolve, reject) {
    console.log('the async code will run right away');
    setTimeout(function () {
        console.log('the async code is fulfilled');
        //resolve('hello from time promise');
        resolve({
            title: 'stam Task',
            description: 'stam description'
        });
        //reject(new Error('some exception'));
    }, 1000);
});
// attach a listener
var taskPromise = myTimePromise.then(function (json) {
    // console.log(`the listener recieved: ${msg}`);
    //return msg.length;
    var newTask = new Task();
    newTask.title = json['title'];
    newTask.description = json['description'];
    return newTask;
}, function error() {
});
// myTimePromise.then
// promise chaining
// promise1.then().then().then() : Promise<the type here will be what returned from third then>
