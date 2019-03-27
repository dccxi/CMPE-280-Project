var express = require('express');
var router = express.Router();

var prediction_controller = require('../controllers/predictionController');
var admission_controller = require('../controllers/admissionController');

router.get('/login_form', function (req, res) {
  res.render('login_form', {title: 'Login Form'})
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'College Admission Predictor' });
});

router.get('/about', function (req, res) {
  var desc = "Hi, this is the about page. This is a web app for CMPE 280 class.";
  res.render('about', { title: 'About', desc: desc});
});

router.get('/predict', function(req, res, next) {
  res.render('predict', { title: 'Predict Your Admission!' });
});
router.post('/predict', prediction_controller.prediction_post);

router.get('/search',function(req,res){
    res.render('search', {title: 'Ajax tab 1'});
})

router.get('/view/all',function(req,res){
    res.render('view_all', {title: 'Ajax tab 2', admissions: prediction_controller.admission_list_all_get()});
})

//
router.post('/admission/create', admission_controller.admission_create_post);
router.post('/admission/update', admission_controller.admission_update_post);
router.post('/admission/delete', admission_controller.admission_delete_post);

module.exports = router;
