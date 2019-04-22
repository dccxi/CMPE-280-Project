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


let calcAverage = function(data){
  var gre_sum = 0;
  var gre_count = 0;
  var toefl_sum = 0;
  var toefl_count = 0;
  data.forEach(element => {
    gre_sum+= element.gre_score;
    toefl_sum += element.toefl_score;

    if(element.gre_score > 0)
      gre_count++;
    if(element.toefl_score > 0)
      toefl_count++;
  });
  console.log('Averages are GRE: '+gre_sum/gre_count + ' toefl average: '+ toefl_sum/toefl_count);
  return {'gre_average' : gre_sum/gre_count,
            'toefl_average' : toefl_sum/toefl_count} ;
}


let frequencyTable = function(data, exam){
  freq_table = {};
  data.forEach(element =>{
    if(exam == 'gre')
    {
    if(freq_table[element.gre_score] != null)
    {
      freq_table[element.gre_score]+=1;
    }
    else{
      freq_table[element.gre_score] = 1;
    }
  }
  if(exam == 'toefl'){
    if(freq_table[element.toefl_score] != null)
      freq_table[element.toefl_score]+=1;
    else
      freq_table[element.toefl_score] = 1;
  }
  });
  return freq_table;
}

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


exports.dashboard_data = function( req, res){
  Admission.find().exec(function(err, data){
    if (err) { return next(err); }
          else {
            // Success, return a list of admission objects
            //console.log(data);
            var avg_data = calcAverage(data);
            var gre_frequency_table = frequencyTable(data, 'gre');
            var toefl_frequqency_table = frequencyTable(data, 'toefl');

            res.render('dashboardData', 
            {'gre_avg' : parseInt(avg_data.gre_average), 
              'toefl_avg' : parseInt(avg_data.toefl_average),
              'gre_dist' : gre_frequency_table,
              'toefl_dist' : toefl_frequqency_table
            });
          }
  })
};