var wunder  = require('wunderbar');
var weather = new wunder('yourapikey');

// weather alerts, geolocate from ip address
weather.alerts('autoip', function(err, res) {
    console.log(res);
});

// historical temperate average, city
weather.alerts('CA/San_Francisco', function(err, res) {
    console.log(res);
});

// moon phases, sunset and sunrise
weather.astronomy('Australia/Sydney', function(err, res) {
    console.log(res);
});

// current conditions, UK post code
weather.conditions('B19 1AS', function(err, res) {
    console.log(res);
});

// hurricanes and tropical storms
weather.currenthurricane('12345', function(err, res) {
    console.log(res);
});

// 3-day forecast, US zip code
weather.forecast('12345', function(err, res) {
    console.log(res);
});

// 10-day forecast, airport code
weather.forecast10day('EGLK', '20121104', function(err, res) {
    console.log(res);
});

// lookup city, lat/long, nearby weather stations, geolocate from ip
weather.geolookup('autoip', function(err, res) {
    console.log(res);
});

// history, specific date, geolocate from ip
weather.history('autoip', '20121104', function(err, res) {
    console.log(res);
});

// hourly, lat/long
weather.geolookup('37.776289,-122.395234', function(err, res) {
    console.log(res);
});

// 10-day hourly, person weather station
weather.geolookup('pws:KMNCHASK10', function(err, res) {
    console.log(res);
});

