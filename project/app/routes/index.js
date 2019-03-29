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

router.get('/view/all', admission_controller.admission_list_all_get);

router.post('/admission', admission_controller.admission_create_post);
router.put('/admission/:id', admission_controller.admission_update_post);
router.delete('/admission/:id', admission_controller.admission_delete_post);
router.post('/admission/search', admission_controller.admission_search_post)

module.exports = router;
