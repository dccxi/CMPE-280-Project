var Prediction = require('../models/prediction');

var get_score = function (payload) {
    // return random value as prediction for now (prototyping)
    return (Math.random() * 100).toString().slice(0, 4);
}

exports.prediction_post = function (req, res) {
    var payload = {
        name: req.body.name,
        school_name: req.body.school_name,
        gre: req.body.gre_score,
        sat: req.body.sat_score,
    };
    var score = get_score(payload);
    res.json({
        status: 0,
        result: score
    });
};
