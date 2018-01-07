fetch('https://nztodo.herokuapp.com/api/task/?format=json').then(function (res) {
    res.json().then(function (tasks) {
    });
});
setTimeout(function () {
}, 1000);
