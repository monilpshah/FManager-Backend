var express = require('express');
var router = express.Router();
var note = require('../models/note');

router.get('/:fkuserid?', function (req, res, next) {

    if (req.params.Fkuserid) {

        note.getNoteByFkuserid(req.params.Fkuserid, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        note.getAllNotes(function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
});
module.exports = router;