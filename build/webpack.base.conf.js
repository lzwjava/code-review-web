var vue = require('vue-loader');
var webpack = require('webpack');
var path = require('path');
var srcPath = path.join(__dirname, '../src');

module.exports = {
  entry: {
    index : ['./src/index.js'],  // 用 [] 是为了在这里加入 webpack socket，实现自动刷新
    reviewers: ['./src/reviewers.js'],
    setting: ['./src/setting.js'],
    order: ['./src/order.js'],
    reviewer: ['./src/reviewer.js'],
    'write-review': ['./src/write-review.js'],
    case: ['./src/case.js'],
    article: ['./src/article.js'],
    statement: ['./src/statement.js'],
    belief: ['./src/belief.js'],
  },
  output: {
    path: path.resolve(__dirname, '../dist/static/'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
      alias: {
          moxie: path.join(__dirname, '../plupload/js/moxie.js'),
          'plupload': path.join(__dirname, '../plupload/js/plupload.dev.js')
      },
      root: srcPath,
      extensions: ['', '.js', '.css'],
      modulesDirectories: ['node_modules','plupload', srcPath]
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
        test: /plupload\/js\/moxie\.js/,
        loader: 'exports?this.mOxie'
      },
      {
        test: /\.md$/,
        loader: "raw"
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new webpack.ProvidePlugin({
      mOxie: 'moxie'
    })
  ],
  debug: true,
  displayErrorDetails: true,
  outputPathinfo: true
}
