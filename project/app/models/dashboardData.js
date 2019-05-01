var mongoose = require('mongoose');
var schema = mongoose.Schema({

    name: String,
    email: String,
    toefl_score: {type: Number, required: false, min: 0, max: 120},
    gre_score: {type: Number, required: false, min: 260, max: 340},
    gpa: {type: Number, required: true},
    research: {type: Boolean, required: true},
    chance_of_admit: {type: Boolean, required: true},
    date: {type: Date}
});

var admission_data = module.exports = mongoose.model('AdmissionData', schema);

//get all the data
module.exports.getAdmissionData = function(callback, options){
    admission_data.find();
}
