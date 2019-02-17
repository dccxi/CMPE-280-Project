var express = require('express');
var router = express.Router();

var prediction_controller = require('../controllers/predictionController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'College Admission Lottery!' });
});

router.get('/about', function (req, res) {
  res.send('About this CMPE 280 project...');
});

///////////////////////////////
router.get('/predict', function(req, res, next) {
  res.render('predict', { title: 'Predict Your Admission!' });
});

// TODO: Change to a POST request
router.post('/predict', prediction_controller.prediction_post);



module.exports = router;
