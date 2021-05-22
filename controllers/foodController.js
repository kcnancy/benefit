/* eslint-disable no-undef */
var exports = module.exports = {};

// Call User model
let Food = require("../models/food");

exports.newFood = function(req, res) {
    let token = getToken(req.headers);
    if (token) {
        console.log(req.body);
        let newFood = new Food({
            protein: req.body.protein,
            carbs: req.body.carbs,
            fiber: req.body.fiber,
            fat: req.body.fat,
            calories: req.bod.calories
        });

        newFood.save(function(err) {
            if (err) {
                return res.json({success: false, msg: 'Save food failed.'});
            }
            res.json({success: true, msg: 'Successfully created new food diary.'});
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

exports.foodDiary = function(req, res) {
    let token = getToken(req.headers);
    if (token) {
        // eslint-disable-next-line array-callback-return
        Food.find(function (err, foods) {
            if (err) return next(err);
            res.json(foods);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

getToken = function (headers) {
    if (headers && headers.authorization) {
        let parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};