$(document).ready(function() {
    $('#get-weather-btn').click(function() {
      var city = $('#city-input').val();
      var apiKey = '1f779fdd7f33775a0e140efac90f7913';
      var url = `https://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=` + apiKey;
  
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          var temperature = (data.main.temp - 273.15).toFixed(2);
          var humidity = data.main.humidity;
          var windSpeed = data.wind.speed;
  
          var weatherInfo = 'Sıcaklık: ' + temperature + '°C<br>' +
                            'Nem Oranı: ' + humidity + '%<br>' +
                            'Rüzgar Hızı: ' + windSpeed + ' m/s';
  
          $('#weather-info').html(weatherInfo);
        },
        error: function(xhr, status, error) {
          $('#weather-info').html('Hava durumu bilgisi alınamadı.');
          console.log('Hata:', error);
        }
      });
    });
  });
  