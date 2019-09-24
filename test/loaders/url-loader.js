const loaderUtils = require('loader-utils');
const mime = require('mime');

module.exports = function(content) {
var options =  loaderUtils.getOptions(this) || {};
var limit = options.limit || (this.options && this.options.url && this.options.url.dataUrlLimit);

if(limit) {
  limit = parseInt(limit, 10);
}

var mimetype = options.mimetype || options.minetype || mime.getType(this.resourcePath);

if(!limit || content.length < limit) {
  if(typeof content === "string") {
    content = new Buffer(content);
  }
  return "module.exports = " + JSON.stringify("data:" + (mimetype ? mimetype + ";" : "") + "base64," + content.toString("base64"));
}

var fallback = options.fallback || "file-loader";
var fallbackLoader = require(fallback);

return fallbackLoader.call(this, content);
}

module.exports.raw = true