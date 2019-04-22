google.charts.load('current', {'packages':['corechart','line']});
google.charts.setOnLoadCallback(drawLine);
google.charts.setOnLoadCallback(drawPie1);
google.charts.setOnLoadCallback(drawPie2);
google.charts.setOnLoadCallback(drawInt1);
google.charts.setOnLoadCallback(drawInt2);
google.charts.setOnLoadCallback(drawInt3);

var height = 250;

function drawLine() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Admit rate');
  data.addColumn('number', 'Enroll rate');
  fetch('/kpi/line', {
    method: 'GET'
  }).then(res => res.json())
    .then(res => {
      if (res) {
        var rows = []
        for (var i = 0; i < res.length; ++i) {
          var row = res[i]
          rows[row.year - '2010'] = [
            row.year, row.admin, row.enroll
          ]
        }
        data.addRows(rows);
        var options = {'title' : 'Admission rate & Enrollment rate since 2010',
          hAxis: {
            title: 'Year'
          },
          vAxis: {
            title: 'Percentage'
          },
          height: height,
          pointSize: 10,
          series: {
            0: { pointShape: 'circle' },
            1: { pointShape: 'star' },
          },
          pointsVisible: true,
        };
        // Instantiate and draw the chart.
        var chart = new google.visualization.LineChart(document.getElementById('chart1'));
        chart.draw(data, options);
      } else {
        throw new Error('line data fetch failed on server side')
      }
    })
    .catch(err => {
      console.error(err)
    })
}

function drawPie1() {

  var data = google.visualization.arrayToDataTable([
    ['College and School', 'Percentage'],
    ['Art',                         6.2],
    ['Science',                    14.8],
    ['Engineering',                68.2],
    ['Others',                     10.8],
  ]);

  var options = {
    title: 'Admission distribution by College and School',
    width: '100%',
    height: height,
    colors:['#2D63D0','#1CB03F','#B07A1C','#CAC6BF'],
    legend: {maxLines: 3, textStyle: {fontSize: 10}},
    chartArea: {width: '100%', height: '79%',top: 50}
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart2'));

  chart.draw(data, options);
}

function drawPie2() {

  var data = google.visualization.arrayToDataTable([
    ['Previous School', 'Percentage'],
    ['CA Community Colleges',     85],
    ['CA State Universities',  1],
    ['Other UC Campus',      4],
    ['Others', 9],
  ]);

  var options = {
    title: 'Admission distribution by School type',
    width: '100%',
    height: height,
    colors:['#8E2814','#0D6145','#8137B2','#CAC6BF'],
    legend: {maxLines: 3, textStyle: {fontSize: 10}},
    chartArea: {width: '100%', height: '79%', top: 50},
    slices: {  1: {offset: 0.25},
              2: {offset: 0.15},
              3: {offset: 0.00},
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart3'));

  chart.draw(data, options);
}

function drawInt1() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'median');
  data.addColumn({id:'i0', type:'number', role:'interval'});
  data.addColumn({id:'i1', type:'number', role:'interval'});

  data.addRows([
      ['2010', 1270, 1160, 1350],
      ['2011', 1300, 1180, 1440],
      ['2012', 1320, 1160, 1450],
      ['2013', 1310, 1160, 1500],
      ['2014', 1400, 1340, 1480],
      ['2015', 1390, 1280, 1510],
      ['2016', 1410, 1300, 1510],
      ['2017', 1470, 1290, 1580],
      ['2018', 1450, 1280, 1570],
    ]);

        // The intervals data as narrow lines (useful for showing raw source data)
  var options_lines = {
      title: 'SAT median [min,max] scores since 2010',
      curveType: 'line',
      lineWidth: 4,
      intervals: { 'style':'boxes' },
      legend: 'none',
  };

  var chart_lines = new google.visualization.LineChart(document.getElementById('chart4'));
  chart_lines.draw(data, options_lines);
}


function drawInt2() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'median');
  data.addColumn({id:'i0', type:'number', role:'interval'});
  data.addColumn({id:'i1', type:'number', role:'interval'});

  data.addRows([
      ['2010', 100, 87, 110],
      ['2011', 102, 89, 112],
      ['2012', 101, 90, 114],
      ['2013', 104, 92, 115],
      ['2014', 105, 94, 115],
      ['2015', 110, 94, 117],
      ['2016', 110, 92, 118],
      ['2017', 108, 90, 118],
      ['2018', 110, 94, 118],
    ]);

        // The intervals data as narrow lines (useful for showing raw source data)
  var options_lines = {
      title: 'TOEFL median [min,max] scores since 2010',
      curveType: 'line',
      lineWidth: 4,
      intervals: { 'style':'boxes' },
      legend: 'none',
  };

  var chart_lines = new google.visualization.LineChart(document.getElementById('chart5'));
  chart_lines.draw(data, options_lines);
}


function drawInt3() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'median');
  data.addColumn({id:'i0', type:'number', role:'interval'});
  data.addColumn({id:'i1', type:'number', role:'interval'});

  data.addRows([
      ['2010', 322, 310, 330],
      ['2011', 322, 308, 334],
      ['2012', 322, 308, 333],
      ['2013', 321, 314, 333],
      ['2014', 323, 314, 335],
      ['2015', 323, 318, 337],
      ['2016', 325, 318, 340],
      ['2017', 324, 320, 336],
      ['2018', 324, 321, 336],
    ]);

  // The intervals data as narrow lines (useful for showing raw source data)
  var options_lines = {
      title: 'GRE median [min,max] scores since 2010',
      curveType: 'line',
      lineWidth: 4,
      intervals: { 'style':'boxes' },
      legend: 'left',
  };

  var chart_lines = new google.visualization.LineChart(document.getElementById('chart6'));
  chart_lines.draw(data, options_lines);
}
