var wunder  = require('wunderbar');
var weather = new wunder('yourapikey', 'SW'); // get results in Swedish.

// GOT - airport code for Landvetter, Västergötland, Sweden.
weather.conditions('GOT', function(err, res) {
    console.log(res);
});
