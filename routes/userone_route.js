var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.get('/:email?', function (req, res, next) {

    if (req.params.email) {

        user.getUserByEmail(req.params.email, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        user.getAllUsers(function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
});

router.delete('/:email', function (req, res, next) {

    user.deleteUserByEmail(req.params.email, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});

module.exports = router;