var express = require('express');
var router = express.Router();

var prediction_controller = require('../controllers/predictionController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'cmpe 280 project' });
});

router.get('/about', function (req, res) {
  res.send('About this CMPE 280 project...');
});

// TODO: Change to a POST request
router.get('/predict', prediction_controller.prediction_post);

module.exports = router;
