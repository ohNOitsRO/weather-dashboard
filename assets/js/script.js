var cityName = document.querySelector(".city-name");
var apiKey = "817bdcdf8036c1ecbb4e09f9a1e15684";

console.log(cityName);


function getApi() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+ cityName +"&appid="+ apiKey;
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement('li');
          listItem.textContent = data[i].html_url;
          repoList.appendChild(listItem);
        }
      });
  }