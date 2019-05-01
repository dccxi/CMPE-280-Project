var Prediction = require('../models/prediction');

exports.prediction_post = function (req, res) {
    var payload = {
        name: req.body.name,
        email: req.body.email,
        gre: req.body.gre,
        toefl: req.body.toefl,
        comments: req.body.comments
    };
    var spawn = require('child_process').spawn;
    var py = spawn('python3', ['./predict.py', payload.gre, payload.toefl])
    py.stdout.on('data', (data) => {
        res.json({
            status: 0,
            result: data.toString()
        })
    })
};
