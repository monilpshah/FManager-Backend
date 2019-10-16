var express = require('express');
var router = express.Router();
var expense = require('../models/expense');

router.get('/:eid', function(req, res, next) {

    if (req.params.eid) {

        expense.getExpenseByeEid(req.params.eid, function(err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {

        expense.getAllExpense(function(err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/', function(req, res, next) {

    expense.addExpense(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:eid', function(req, res, next) {

    expense.deleteExpense(req.params.eid, function(err, count) {

        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }

    });
});
router.put('/:eid', function(req, res, next) {

    expense.updateExpense(req.params.eid, req.body, function(err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;