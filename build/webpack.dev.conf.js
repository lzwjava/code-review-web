var config = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

// eval-source-map is faster for development
config.devtool = 'eval-source-map'

config.devServer = {
  // allow access over local network
  host: '0.0.0.0',
  // enable HTML5 history routing
  historyApiFallback: true,
  // suppress useless text
  noInfo: true,
}

// necessary for the html plugin to work properly
// when serving the html from in-memory
config.output.publicPath = '/'

config.plugins = (config.plugins || []).concat([
  // generate HTML on the fly
  new HtmlWebpackPlugin({
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
    filename: 'list.html',
    template: path.resolve(__dirname, '../list.html')
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
  })
])

module.exports = config
