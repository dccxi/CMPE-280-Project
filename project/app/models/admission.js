var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdmissionSchema = new Schema(
  {
    toefl_score: {type: Number, required: false, min: 0, max: 120},
    gre_score: {type: Number, required: false, min: 260, max: 340},
    gpa: {type: Number, required: true},
    research: {type: Boolean, required: true},
    chance_of_admit: {type: Number, required: true}
  }
);

//Export model
module.exports = mongoose.model('Admission', AdmissionSchema);
