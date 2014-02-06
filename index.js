var request = require('request');

/**
 * Expose the `scrape`.
 */

module.exports = scrape;

/**
 * Return a coolproxies site scraper.
 *
 * @param {Scraper} scraper
 * @return {Function}
 */
var FETCH_URL = 'http://api.coolproxies.com/api.php?list=1&speed=3&premium=1&userid=';
function scrape (key) {
  var url = FETCH_URL + encodeURIComponent(key);
  return function (callback) {
    console.log('querying url: ' + url);
    request(url, function(err, res, body) {
      if (err) return callback(err);
      if (res.statusCode == 200) {
        var proxies = body.split('\r\n');
        proxies = proxies.filter(function(p) {
          if(!checkIsIPV4(p.split(':')[0])) {
            console.log('filtering %s', p);
          }
          return checkIsIPV4(p.split(':')[0]);
        });
        return callback(null, proxies);
      }
      callback(new Error('failed to fetch proxies: ' + res.statusCode));
    });
  };
}

function checkIsIPV4(entry) {
    var blocks = entry.split(".");
      if(blocks.length === 4) {
        return blocks.every(function(block) {
          return parseInt(block,10) >=0 && parseInt(block,10) <= 255;
        });
      }
    return false;
}
