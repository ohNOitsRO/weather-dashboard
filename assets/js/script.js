var today = dayjs();
var cityName;


$("#searchBtn").click(function(event){
  event.preventDefault();
  var cityName = $(this).siblings(".form-control").val();
  localStorage.setItem("search",cityName);
  console.log(cityName);
  getApi();



function getApi() {
    var requestFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=03e2b0141cd0f7d9d15a27103279bb3e&units=metric";
    var requestToday = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=03e2b0141cd0f7d9d15a27103279bb3e&units=metric";

    
  fetch(requestFiveDay)
      .then (function (response) {
        console.log(response);
        return response.json();
      })
      .then (function(data) {
        for (i = 1; i < 6; i++){
          var dayOfWeek = dayjs().add(i, 'day').format('MM/DD/YYYY');
          var weekdays = document.querySelector(".card-day"+(i-1));
          var icon = document.querySelector(".card-img"+(i-1));
          var weekdaysTemp = document.querySelector(".card-temp"+(i-1));
          var weekdaysWind = document.querySelector(".card-wind"+(i-1));
          var weekdaysHum = document.querySelector(".card-hum"+(i-1));
          weekdays.textContent = dayOfWeek;
          weekdaysTemp.textContent = "Temperature: " + (((data.list[(i-1)*8].main.temp)*9/5)+32) + " °F";
          weekdaysWind.textContent = "Wind Speed: " + data.list[(i-1)*8].wind.speed + " MPH";
          weekdaysHum.textContent = "Humidity: " + data.list[(i-1)*8].main.humidity + "%";

          if (data.list[(i-1)*8].weather[0].main === "Clear"){            
            icon.src = "https://openweathermap.org/img/wn/01d@2x.png"
            
          }
          if (data.list[(i-1)*8].weather[0].main === "Clouds"){            
            icon.src = "https://openweathermap.org/img/wn/02d@2x.png"
            
          }
          if (data.list[(i-1)*8].weather[0].main === "Rain"){            
            icon.src = "https://openweathermap.org/img/wn/10d@2x.png"
            
          }
          if (data.list[(i-1)*8].weather[0].main === "Thunderstorm"){            
            icon.src = "https://openweathermap.org/img/wn/11d@2x.png"
            
          }
          if (data.list[(i-1)*8].weather[0].main === "Snow"){            
            icon.src = "https://openweathermap.org/img/wn/13d@2x.png"
            
          }
          if (data.list[(i-1)*8].weather[0].main === "Mist"){            
            icon.src = "https://openweathermap.org/img/wn/50d@2x.png"
            
          }
      }
    });
          

  fetch(requestToday)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (todayData) {
        console.log(todayData);
          var todayWeather = document.querySelector("#current-weather");
          var icon = document.querySelector(".today-img");
          var todayTemp = document.querySelector(".today-temp");
          var todayWind = document.querySelector(".today-wind");
          var todayHum = document.querySelector(".today-hum");

          todayWeather.textContent = today.format('MMM D, YYYY');
          todayTemp.textContent = "Temperature: " + (((todayData.main.temp)*9/5)+32) + " °F";
          todayWind.textContent = "Wind Speed: " + todayData.wind.speed + " MPH";
          todayHum.textContent = "Humidity: " + todayData.main.humidity + " %";

          if (todayData.weather[0].main === "Clear"){            
            icon.src = "https://openweathermap.org/img/wn/01d@2x.png"
            
          }
          if (todayData.weather[0].main === "Clouds"){            
            icon.src = "https://openweathermap.org/img/wn/02d@2x.png"
            
          }
          if (todayData.weather[0].main === "Rain"){            
            icon.src = "https://openweathermap.org/img/wn/10d@2x.png"
            
          }
          if (todayData.weather[0].main === "Thunderstorm"){            
            icon.src = "https://openweathermap.org/img/wn/11d@2x.png"
            
          }
          if (todayData.weather[0].main === "Snow"){            
            icon.src = "https://openweathermap.org/img/wn/13d@2x.png"
            
          }
          if (todayData.weather[0].main === "Mist"){            
            icon.src = "https://openweathermap.org/img/wn/50d@2x.png"
            
          }

      });


  } 

})