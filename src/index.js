var apiKey = require("./../.env").apiKey;
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      }).fail(function(error) {
        $('.showErrors').text("There was an error processing your request. Please try again.");
      });
    });
  });
