var csv = require('csvtojson');
var Admission = require('./models/admission')

var csvFilePath = './Admission_Predict_Ver1.1.csv';

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
})

csv({
  noheader: false,
  headers: ['Serial No', 'gre_score', 'toefl_score', 'University Rating', 'SOP', 'LOR', 'gpa', 'research', 'chance_of_admit'],
  colParser: {
    'Serial No': 'omit',
    'University Rating': 'omit',
    'SOP': 'omit',
    'LOR': 'omit',
    'gre_score': 'number',
    'toefl_score': 'number',
    'gpa': 'number',
    'research': function (item) {
      return item == '0' ? false : true;
    },
    'chance_of_admit': 'number'
  }
}).fromFile(csvFilePath).then(jsonObj => {
  for (var doc of jsonObj) {
    new Admission(doc).save()
      .then(() => console.log('saved'))
      .catch(err => console.log('err.message'))
  }
})
