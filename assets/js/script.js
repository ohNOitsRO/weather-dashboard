var todayWeather = document.querySelector("#current-weather");
var cityName = "";

// https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=e199a596c22e40837091b277980ac2a5
// FOR DAILY WEATHER CALLS

$("#searchBtn").click(function(){
  var cityName = $(this).siblings(".form-control").val();
  localStorage.setItem("search",cityName);
  console.log(cityName);
  getApi();
})


function getApi() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid=03e2b0141cd0f7d9d15a27103279bb3e&units=metric";
    
    fetch(requestUrl)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          responseText.textContent = response.status;
        }
        return response.json();
      })

      }