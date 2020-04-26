const mysql = require('mysql2');
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dazawo15326',
    database: 'auth'
});

app.post('/', urlencodedParser,function (req, res) {

    connection.query('SELECT * FROM users where login = ${data.login} and password = ${data.password}', (err, data, fields)=> {
        if (data) {
            res.send('ok')
        } else if (err) {
            res.send('error')
        }
    })
});


app.get("/", function(request, response){
    response.send("Hello");
});



app.listen(3000);
