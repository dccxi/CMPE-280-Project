var Admission = require('../models/admission');

exports.admission_list_all_get = function (req, res) {
    Admission.find()
        .limit(50)
        .exec(function (err, admissions) {
          if (err) { return next(err); }
          else {
            // Success, return a list of admission objects
            res.render('view_all', {admissions: admissions});
          }
        })
};

exports.charts_get = function (req, res) {
    Admission.find()
        .limit(50)
        .exec(function (err, admissions) {
          if (err) { return next(err); }
          else {
            // Success, return a list of admission objects
            res.render('charts', {admissions: admissions});
          }
        })
};

exports.admission_search_post = function (req, res, next) {
  // Default values
  var gre_lower_bound = Number(req.body.gre_lower_bound) || 260;
  var gre_upper_bound = Number(req.body.gre_upper_bound) || 340;
  var toefl_lower_bound = Number(req.body.toefl_lower_bound) || 0;
  var toefl_upper_bound = Number(req.body.toefl_upper_bound) || 120;

  Admission.find({
    'gre_score': {
      '$gte': gre_lower_bound,
      '$lte': gre_upper_bound
    },
    'toefl_score': {
      '$gte': toefl_lower_bound,
      '$lte': toefl_upper_bound
    }
  }).limit(50).exec(function (err, admissions) {
      if (err) { return next(err); }
      res.json({ status: 1, payload: admissions })
  })
}

exports.admission_create_post = function (req, res, next) {
    // Save new admission.
  console.log(req.body)
  new Admission(req.body).save()
    .then(doc => {
      res.json({ status: 1, id: doc._id });
    }).catch(err => {
      console.error(err.message);
      res.json({ status: 0, error: err.message})
    })
};

exports.admission_update_post = function (req, res, next) {
    Admission.findByIdAndUpdate(req.params.id, req.body, function (err, obj) {
        if (err) { return next(err); }
        else {
            // Successful - return status code 1
            res.json({ status: 1 });
        }
    });
};

exports.admission_delete_post = function (req, res, next) {
    Admission.findByIdAndRemove(req.params.id, function deleteAdmission(err) {
        if (err) { return next(err); }
        else {
            // Success
            res.json({ status: 1 })
        }
    })
};
