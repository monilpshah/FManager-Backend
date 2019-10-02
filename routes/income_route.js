var express = require('express');
var router = express.Router();
var income = require('../models/income');

router.get('/:iid?', function (req, res, next) {

    if (req.params.iid) {

        income.getIncomeByIid(req.params.iid, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        income.getAllIncome(function (err, rows) {

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

    income.addIncome(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:iid', function (req, res, next) {

    income.deleteIncome(req.params.iid, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});
router.put('/:iid', function (req, res, next) {

    income.updateIncome(req.params.iid, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;