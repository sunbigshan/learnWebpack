var babel = require('@babel/core');

module.exports = function (source) {
  var babelOptions = {
    presets: ['@babel/env'],
    inputSourceMap: true,
    sourceMaps: true,
    filename: this.resourcePath.split('/').pop()
  }
  var result = babel.transform(source, babelOptions)
  this.callback(null, result.code, result.map)
}