google.charts.load('current', {'packages':['corechart','line']});
google.charts.setOnLoadCallback(drawLine);
google.charts.setOnLoadCallback(drawPie1);
google.charts.setOnLoadCallback(drawPie2);
google.charts.setOnLoadCallback(drawInt1);
google.charts.setOnLoadCallback(drawInt2);
google.charts.setOnLoadCallback(drawInt3);

var height = 250;

function drawLine() {
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
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'Admit rate');
        data.addColumn('number', 'Enroll rate');
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
  fetch('/kpi/pie1', {
    method: 'GET'
  }).then(res => res.json())
    .then(res => {
      if (res) {
        var data = google.visualization.arrayToDataTable([
          ['College and School', 'Percentage'],
          ['Art',                     res.art],
          ['Science',             res.science],
          ['Engineering',     res.engineering],
          ['Others',               res.others]
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
      } else {
        throw new Error('line data fetch failed on server side')
      }
    })
    .catch(err => {
      console.error(err)
    })
}

function drawPie2() {
  fetch('/kpi/pie2', {
    method: 'GET'
  }).then(res => res.json())
    .then(res => {
      if (res) {
        var data = google.visualization.arrayToDataTable([
          ['Previous School',   'Percentage'],
          ['CA Community Colleges', res.comm],
          ['CA State Universities',res.state],
          ['Other UC Campus',   res.other_uc],
          ['Others',              res.others]
        ]);

        var options = {
          title: 'Admission distribution by School type',
          width: '100%',
          height: height,
          colors:['#8E2814','#0D6145','#8137B2','#CAC6BF'],
          legend: {maxLines: 3, textStyle: {fontSize: 10}},
          chartArea: {width: '100%', height: '79%', top: 50}
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart3'));

        chart.draw(data, options);
      } else {
        throw new Error('line data fetch failed on server side')
      }
    })
    .catch(err => {
      console.error(err)
    })
}

function drawInt1() {
  fetch('/kpi/int1', {
    method: 'GET'
  }).then(res => res.json())
    .then(res => {
      if (res) {
        var rows = []
        for (var i = 0; i < res.length; ++i) {
          var row = res[i]
          rows[row.year - '2010'] = [
            row.year, row.sat_med, row.sat_min, row.sat_max
          ]
        }
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'median');
        data.addColumn({id:'i0', type:'number', role:'interval'});
        data.addColumn({id:'i1', type:'number', role:'interval'});

        data.addRows(rows);

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
      } else {
        throw new Error('line data fetch failed on server side')
      }
    })
    .catch(err => {
      console.error(err)
    })

}


function drawInt2() {
  fetch('/kpi/int2', {
    method: 'GET'
  }).then(res => res.json())
    .then(res => {
      if (res) {
        var rows = []
        for (var i = 0; i < res.length; ++i) {
          var row = res[i]
          rows[row.year - '2010'] = [
            row.year, row.toefl_med, row.toefl_min, row.toefl_max
          ]
        }
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'median');
        data.addColumn({id:'i0', type:'number', role:'interval'});
        data.addColumn({id:'i1', type:'number', role:'interval'});

        data.addRows(rows);

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
      } else {
        throw new Error('line data fetch failed on server side')
      }
    })
    .catch(err => {
      console.error(err)
    })

}


function drawInt3() {
  fetch('/kpi/int3', {
    method: 'GET'
  }).then(res => res.json())
    .then(res => {
      if (res) {
        var rows = []
        for (var i = 0; i < res.length; ++i) {
          var row = res[i]
          rows[row.year - '2010'] = [
            row.year, row.gre_med, row.gre_min, row.gre_max
          ]
        }
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'median');
        data.addColumn({id:'i0', type:'number', role:'interval'});
        data.addColumn({id:'i1', type:'number', role:'interval'});

        data.addRows(rows);

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
      } else {
        throw new Error('line data fetch failed on server side')
      }
    })
    .catch(err => {
      console.error(err)
    })
}
