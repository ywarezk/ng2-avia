

//declare var $: any;

// import * as $ from 'jquery';

fetch('https://nztodo.herokuapp.com/api/task/?format=json').then(
    (res) => {
        res.json().then((tasks) => {

        });
    }
)

setTimeout(() => {

}, 1000);


$('body').append('<h1>hello jquery</h1>')