//1
google.charts.load('current', {'packages':['corechart','line']});
google.charts.setOnLoadCallback(drawLine);

function drawLine() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Admit rate');
  data.addColumn('number', 'Enroll rate');
  data.addRows([
    ['2010', 31.45, 61.50],
    ['2011', 30.14, 59.67],
    ['2012', 32.3, 60.41],
    ['2013', 31.24, 57.43],
    ['2014', 31.39, 61.51],
    ['2015', 26, 60],
    ['2016', 26, 59],
    ['2017', 25, 57],
    ['2018', 23, 61],
  ]);
  var options = {'title' : 'Admission rate & Enrollment rate since 2010',
    hAxis: {
      title: 'Year'
    },
    vAxis: {
      title: 'Percentage'
    },
    width: 400,
    height: 250,
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
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPie1);

function drawPie1() {

  var data = google.visualization.arrayToDataTable([
    ['College and School', 'Percentage'],
    ['Letters and Science',     90.86],
    ['Arts and Architect',      1.79],
    ['Eng and Science',  6.6],
    ['Others', 0.75],
  ]);

  var options = {
    title: 'Admission distribution by College and School',
    width: 350,
    height: 250,
    colors:['#2D63D0','#1CB03F','#B07A1C','#CAC6BF'],
    legend: {maxLines: 3, textStyle: {fontSize: 10}},
    chartArea: {width: '100%', height: '79%',top: 50},
    slices: {  1: {offset: 0.25},
               2: {offset: 0.15},
               3: {offset: 0.00},
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart2'));

  chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPie2);

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
    width: 350,
    height: 250,
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

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawInt1);

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

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawInt2);

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

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawInt3);

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
