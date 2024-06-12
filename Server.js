const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const port = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.json());

app.listen(port, function () {
    console.log("El server corre en el puerto: " + port);
});

app.get('/', function (req, res) {
    res.send("Hola mundo");
});

app.use('/api', api);
