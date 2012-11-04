# wunderbar
A simple node.js interface to the [Wunderground](http://www.wunderground.com/weather/api/d/docs) API.

* Full implementation of Wunderground Data API
* Layers (Rader, Satellite, and both)
* Multiple langauge support
* AutoComplete API
* Icon URL interface

## Installing
```
$ npm install wunderbar
```
Don't forget to obtain an API key from [here](http://www.wunderground.com/weather/api).

## Usage
```js

var wunder  = require('wunderbar');
var weather = new wunder('yourapikey');

// current conditions
weather.conditions('B19 1AS', function(err, res) {
    console.log(res);
});

```

See *examples/* for more detailed usage examples.
