var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdmissionSchema = new Schema(
  {
    toefl_score: {type: Number, required: true, min: 0, max: 120},
    gre_score: {type: Number, required: true, min: 260, max: 340},
    gpa: {type: Number, required: false},
    research: {type: Boolean, required: false},
    chance_of_admit: {type: Number, required: false}
  }
);

//Export model
module.exports = mongoose.model('Admission', AdmissionSchema);
