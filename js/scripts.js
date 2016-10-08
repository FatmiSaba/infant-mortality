// create an empty array for our converted json

 var dataArray = [];
 // create headers for the data array
 var headers = ['Year', 'Total', 'Boys', 'Girls'];
 // push the headers to the data array
 dataArray.push(headers);
 // loop through the json, converting each object into an appropriate array
 json.forEach(function(d){

   dataArray.push([d.year.toString(),d.total,d.boys,d.girls]);
 });
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {


  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    chartArea: {
      left: 50,
      top: 20,
      bottom: 50,
      right: 100
    },
    colors: ['#888','#2c7bb6','#d7191c'],
    focusTarget: "category",
    hAxis: {
      title: 'Year'

    },

    vAxis: {
      title: 'Infant Mortality Rate'

    }

  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}
