
/**
 * Expose the `scrape`.
 */

module.exports = scrape;

/**
 * Return a PublicProxyServers site scraper.
 *
 * @param {Scraper} scraper
 * @return {Function}
 */
var SORTED_URL = 'http://www.publicproxyservers.com/proxy/list_avr_time1.html';
function scrape (scraper) {
  return function (callback) {

    scraper.readyPage(SORTED_URL, function (err, page) {
      if (err) {
        page.close();
        callback(err);
      } else {
        parseList(page, function (err, proxies) {
          page.close();
          callback(err, proxies);
        });
      }
    });
  };
}

/**
 * Parses the IP table list.
 *
 * @param {Page} page
 * @param {Function} callback
 */

function parseList (page, callback) {

  page.evaluate(function () {
    var proxies = [];
    $('table.proxy-list tr td.first').each(function(index, val) {
      var server = $(val).text();
      // no port.
      proxies.push('http://' + server);
    });

    return proxies;
  }, function (proxies) {
    return callback(null, proxies);
  });
}
