
# proxies-coolproxies

  Scrapes the private proxies list from [coolproxies.com](http://coolproxies.com/). Primarily used as a proxies source list to [proxies](https://github.com/ivolo/proxies).


## Example

Get a list of private proxies:

```js
var Coolproxies = require('proxies-coolproxies');
var Proxies = require('proxies');

var key = 'SOME_KEY';
var coolproxies = Coolproxies(key);
coolproxies(function (err, proxies) {
  // a list of proxies
});
```

And integrate into [proxies](https://github.com/ivolo/proxies) as a source:

```js
var coolproxies = require('proxies-coolproxies');
var Proxies = require('proxies');

var key = '<SOME_KEY>';
var coolproxies = coolproxies(key);
var proxies = Proxies()
  .source(coolproxies);

// use proxies
```

## API

#### coolproxies(key)

  Create a new coolproxies instance with the specified api key.

#### coolproxies(callback)

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
