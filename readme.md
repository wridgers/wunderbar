# wunderbar
A simple node.js interface to the [Wunderground](http://www.wunderground.com/weather/api/d/docs) weather API.

Currently working
* Full implementation of Wunderground Data API
* Multiple langauge support

Work in progress
* Layers (Rader, Satellite, and both)
* AutoComplete API
* Icon URL interface

## Installing
```
$ npm install wunderbar
```
Don't forget to obtain an API key from [here](http://www.wunderground.com/weather/api).

## Usage
```js

var wunderbar = require('wunderbar');
var weather   = new wunderbar('yourapikey');

weather.conditions('B19 1AS', function(err, res) {
    console.log(res);
});

```

See *examples/* for more detailed usage examples.
