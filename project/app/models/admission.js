var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var AdmissionSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    toefl_score: {type: Number, required: false, min: 0, max: 120},
    gre_score: {type: Number, required: false, min: 160, max: 330},
    gpa: {type: Number, required: true},
    research: {type: Boolean, required: true},
    chance_of_admit: {type: Boolean, required: true}
  }
);

//Export model
module.exports = mongoose.model('Admission', AdmissionSchema);
