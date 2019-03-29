var Prediction = require('../models/prediction');

var get_score = function (payload) {
    // return random value as prediction for now (prototyping)
    return (Math.random() * 100).toString().slice(0, 4);
}

exports.prediction_post = function (req, res) {
    var payload = {
        name: req.body.name,
        email: req.body.email,
        gre: req.body.gre,
        toefl: req.body.toefl,
        comments: req.body.comments
    };
    var score = get_score(payload);
    res.json({
        status: 0,
        result: score
    });
};
