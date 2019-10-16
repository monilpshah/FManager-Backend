var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.get('/:userid', function(req, res, next) {

    if (req.params.userid) {

        user.getUserByUserid(req.params.userid, function(err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {

        user.getAllUsers(function(err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/', function(req, res, next) {

    user.addUser(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:userid', function(req, res, next) {

    user.deleteUser(req.params.userid, function(err, count) {

        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }

    });
});
router.put('/:userid', function(req, res, next) {

    user.updateUser(req.params.userid, req.body, function(err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;