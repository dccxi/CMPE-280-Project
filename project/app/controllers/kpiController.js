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

exports.KPI_pie1 = function (req, res) {
    KPI.find({
        year: '2018'
    }, {
            dist: 1,
            _id: 0
        }).exec((err, data) => {
            if (err) { return next(err) }
            else {
                res.json(data[0].dist)
            }
        })
}

exports.KPI_pie2 = function (req, res) {
    KPI.find({
        year: '2018'
    }, {
            prev: 1,
            _id: 0
        }).exec((err, data) => {
            if (err) { return next(err) }
            else {
                res.json(data[0].prev)
            }
        })
}

exports.KPI_int1 = function (req, res) {
    KPI.find({},{
        year: 1,
        sat_min: 1,
        sat_med: 1,
        sat_max: 1,
        _id: 0
    }).exec(function (err, data) {
        if (err) { return next(err) }
        else {
            res.json(data);
        }
    })
}

exports.KPI_int2 = function (req, res) {
    KPI.find({},{
        year: 1,
        toefl_min: 1,
        toefl_med: 1,
        toefl_max: 1,
        _id: 0
    }).exec(function (err, data) {
        if (err) { return next(err) }
        else {
            res.json(data);
        }
    })
}

exports.KPI_int3 = function (req, res) {
    KPI.find({},{
        year: 1,
        gre_min: 1,
        gre_med: 1,
        gre_max: 1,
        _id: 0
    }).exec(function (err, data) {
        if (err) { return next(err) }
        else {
            res.json(data);
        }
    })
}
