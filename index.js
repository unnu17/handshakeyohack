const express = require('express');
const app = express()

app.get('/', function (req, res) {
    res.send('hello !');
});

app.post('/save', function (req, res) {
    res.send('hello !');
});

app.listen(3000, function () {
    console.log('server start on port 3000!');
});

