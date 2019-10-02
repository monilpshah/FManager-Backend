var express = require('express');
var router = express.Router();
var expense = require('../models/expense');

router.get('/:fkuserid?', function (req, res, next) {

    if (req.params.Fkuserid) {

        expense.getExpenseByFkuserid(req.params.Fkuserid, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        expense.getAllExpense(function (err, rows) {

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