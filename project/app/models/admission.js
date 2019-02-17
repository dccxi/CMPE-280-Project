var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdmissionSchema = new Schema(
  {
    school_name: {type: String, required: true, max: 100},
    sat_score: {type: Number, required: false, min: 1600, max: 2400},
    gre_score: {type: Number, required: false, max: 330},
    admission_status: {type: Number, required: true}
  }
);


//Export model
module.exports = mongoose.model('Admission', AdmissionSchema);
