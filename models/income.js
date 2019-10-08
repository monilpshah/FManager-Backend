var db = require('../dbconnection'); //reference of dbconnection.js

var income = {

    getAllIncome: function (callback) {
        return db.query("Select * from income_tbl", callback);
    },

    getIncomeByFkuserid: function (fkuserid, callback) {
        return db.query("select * from income_tbl where fkuserid=?", [fkuserid], callback);
    },
    getIncomeByIid: function (iid, callback) {
        return db.query("select * from income_tbl where iid=?", [iid], callback);
    },
    addIncome: function (income, callback) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        return db.query("INSERT INTO income_tbl VALUES (?,?,?,?,?)", [, income.fkuserid, income.amount, income.remarks, dateTime], callback);
    },
    deleteIncome: function (iid, callback) {
        return db.query("delete from income_tbl where iid=?", [iid], callback);
    },
    updateIncome: function (iid, income, callback) {
        return db.query("update income_tbl set amount=?,remarks=? where iid=?", [income.amount, income.remarks, iid], callback);
    }

};
module.exports = income;