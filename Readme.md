
# proxies-publicproxyservers

  Scrapes the public proxies list from [publicproxyservers.com](http://publicproxyservers.com/). Primarily used as a proxies source list to [proxies](https://github.com/ivolo/proxies).


## Example

Get a list of public proxies:

```js
var Scraper = require('scraper');
var PubilcProxyServers = require('proxies-publicproxyservers');
var Proxies = require('proxies');

Scraper(function (err, scraper) {
  var publicproxyservers = PubilcProxyServers(scraper);
  publicproxyservers(function (err, proxies) {
    // a list of proxies
  });
});
```

And integrate into [proxies](https://github.com/ivolo/proxies) as a source:

```js
var Scraper = require('scraper');
var PublicProxyServers = require('proxies-publicproxyservers');
var Proxies = require('proxies');

Scraper(function (err, scraper) {
  var publicproxyservers = PublicProxyServers(scraper);
  var proxies = Proxies()
    .source(publicproxyservers);

  // use proxies
});
```

## API

#### PublicProxyServers(scraper)

  Create a new PublicProxyServers `scraper` instance.

#### publicproxyservers(callback)

  Get a list of public proxies.


## Licence

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```
