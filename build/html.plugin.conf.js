/**
 *
 * @authors yuqiu (yuqiu@luojilab.com)
 * @date    2016-01-13 19:01:04
 * @version $Id$
 */

var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')


var HtmlWebpackPluginConfig = [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../index.html')
  }),
  new HtmlWebpackPlugin({
    filename: 'case.html',
    template: path.resolve(__dirname, '../case.html')
  }),
  new HtmlWebpackPlugin({
    filename: 'article.html',
    template: path.resolve(__dirname, '../article.html')
  }),
  new HtmlWebpackPlugin({
    filename: 'order.html',
    template: path.resolve(__dirname, '../order.html')
  }),
  new HtmlWebpackPlugin({
    filename: 'reviewer.html',
    template: path.resolve(__dirname, '../reviewer.html')
  }),
  new HtmlWebpackPlugin({
    filename: 'setting.html',
    template: path.resolve(__dirname, '../setting.html')
  }),
  new HtmlWebpackPlugin({
    filename: 'statement.html',
    template: path.resolve(__dirname, '../statement.html')
  }),
  new HtmlWebpackPlugin({
    filename: 'write-review.html',
    template: path.resolve(__dirname, '../write-review.html')
  }),
  new HtmlWebpackPlugin({
    filename: 'reviewers.html',
    template: path.resolve(__dirname, '../reviewers.html')
  })];

module.exports = HtmlWebpackPluginConfig
