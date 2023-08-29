# dirname [![NPM version](https://badge.fury.io/js/dirname.png)](http://badge.fury.io/js/dirname)

> Bind a directory to path.join

```bash
npm i dirname --save
```
## Usage

```js
var dirname = require('dirname');
var utils = dirname('./utils');
var foo = require(utils('foo'));
var bar = require(utils('bar'));
```

## Methods

### dirname

By default the `dirname()` method expects a string. The string is the path to the directory to bind to.

`dirname()` returns a method that is bound to the path provided.

Use this bound in places that you would normally use `path.join()` to start from the provided path.

## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)


## License
Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
Released under the MIT license

***

[package.json]: https://npmjs.org/doc/json.html
