var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'',
 database:'FManager'
 
 
// host:'remotemysql.com',
// user:'EQWzIIIodt',
// password:'mJcUb6PfVi',
// database:'EQWzIIIodt'
});
 module.exports=connection;