//https://community.plotly.com/t/add-labels-to-time-series-read-from-csv/11586
// USA plot
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
    name: 'COVID-19 Reported Cases'
  };

  var data = [traceDow, traceCovidUS];
  var layout = {
    yaxis: {
       tickformat: '.0', 
    title: "USA Covid-19 Cases & DOW Jones Close Price",
    xaxis: { title: "X-Axis" },
    yaxis: { title: "Y-Axis"}
    }
  };
  Plotly.newPlot('plot-us', data, layout);
  } );
// Korea plot
Plotly.d3.csv("Resources/korea_combined.csv", function(buf){ 
  var x_time = [], y_priceClose = [], y_covidKorea = [];
  for (var i = 0; i < buf.length; i++) {
    row = buf[i];
    x_time.push( row['time'] );
    y_priceClose.push( row['last'] );
    y_covidKorea.push( row['cases'] );
  }
  var traceKOSPI = {
    x: x_time,
    y: y_priceClose,
    mode: 'lines',
    type: 'scatter',
    name: 'KOSPI Close Price'
  };
  var traceCovidKorea = {
    x: x_time,
    y: y_covidKorea,
    mode: 'lines',
    type: 'scatter',
    name: 'COVID-19 Reported Cases'
  };

  var data = [traceDow, traceCovidKorea];
  var layout = {
    yaxis: {
       tickformat: '.0', 
    title: "South Korea Covid-19 Cases & KOSPI Close Price",
    xaxis: { title: "X-Axis" },
    yaxis: { title: "Y-Axis"}
    }
  };
  Plotly.newPlot('plot-sk', data, layout);
});
// UK plot
Plotly.d3.csv("Resources/uk_combined.csv", function(buf){ 
    var x_time = [], y_priceClose = [], y_covidUK = [];
    for (var i = 0; i < buf.length; i++) {
      row = buf[i];
      x_time.push( row['time'] );
      y_priceClose.push( row['last'] );
      y_covidUK.push( row['cases'] );
    }
    var traceFTSE = {
      x: x_time,
      y: y_priceClose,
      mode: 'lines',
      type: 'scatter',
      name: 'FTSE Close Price'
    };
    var traceCovidUK = {
      x: x_time,
      y: y_covidFTSE,
      mode: 'lines',
      type: 'scatter',
      name: 'COVID-19 Reported Cases'
    };
    var data = [traceFTSE, traceCovidUK];
    var layout = {
      yaxis: {
         tickformat: '.0', 
      title: "United Kingdom Covid-19 Cases & FTSE Close Price",
      xaxis: { title: "X-Axis" },
      yaxis: { title: "Y-Axis"}
      }
    };
    Plotly.newPlot('plot-uk', data, layout);
});