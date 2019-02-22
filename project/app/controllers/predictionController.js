var Prediction = require('../models/prediction');

var getPredictScore = function (gre, toefl, res) {
    // return random value as prediction for now (prototyping)
    res.json({
        status: 1,
        result: (Math.random() * 100).toString().slice(0, 4)
    });
}

// Display list of all BookInstances.
exports.prediction_post = function (req, res) {
    var { name, gre, toefl } = req.body;
    if (name && gre && toefl) {
        getPredictScore(gre, toefl, res)
    } else {
        res.json({
            status: 0,
            result: 'Invalid operation'
        })
    }
};
