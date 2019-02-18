var Prediction = require('../models/prediction');

var getPredictScore = function (gre, toefl, res) {
    // return random value as prediction for now (prototyping)
    res.send((Math.random() * 100).toString().slice(0, 4));
}

// Display list of all BookInstances.
exports.prediction_post = function (req, res) {
    var { name, gre, toefl } = req.body;
    if (name && gre && toefl) {
        getPredictScore(gre, toefl, res)
    } else {
        res.send('Invalid operation')
    }
};
