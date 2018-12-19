var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser'); // 把資料轉成body

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/test', (req, res) => {
    console.log(req.body);
})

app.listen(8081, () => {
    console.log("port:8081");
})