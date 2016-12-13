/**
 * Cozy-Ui
 *
 * A [Cozy](http://cozy.io/) apps Ui SDK
 *
 * https://github.com/m4dz/cozy-ui
 * AGPL-3.0 Licensed
 */

'use strict'

var path = require('path')
var __base = path.resolve(__dirname, '../..')

var plugin = function () {
  return function (style) {
    style.set('include css', true)
    style.import(require.resolve('normalize.css'))
    style.include(__dirname)
    return style
  }
}

plugin.version = require(path.join(__base, 'package.json')).version
plugin.path = __dirname

module.exports = plugin