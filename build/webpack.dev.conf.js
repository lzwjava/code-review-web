var webpack = require('webpack')
var config = require('./webpack.base.conf')
var path = require('path')
var htmlConfig = require('./html.plugin.conf')

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
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"local"'
    }
  })
]).concat(htmlConfig('dev'))

module.exports = config
