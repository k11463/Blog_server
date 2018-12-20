var express = require('express');
var mysql = require('mysql');
var cors = require('cors'); // 跨網域
var bodyParser = require('body-parser'); // 把資料轉成body
var {MemberRegister} = require('@/query.js');

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/register', (req, res) => {
    console.log(req.body);
})

app.listen(8081, () => {
    console.log("port:8081");
})