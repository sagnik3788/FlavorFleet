/**
 * dirname
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

var dirname = module.exports = function (base) {
  return path.join.bind(path, base);
};