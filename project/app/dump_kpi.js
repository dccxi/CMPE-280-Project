var KPI = require('./models/kpi')

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
})

for (var i = "0"; i < "9"; ++i) {
    doc = {}
    doc.year = "201" + i;
    doc.admin = Math.round((20+Math.random()*15)*100)/100;
    doc.enroll = Math.round((55+Math.random()*10)*100)/100;
    doc.dist = {
        art: 6.2,
        science: 14.8,
        engineering: 68.2,
        others: 10.8
    };
    doc.prev = {
        comm: 82.2,
        state: 1.6,
        other_uc: 4,
        others: 5.8
    };
    doc.sat_min = Math.round(1100 + Math.random() * 200);
    doc.sat_max = Math.round(1600 - Math.random() * 100);
    doc.sat_med = Math.round(doc.sat_min + Math.random() * (doc.sat_max - doc.sat_min));
    doc.toefl_min = Math.round(80 + Math.random() * 20);
    doc.toefl_max = Math.round(110 - Math.random() * 10);
    doc.toefl_med = Math.round(doc.sat_min + Math.random() * (doc.sat_max - doc.sat_min));
    doc.gre_min = Math.round(300 + Math.random() * 20);
    doc.gre_max = Math.round(330 - Math.random() * 10);
    doc.gre_med = Math.round(doc.sat_min + Math.random() * (doc.sat_max - doc.sat_min));
    new KPI(doc).save()
        .then(() => console.log('saved'))
        .catch(err => console.log(err.message))
}
