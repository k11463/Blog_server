var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'k11463',
    password: 'k882546',
    database: 'k11463'
});

con.connect();

var MemberRegister = (objects) => {
    console.log(objects);
}

module.exports = {
    MemberRegister
}