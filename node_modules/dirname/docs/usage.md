
```js
var dirname = require('dirname');
var utils = dirname('./utils');
var foo = require(utils.dir('foo'));
var bar = require(utils.dir('bar'));
```

# Methods

## dirname

By default the `dirname()` method expects a string. The string is the path to the directory to bind to.

`dirname()` returns an object with one method called `dir()`. `dir()` is bound to the path provided earlier.

Use `dir()` in places that you would normally use `path.join()` but it will start from the provided path