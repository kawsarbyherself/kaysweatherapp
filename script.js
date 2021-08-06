$.getJSON(
    'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=6bf9704b807093b7ca3173d3f2a77f31' , 
function(data) {
    console.log(data);

    var temp = data.main.temp;
    var weather = data.weather[0].main

    var icon =
    "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    
    $(".icon").attr("src",icon);
    $(".weather").append(weather);
    $(".temp").append(temp); 

  }

);