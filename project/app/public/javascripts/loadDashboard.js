function createAlert(x){
    alert(x);

}

console.log("loadDashboard.js loaded");
let dailyTrend = document.getElementById('dailyTrend').getContext('2d');
let seatsElement = document.getElementById('seatsFilled').getContext('2d');
let greDistribution = document.getElementById('gre_dist').getContext('2d');
let toeflDistribution = document.getElementById('toefl_dist').getContext('2d');
let student_comparison = document.getElementById('compare_students').getContext('2d');
document.getElementById('seatsFilled').height = 250;
document.getElementById('dailyTrend').height = 75;
Chart.defaults.global.defaultFontFamily='Helvetica';
Chart.defaults.global.defaultFontSize=14;
Chart.defaults.global.defaultFontColor='#777';

trend_labels = ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4'];
trend_data = [7,20,21,3];

// console.log(document.getElementById('dashboard_data'));

let trend = new Chart(dailyTrend ,{
  type:'line', //bar, horizontal bar, pie, line, doughnut, radar, polar area
  data:{
    labels:trend_labels,
    datasets:[{
    label:'Submissions',
    data:trend_data,
    backgroundColor:'#f9cb8e',
      borderWidth:3,
      borderColor:'orange',
      hoverBorderWidth:3,
      hoverBorderColor:'#001'
      //fill:false
  }]
  },
  options:{
    title:{
      display:true,
      text:'Daily Submission Trend',
      fontSize:18
    },
    legend:{
      dispaly:true,
      position:'top'
    },
    layout:{
      padding:{

      }
    },
    tooltips:{
      enabled:true
    }
  }

});

// let seatsFilled = new Chart(seatsElement,{
//   type:'doughnut',
//   data:{
//     labels:['Filled', 'Empty'],
//     datasets:[{
//       label:['CS'],
//       data:[12,138],
//       backgroundColor:['#f98686','#ed0739']
//     },
//              {
//                data:[40,110],
//                label:['CE'],
//                backgroundColor:['#72ad84','#018e2b']
//              },
//               {
//                 data:[1,69],
//                 label:['IS'],
//                backgroundColor:['#89ddf4','#017493']
//               },
//               {
//                 data:[25,5],
//                 label:['AI'],
//                backgroundColor:['#dee29a','#e9f904']
//               }
//              ]
//   },
//   options:{
//     title:{
//       display:true,
//       text:'Seat filled per department',
//       fontSize:18
//     },
//     scales:{
//       yAxes: [{
//         stacked: true
//       }],
//       xAxes: [{
//         stacked: true
//       }]
//     }
//   }
// });
//Seats filled in the CS school
seats_label = ['CS', 'CE', 'IS', 'AI'];
seats_filled_data = [12,40,1,25];
seats_empty_data = [138,110,29,5];
let seatsFilled = new Chart(seatsElement,{
  type:'bar',
  data:{
    labels:seats_label,
    datasets:[{
      label:['Filled'],
      data: seats_filled_data,
      backgroundColor:['#f7c53b','#f7c53b','#f7c53b','#f7c53b'],
      borderWidth:1,
      borderColor:'#bfbfbf',
      hoverBorderWidth:3,
      hoverBorderColor:'#a7adaf'
    },
              {
                data:seats_empty_data,
                label:['Empty'],
               backgroundColor:'#3eb9f2',
                borderWidth:3,
      borderColor:'#b0b2b2',
      hoverBorderWidth:3,
      hoverBorderColor:'#7a7c7c'
              }
             ]
  },
  options:{
    title:{
      display:true,
      text:'Seat filled per department',
      fontSize:18
    },
    scales:{
      yAxes: [{
        stacked: true
      }/*,
             {
               ticks:{
                 max : 200,
                 stepSize : 25,
                 min : 25
               }
             }*/],
      xAxes: [{
        stacked: true
      }]
    }
  }
});

//Line Chart for GRE distribution
json_gre_dist = JSON.parse(document.getElementById('gre_dist_data').value);
console.log(json_gre_dist);
gre_labels = Object.keys(json_gre_dist);
gre_data = Object.values(json_gre_dist);
console.log(gre_labels,gre_data);
// gre_labels = [270, 280, 290, 300, 310, 320, 330, 340];
// gre_data = [10,15,21,40,400,340,210,4];

let greDist = new Chart(greDistribution ,{
  type:'line', //bar, horizontal bar, pie, line, doughnut, radar, polar area
  data:{
    labels: gre_labels,
    datasets:[{
    label:'Count',
    data: gre_data,
    backgroundColor:'#f9cb8e',
      borderWidth:3,
      borderColor:'orange',
      hoverBorderWidth:3,
      hoverBorderColor:'#001'
      //fill:false
  }]
  },
  options:{
    title:{
      display:true,
      text:'GRE Distribution',
      fontSize:18
    },
    legend:{
      dispaly:true,
      position:'top'
    },
    layout:{
      padding:{

      }
    },
    tooltips:{
      enabled:true
    }
  }

});

//Line chart for toefl distribution
json_toefl_dist = JSON.parse(document.getElementById('toefl_dist_data').value);
console.log(json_toefl_dist);
toefl_label = Object.keys(json_toefl_dist);
toefl_data = Object.values(json_toefl_dist);

// toefl_label = [60, 70, 80, 90, 100, 110, 120];
// toefl_data = [40,43,100,180,320,340,7];

let toeflDist = new Chart(toeflDistribution ,{
  type:'line', //bar, horizontal bar, pie, line, doughnut, radar, polar area
  data:{
    labels:toefl_label,
    datasets:[{
    label:'Count',
    data:toefl_data,
    backgroundColor:'#f9cb8e',
      borderWidth:3,
      borderColor:'orange',
      hoverBorderWidth:3,
      hoverBorderColor:'#001'
      //fill:false
  }]
  },
  options:{
    title:{
      display:true,
      text:'Toefl Distribution',
      fontSize:18
    },
    legend:{
      dispaly:true,
      position:'top'
    },
    layout:{
      padding:{

      }
    },
    tooltips:{
      enabled:true
    }
  }

});


//Radar chart for comparing students
var radar_labels = ['Quantitative', 'Verbal', 'AWA', 'Reading', 'Writing', 'Listening', 'Speaking', 'GPA'];
var data_s1 = [16900/170, 15500/170, 400/5, 2700/30, 2800/30, 3000/30, 3000/30,420/5 ];
var data_s2 = [15400/170, 17000/170, 500/5, 2900/30, 2100/30, 3000/30, 2300/30, 370/5];
console.log(data_s1);
let student_radar_graph = new Chart(student_comparison,{
  type:'radar',
  data:{
    labels:radar_labels,
    datasets:[{
      label:'Student 1',
      data: data_s1,
      backgroundColor: "rgba(200,0,0,0.2)"
    },
            {
              label:'Student 2',
              data:data_s2,
                    backgroundColor: "rgba(0,0,200,0.2)"
            }]
  },
  options:{
    title:{
      display:true,
      text:'Comparison',
      fontSize:18
    }
  }
});