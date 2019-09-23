const path = require('path');
const loaderUtils = require('loader-utils');

module.exports.pitch = function (request) {
  var result = [
    'var content=require(' + loaderUtils.stringifyRequest(this, '!!' + request) + ')', // 得到 css 内容
    'require(' + loaderUtils.stringifyRequest(this, '!' + path.join(__dirname, 'lib', "addStyle.js")) + ')(content)', // 调用  addStyle 把CSS内容插入到DOM中
    'if(content.locals) module.exports = content.locals' // 如果发现启用了 css modules，则默认导出它
  ]
  return result.join(';')
}