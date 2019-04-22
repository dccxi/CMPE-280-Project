var KPI = require('../models/kpi')

exports.KPI_line_plot = function (req, res) {
    KPI.find({},{
        year: 1,
        admin: 1,
        enroll: 1,
        _id: 0
    }).exec(function (err, data) {
        if (err) { return next(err) }
        else {
            res.json(data);
        }
    })
}
