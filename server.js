
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./build/webpack.dev.conf');

// 当修改时，让 webpack 自动刷新页面
for (entryPoint in config.entry) {
  config.entry[entryPoint].unshift("webpack-dev-server/client?http://localhost:9090", "webpack/hot/dev-server");
}

config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.devtool = 'eval';

var rewriteUrl = function(replacePath) {
    return function(req, opt) {  // gets called with request and proxy object
        var queryIndex = req.url.indexOf('?');
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";
        req.url = req.path.replace(opt.path, replacePath) + query;
        console.log("rewriting ", req.originalUrl, req.url);
    };
};

var prod = true;
var target;
if (prod) {
  // target = "http://apitest.reviewcode.cn";
  target = "http://api.reviewcode.cn";
} else {
  target = "http://localhost:3010";
}

// target = "http://localhost:3005";

var proxy = [{
	path: new RegExp("/api/(.*)"),
	target: target,
	rewrite: rewriteUrl("/$1")
}];

// if (process.env.NODE_ENV === 'local') {
// }

var app = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  proxy: proxy,
  hot: true,
  debug: true
});

app.listen(9090, '0.0.0.0', function (err, result) {
  console.log('http://localhost:9090');
  if (err) {
    console.log(err);
  }
});
