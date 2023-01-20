var cityName; 

// https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=e199a596c22e40837091b277980ac2a5
// FOR DAILY WEATHER CALLS

$("#searchBtn").click(function(){
  var cityName = $(this).siblings(".form-control").val();
  localStorage.setItem(cityName,cityName);
  console.log(cityName);
})


function getApi() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+ cityName +"&appid=e199a596c22e40837091b277980ac2a5";
    
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

      console.log(data);
  }

