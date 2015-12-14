var http = require('./xhr');
var debug = require('debug')('api');

var client = {};

client.post = function(url, data, success, options) {
  var req = http.post(url, data, function (result) {
    client.handleResult(result, req, success);
  }, options);
  return req;
};

client.handleResult = function (result, req, success) {
  debug('result: %j', result);    
  if (result.resultCode == 0) {      
    success(result.resultData);
  } else {
    if (req.errorFn) {
      req.errorFn(result.resultInfo, req);
    }
  }
};

client.get = function(url, data, success, options) {
  var req = http.post(url, data, function (result) {
    client.handleResult(result, req, success);
  }, options);
  return req;
};

var user = {};

user.login =  function (mobilePhoneNumber, password,  cb) {
  var data = {mobilePhoneNumber: mobilePhoneNumber, password: password};
  return client.post('/user/login', data, function(resultData) {
    trackUser(resultData);
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
    trackUser(resultData);
    cb && cb(resultData);
  });
};

user.logout = function () {

}

user.profile = function(uid, cb) {
  var url = '/users/self';
  debug('profile');
  return client.get(url, function(user) {
    cb && cb(user);
  });
};

exports.user = user;

var TRY_CURRENT_USER_KEY = 'cr:try:me';
exports.register = function(app) {
  debug('register');
  trackUser.app = app;

  http.defaults.error = function(resp, status) {
    if (status === 401) {
      cleanUser();
      if (!sessionStorage[TRY_CURRENT_USER_KEY]) return;
    }

    if (resp.error_description) {
      var type = 'error';
      if (status === 429) {
        type = 'warn';
      }
      app.show(type, resp.error_description);
    } else if (status >= 500) {
      app.show('error', 'There is a server error.');
    }
  };
  debug('key %j', sessionStorage[TRY_CURRENT_USER_KEY]);
  if (sessionStorage[TRY_CURRENT_USER_KEY]) return;

  exports.user.profile('me').error(function() {
    sessionStorage[TRY_CURRENT_USER_KEY] = '1';
  });
};

function trackUser(user) {
  trackUser.app.user = user;
}
trackUser.app = {};

function cleanUser() {
  trackUser.app.user = {};
}
