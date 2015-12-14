var http = require('./xhr');
var debug = require('debug')('api');

var client = {};

client.post = function(url, data, success, options) {
  var req = http.post(url, data, function (result) {
    debug('result: %j', result);    
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

client.postData = function (path) {
  return 
};

var user = {};

user.login =  function (mobilePhoneNumber, password,  cb) {
  var data = {mobilePhoneNumber: mobilePhoneNumber, password: password};
  return client.post('/user/login', data, function(resultData) {
    cb && cb(resultData);
  });
};

user.sendSmsCode = function (mobilePhoneNumber, cb) {
  var data = {mobilePhoneNumber: mobilePhoneNumber};
  return client.post('/user/requestSmsCode', data , function (resultData) {
    cb && cb(resultData);
  });
};

user.signUp = function(data, cb) {
  return client.post('/user/register', data, function (resultData) {
    cb && cb(resultData);
  });
};

user.logout = function () {
  
}

exports.user = user;
