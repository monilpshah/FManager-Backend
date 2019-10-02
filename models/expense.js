var db = require('../dbconnection'); //reference of dbconnection.js

var expense = {

    getAllExpense: function (callback) {
        return db.query("Select * from expense_tbl", callback);
    },

    getExpenseByFkuserid: function (fkuserid, callback) {
        return db.query("select * from expense_tbl where fkuserid=?", [fkuserid], callback);
    },
    getExpenseByeEid: function (eid, callback) {
        return db.query("select * from expense_tbl where eid=?", [eid], callback);
    },
    addExpense: function (expense, callback) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        return db.query("Insert into expense_tbl values(?,?,?,?,?)", [,expense.fkuserid, expense.amount, expense.remarks,dateTime], callback);
    },
    deleteExpense: function (eid, callback) {
        return db.query("delete from expense_tbl where eid=?", [eid], callback);
    },
    updateExpense: function (eid, expense, callback) {
        return db.query("update expense_tbl set amount=?,remarks=?,date=? where eid=?", [expense.amount, expense.remarks, expense.date, eid], callback);
    }

};
module.exports = expense;