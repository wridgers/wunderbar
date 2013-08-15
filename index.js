var request = require('superagent');

function wunderbar(apikey, lang) {
    // British English ;)
    if (lang === undefined)
        lang = 'LI'; 

    // stuff we need
    this.apikey = apikey;
    this.lang   = lang;
}
	
wunderbar.prototype.get = function(api, query, callback) {
    var url = encodeURI('http://api.wunderground.com/api/' + this.apikey + '/' + api + '/lang:' + this.lang + '/q/' + query + '.json');

    request
      .get(url)
      .set('Accept-Encoding', '')
      .end(function(err, res) {
        var obj = [];
        if (!err) {
            try {
                obj = JSON.parse(res.text);
            } catch(e) {
                err = true;
            }
        }

        callback(err, obj);
    });
};

// Basic data
wunderbar.prototype.alerts = function(query, callback) { this.get('alerts', query, callback); };
wunderbar.prototype.almanac = function(query, callback) { this.get('almanac', query, callback); };
wunderbar.prototype.astronomy = function(query, callback) { this.get('astronomy', query, callback); };
wunderbar.prototype.conditions = function(query, callback) { this.get('conditions', query, callback); };	
wunderbar.prototype.currenthurricane = function(query, callback) { this.get('currenthurricane', query, callback); };	
wunderbar.prototype.forecast = function(query, callback) { this.get('forecast', query, callback); };
wunderbar.prototype.forecast10day = function(query, callback) { this.get('forecast10day', query, callback); };
wunderbar.prototype.geolookup = function(query, callback) { this.get('geolookup', query, callback); };	

wunderbar.prototype.history = function(query, date, callback) {
    this.get('history_' + date, query, callback);
};

wunderbar.prototype.hourly = function(query, callback) { this.get('hourly', query, callback); };
wunderbar.prototype.hourly10day = function(query, callback) { this.get('hourly10day', query, callback); };	

wunderbar.prototype.planner = function(query, from, to, callback) {
    this.get('planner_' + from + to, query, callback);
};

wunderbar.prototype.rawtide = function(query, callback) { this.get('rawtide', query, callback); };
wunderbar.prototype.satellite = function(query, callback) { this.get('satellite', query, callback); }		
wunderbar.prototype.tide = function(query, callback) { this.get('tide', query, callback); }		
wunderbar.prototype.webcams = function(query, callback) { this.get('webcams', query, callback); };
wunderbar.prototype.yesterday = function(query, callback) { this.get('yesterday', query, callback); };

// AutoComplete API
/*
wunderbar.prototype.autocomplete = function(query, callback) {
};
*/

module.exports = wunderbar;
