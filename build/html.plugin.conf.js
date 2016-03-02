/**
 *
 * @authors yuqiu (yuqiu@luojilab.com)
 * @date    2016-01-13 19:01:04
 * @version $Id$
 */

var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

var devConfig = ['index.html', 'case.html', 'article.html', 'order.html', 'reviewer.html', 'setting.html',
'statement.html', 'write-review.html', 'reviewers.html', 'belief.html', 'paid.html', 'video.html',
'notifications.html', 'event.html'];

function HtmlWebpackPluginConfig(type) {
  var filePath = '';
  if (type == 'production') {
    filePath = '../';
  }
  return devConfig.map(function(el, index) {
    return new HtmlWebpackPlugin({
      filename: filePath + el,
      template: 'src/' + el
    })
  });
}

module.exports = HtmlWebpackPluginConfig
