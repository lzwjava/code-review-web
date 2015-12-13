var http = require('./xhr');

var client = {};

client.post = function(url, data, success, options) {
  var req = http.post(url, data, function (result) {
    if (result.resultCode == 0) {
      success(result.resultData);
    } else {
      if (req.errorFn) {
        req.errorFn(result.resultInfo, req);
      }
    }
  }, options);
  return req;
};

exports.user = {
  login: function(data, cb) {
    return client.post('/user/login', data, function(user) {
      console.log(user);
      cb && cb(user);
    });
  }
};

