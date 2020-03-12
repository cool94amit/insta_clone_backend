var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'instagram_clone'
});

connection.connect(function (err) {
    if (err) console.log(err);
});

module.exports = connection;