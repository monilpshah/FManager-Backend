var db = require('../dbconnection'); //reference of dbconnection.js

var note = {

    getAllNotes: function (callback) {
        return db.query("Select * from note_tbl", callback);
    },

    getNoteByFkuserid: function (fkuserid, callback) {
        return db.query("select * from note_tbl where fkuserid=?", [fkuserid], callback);
    },
    getNoteByNid: function (nid, callback) {
        return db.query("select * from note_tbl where nid=?", [nid], callback);
    },
    addNote: function (note, callback) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        return db.query("Insert into note_tbl values(?,?,?,?,?)", [, note.fkuserid, dateTime, note.title, note.note], callback);
    },
    deleteNote: function (nid, callback) {
        return db.query("delete from note_tbl where nid=?", [nid], callback);
    },
    updateNote: function (nid, note, callback) {
        return db.query("update note_tbl set title=?,note=? where nid=?", [note.title, note.note, nid], callback);
    }

};
module.exports = note;