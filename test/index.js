
var assert = require('assert');
var Coolproxies = require('..');

var testKey = 'somekey';
describe('proxies-coolproxies', function () {
  this.timeout(60000); // scarping can take a second

  before(function (done) {
    this.proxies = Coolproxies(testKey);
    done();
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
