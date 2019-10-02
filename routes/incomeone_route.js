var express = require('express');
var router = express.Router();
var income = require('../models/income');

router.get('/:fkuserid?', function (req, res, next) {

    if (req.params.Fkuserid) {

        income.getIncomeByFkuserid(req.params.Fkuserid, function (err, rows) {

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
module.exports = router;