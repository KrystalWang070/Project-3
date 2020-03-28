//https://community.plotly.com/t/add-labels-to-time-series-read-from-csv/11586
Plotly.d3.csv("Resources/usa_combined.csv", function(buf){ 
  var x_time = [], y_priceClose = [], y_covidUS = [];
  for (var i = 0; i < buf.length; i++) {
    row = buf[i];
    x_time.push( row['time'] );
    y_priceClose.push( row['last'] );
    y_covidUS.push( row['cases'] );
  }
  var traceDow = {
    x: x_time,
    y: y_priceClose,
    mode: 'lines',
    type: 'scatter',
    name: 'Dow Jones Close Price'
  };
  var traceCovidUS = {
    x: x_time,
    y: y_covidUS,
    mode: 'lines',
    type: 'scatter',
    name: 'Covis-19 Reported Cases'
  };

  var data = [traceDow, traceCovidUS];
  var layout = {
    yaxis: {
       tickformat: '.0', 
    title: "USA Covid-19 Cases & DOW Jones close price",
    xaxis: { title: "X-Axis" },
    yaxis: { title: "Y-Axis"}
    }
  };
  Plotly.newPlot('plot', data, layout);
  } );
// //https://plotly.com/javascript/time-series/
// Plotly.d3.csv("https://github.com/KrystalWang070/Project-3/blob/master/Resources/DOW.csv", function(err, rows){
//   function unpack(rows, key) {
//   return rows.map(function(row) { return row[key]; });
// }
// // Create traces for different datasets
// var traceDow = {
//   type: 'scatter',
//   mode: 'lines',
//   name: 'Dow & Covid-19 in USA',
//   x: unpack(rows, 'Time'),
//   y: unpack(rows, 'Open')
// };
// // var trace2 = {
// //   x: data.map(row => row.pair),
// //   y: data.map(row => row.romanSearchResults),
// //   text: data.map(row => row.romanName),
// //   name: "Roman",
// //   type: "bar"
// // };
// // Combining traces
// var data = [traceDow];
// var layout = {
//   title: "Dow & Covid-19 in USA"
// };
// // Render the plot to the div tag with id "plot"
// Plotly.newPlot('plot', data, layout);
// })