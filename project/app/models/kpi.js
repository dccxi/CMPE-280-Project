var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var KpiSchema = new Schema(
    {
        year: { type: String, required: true },
        admin: { type: Number, required: true },
        enroll: { type: Number, required: true },
        dist: { type: Object, required: true },
        prev: { type: Object, required: true },
        sat_min: {type: Number, required:true},
        sat_med: {type: Number, required:true},
        sat_max: {type: Number, required:true},
        toefl_min: {type: Number, required:true},
        toefl_med: {type: Number, required:true},
        toefl_max: {type: Number, required:true},
        gre_min: {type: Number, required:true},
        gre_med: {type: Number, required:true},
        gre_max: {type: Number, required:true}
    }
)

module.exports = mongoose.model('KPI', KpiSchema);
