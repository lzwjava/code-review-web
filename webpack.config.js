var vue = require('vue-loader');
var webpack = require('webpack');
var path = require('path');
var srcPath = path.join(__dirname, 'src');
var bootstrapPath = './node_modules/bootstrap/dist/css'

module.exports = {
  entry: {
    app : ['./src/main.js', './css/index.css']
  },
  output: {
    path: '/static',
    publicPath: '/static/',
    filename: 'build.js'
  },
  resolve: {
      alias: {
          jquery: path.join(__dirname, './node_modules/jquery')
      },
      root: srcPath,
      extensions: ['', '.js', '.css'],
      modulesDirectories: ['node_modules', bootstrapPath, srcPath]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file'
      },
      { test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&minetype=application/font-woff" 
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader" 
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
     new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
     }),
     new webpack.NoErrorsPlugin()
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
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
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
