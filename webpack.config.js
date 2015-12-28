var vue = require('vue-loader');
var webpack = require('webpack');
var path = require('path');
var srcPath = path.join(__dirname, 'src');
var bootstrapPath = './node_modules/bootstrap/dist/css';

module.exports = {
  entry: {
    index : './src/index.js',
    reviewer: './src/reviewer.js',
    list: './src/list.js',
    setting: './src/setting.js',
    order: './src/order.js'
  },
  output: {
    path: __dirname + '/static',
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
      alias: {
          jquery: path.join(__dirname, './node_modules/jquery'),
          moxie: path.join(__dirname, 'vendor/plupload/moxie.js'),
          'moxie-plupload': path.join(__dirname, 'vendor/plupload/plupload.dev.js')
      },
      root: srcPath,
      extensions: ['', '.js', '.css'],
      modulesDirectories: ['node_modules', bootstrapPath, srcPath, 'vendor']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\/|plupload/,
        loader: 'babel'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8190'
      },
      { test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&minetype=application/font-woff" 
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader" 
      },
      // {
      //   test: /vendor\/plupload\/plupload\.dev\.js/,
      //   loader: 'imports?mOxie=moxie!exports?window.plupload'
      // },
      {
        test: /vendor\/plupload\/moxie\.js/,
        loader: 'exports?this.mOxie'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new webpack.ProvidePlugin({
      mOxie: 'moxie'
    }),
  ],
  debug: true,
  displayErrorDetails: true,
  outputPathinfo: true,
  recordsPath: '/Users/lzw/code-review/code-review-web/webpack.json'
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
