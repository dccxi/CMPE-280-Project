var express = require('express');
var router = express.Router();

var prediction_controller = require('../controllers/predictionController');
var admission_controller = require('../controllers/admissionController');
var kpi_controller = require('../controllers/kpiController');

router.get('/login_form', function (req, res) {
  res.render('login_form', {title: 'Login Form'})
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UCLA Admission Predictor' });
});

router.get('/about', function (req, res) {
  var desc = "Thank you for using College Predictor";
  res.render('about', { title: 'About', desc: desc});
});

router.get('/predict', function(req, res, next) {
  res.render('predict', { title: 'Predict Your Admission!' });
});
router.post('/predict', prediction_controller.prediction_post);

router.get('/search',function(req,res){
    res.render('search', {title: 'Ajax tab 1'});
})

router.get('/dashboard',function(req,res){
    res.render('dashboard', {title: 'Dashboard'});
})

router.get('/view/all', admission_controller.admission_list_all_get);
router.get('/charts', admission_controller.charts_get);

router.post('/admission', admission_controller.admission_create_post);
router.put('/admission/:id', admission_controller.admission_update_post);
router.delete('/admission/:id', admission_controller.admission_delete_post);
router.post('/admission/search', admission_controller.admission_search_post);

router.get('/kpi/line', kpi_controller.KPI_line_plot);
router.get('/kpi/pie1', kpi_controller.KPI_pie1);
router.get('/kpi/pie2', kpi_controller.KPI_pie2);
router.get('/kpi/int1', kpi_controller.KPI_int1);
router.get('/kpi/int2', kpi_controller.KPI_int2);
router.get('/kpi/int3', kpi_controller.KPI_int3);
module.exports = router;
