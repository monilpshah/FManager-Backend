var db = require('../dbconnection'); //reference of dbconnection.js

var user = {

    getAllUsers: function (callback) {
        return db.query("Select * from user_tbl", callback);
    },

    getUserByEmail: function (email, callback) {
        return db.query("select * from user_tbl where email=?", [email], callback);
    },
    getUserByUserid: function (userid, callback) {
        return db.query("select * from user_tbl where userid=?", [userid], callback);
    },
    addUser: function (user, callback) {   
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time; 
        return db.query("Insert into user_tbl values(?,?,?,?,?,?)", [,user.email, user.password, user.name,user.phone,dateTime], callback);
    },
    deleteUser: function (userid, callback) {
        return db.query("delete from user_tbl where userid=?", [userid], callback);
    },
    deleteUserByEmail: function (email, callback) {
        return db.query("delete from user_tbl where email=?", [email], callback);
    },
    updateUser: function (userid, user, callback) {
        return db.query("update user_tbl set email=?,password=?,name=?,phone=? where userid=?", [user.email, user.password, user.name, user.phone,userid], callback);
    }

};
module.exports = user;