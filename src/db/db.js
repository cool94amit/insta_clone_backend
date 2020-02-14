var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'id12589385_cool94amit',
    password : 'Rajan@1993',
    database : 'id12589385_instaclone'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;