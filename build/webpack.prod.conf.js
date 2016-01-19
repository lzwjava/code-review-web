var webpack = require('webpack')
var config = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var htmlConfig = require('./html.plugin.conf')

// naming output files with hashes for better caching.
// dist/index.html will be auto-generated with correct URLs.
config.output.filename = '[name].[chunkhash].js'
config.output.chunkFilename = '[id].[chunkhash].js'

// whether to generate source map for production files.
// disabling this can speed up the build.
var SOURCE_MAP = false

config.devtool = SOURCE_MAP ? 'source-map' : false

// generate loader string to be used with extract text plugin
function generateExtractLoaders (loaders) {
  return loaders.map(function (loader) {
    return loader + '-loader' + (SOURCE_MAP ? '?sourceMap' : '')
  }).join('!')
}

config.vue.loaders = {
  js: 'babel',
  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  css: ExtractTextPlugin.extract('style-loader', 'css-loader'),
  less: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
  sass: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
  stylus: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
}

// http://vuejs.github.io/vue-loader/workflow/production.html
config.plugins = (config.plugins || []).concat([
  new webpack.ProvidePlugin({
      mOxie: 'moxie'
    }),
  // http://vuejs.github.io/vue-loader/workflow/production.html
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  // extract css into its own file
  new ExtractTextPlugin('[name].[contenthash].css')
]).concat(htmlConfig('production'));

module.exports = config
