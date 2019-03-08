var express = require('express');
var router = express.Router();

var prediction_controller = require('../controllers/predictionController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'College Admission Predictor' });
});

router.get('/about', function (req, res) {
  var desc = "Hi, this is the about page. This is a web app for CMPE 280 class.";
  res.render('about', { title: 'About', desc: desc});
});

///////////////////////////////
router.get('/predict', function(req, res, next) {
  res.render('predict', { title: 'Predict Your Admission!' });
});

// TODO: Change to a POST request
router.post('/predict', prediction_controller.prediction_post);

router.get('/login_form', function (req, res) {
  res.render('login_form', {title: 'Login Form'})
});

router.get('/gre',function(req,res){
    res.render('gre', {title: 'Ajax tab 1'});
})

router.get('/toefl',function(req,res){
    res.render('toefl', {title: 'Ajax tab 2'});
})

router.get('/sat',function(req,res){
    res.render('sat', {title: 'Ajax tab 3'});
})

module.exports = router;
