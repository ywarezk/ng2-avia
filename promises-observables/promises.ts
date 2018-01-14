
// promise example

class Task {
    public title: string;
    public description: string;
}

const myTimePromise: Promise<{[key: string]: string}> = new Promise((resolve, reject) => {
    console.log('the async code will run right away');
    setTimeout(() => {
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

const taskPromise: Promise<Task | void> =  myTimePromise.then((json: {[key: string]: string}) => {
    // console.log(`the listener recieved: ${msg}`);
    //return msg.length;

    const newTask = new Task();
    newTask.title = json['title'];
    newTask.description = json['description'];
    return newTask;
}, function error(){

});

// myTimePromise.then

// promise chaining

// promise1.then().then().then() : Promise<the type here will be what returned from third then>

