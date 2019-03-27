var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PredictionSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: String,
    email: String,
    toefl_score: {type: Number, required: false, min: 0, max: 120},
    gre_score: {type: Number, required: false, min: 160, max: 330},
    gpa: {type: Number, required: true},
    research: {type: Boolean, required: true},
    chance_of_admit: {type: Boolean, required: true}
  }
);

//Export model
module.exports = mongoose.model('Prediction', PredictionSchema);
