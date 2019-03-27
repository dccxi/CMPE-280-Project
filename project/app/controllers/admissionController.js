var Admission = require('../models/admission');

exports.admission_list_all_get = function () {
    Admission.find()
        .limit(50)
        .exec(function (err, admissions) {
            if (err) { return next(err); }
            // Success, return a list of admission objects
            return admissions;
        })

};

exports.admission_search_post = function (req, res, next) {
  // Default values
  var gre_lower_bound = 260;
  var gre_upper_bound = 340;
  var toefl_lower_bound = 0;
  var toefl_upper_bound = 120;

  if (req.body.gre_lower_bound != undefined) {
    gre_lower_bound = req.body.gre_lower_bound;
  }
  if (req.body.gre_upper_bound != undefined) {
    gre_upper_bound = req.body.gre_upper_bound;
  }
  if (req.body.toefl_lower_bound != undefined) {
    toefl_lower_bound = req.body.toefl_lower_bound;
  }
  if (req.body.toefl_upper_bound != undefined) {
    toefl_upper_bound = req.body.toefl_upper_bound;
  }

  var query = Admission.find({
    'gre': {
      '$gte': gre_lower_bound,
      '$lt': gre_upper_bound
    },
    'toefl': {
      '$gte': toefl_lower_bound,
      '$lt': toefl_upper_bound
    }
  });

  query.select('gre_score, toefl_score, gpa, research, chance_of_admit');
  query.limit(50);

  // execute the query at a later time
  query.exec(function (err, admissions) {
      if (err) { return next(err); }
      res.json({ status: 0, payload: admissions })
  })
}

exports.admission_create_post = function (req, res, next) {
    var obj = new Admission(
        {
            toefl: req.body.toefl_score,
            gre_score: req.body.gre_score,
            gpa: req.body.gpa,
            research: req.body.research,
            chance_of_admit: req.body.chance_of_admit
        }
    );
    // Save new admission.
    obj.save(function (err) {
        if (err) { return next(err); }
        // Success
        // You can access the ObjectId by using obj.id
        res.json({ status: 0, payload: obj });
    });
};

exports.admission_update_post = function (req, res, next) {
    var obj = new Admission(
        {
            toefl: req.body.toefl_score,
            gre_score: req.body.gre_score,
            gpa: req.body.gpa,
            research: req.body.research,
            chance_of_admit: req.body.chance_of_admit,
            _id: req.body.id
        }
    );

    // Data from form is valid. Update the record.
    Admission.findByIdAndUpdate(req.body.id, obj, {}, function (err, obj) {
        if (err) { return next(err); }
        // Successful - return status code 0
        res.json({ status: 0 });
    });
};

exports.admission_delete_post = function (req, res, next) {
    Admission.findByIdAndRemove(req.body.id, function deleteAdmission(err) {
        if (err) { return next(err); }
        // Success
        res.json({ status: 0 })
    })
};
