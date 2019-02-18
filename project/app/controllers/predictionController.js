var Prediction = require('../models/prediction');

var predict = function (gre, toefl) {
    // return random value as prediction for now (prototyping)
    return (Math.random() * 100).toString().slice(0, 4);
}

// Display list of all BookInstances.
exports.prediction_post = function (req, res) {
    var { name, gre, toefl } = req.body;
    if (name && gre && toefl) {
        var result = predict(gre, toefl);
        res.render('predict', {
            title: 'Prediction Result',
            name,
            gre,
            toefl,
            result
        });
    } else {
        res.send('Invalid operation')
    }
};
