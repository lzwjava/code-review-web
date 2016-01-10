var vue = require('vue-loader');
var webpack = require('webpack');
var path = require('path');
var srcPath = path.join(__dirname, 'src');

module.exports = {
  entry: {
    index : ['./src/index.js'],  // 用 [] 是为了在这里加入 webpack socket，实现自动刷新
    reviewers: ['./src/reviewers.js'],
    list: ['./src/list.js'],
    setting: ['./src/setting.js'],
    order: ['./src/order.js'],
    reviewer: ['./src/reviewer.js'],
    'write-review': ['./src/write-review.js'],
    case: ['./src/case.js'],
    article: ['./src/article.js'],
    statement: ['./src/statement.js']
  },
  output: {
    path: __dirname + '/static',
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
      alias: {
          jquery: path.join(__dirname, './node_modules/jquery'),
          moxie: path.join(__dirname, 'plupload/js/moxie.min.js'),
          plupload: path.join(__dirname, 'plupload/js/plupload.min.js')
      },
      root: srcPath,
      extensions: ['', '.js', '.css'],
      modulesDirectories: ['node_modules', 'plupload', srcPath]
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
      {
        test: /plupload\/js\/plupload\.min\.js/,
        loader: 'imports?mOxie=moxie'
      },
      {
        test: /plupload\/js\/moxie\.min\.js/,
        loader: 'exports?this.mOxie'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
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
    new webpack.ProvidePlugin({
        mOxie: 'moxie'
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.plugins = [
    new webpack.ProvidePlugin({
        mOxie: 'moxie'
    }),
  ]
  module.exports.devtool = '#source-map'
}
