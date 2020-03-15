var mysql = require('mysql');
var connection = mysql.createPool({

    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'FManager'


    host: 'remotemysql.com',
    user: 'a6FvoFalYR',
    password: 'dMYtmsjCue',
    database: 'a6FvoFalYR'
});
module.exports = connection;