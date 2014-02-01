
var assert = require('assert');
var PublicProxyServers = require('..');
var Scraper = require('scraper');

describe('linkedin-scraper', function () {
  this.timeout(60000); // scarping can take a second

  before(function (done) {
    var self = this;
    Scraper(function (err, scraper) {
      if (err) return done(err);
      self.proxies = PublicProxyServers(scraper);
      done();
    });
  });

  it('should be able to scrape the proxies', function (done) {
    this.proxies(function (err, proxies) {
      if (err) return done(err);
      assert(Array.isArray(proxies));
      assert(proxies.length);
      done();
    });
  });
});
