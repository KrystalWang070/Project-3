Plotly.d3.csv("Resources/DOW.csv", function(buf){ 
  var x_time = [], y_price = [];
  for (var i = 0; i < buf.length; i++) {
    row = buf[i];
    x_time.push( row['Time'] );
    y_price.push( row['Open'] );
  }
  var trace1 = {
    x: x_time,
    y: y_price,
    mode: 'lines',
    type: 'scatter'
  };
  var data = [trace1];
  var layout = {
    yaxis: {
       tickformat: '.0' 
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