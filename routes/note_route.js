var express = require('express');
var router = express.Router();
var note = require('../models/note');

router.get('/:nid?', function (req, res, next) {

    if (req.params.nid) {

        note.getNoteByNid(req.params.nid, function (err, rows) {

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
router.post('/', function (req, res, next) {

    note.addNote(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:nid', function (req, res, next) {

    note.deleteNote(req.params.nid, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});
router.put('/:nid', function (req, res, next) {

    note.updateNote(req.params.nid, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;