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
  var req = http.get(url, data, function (result) {
    client.handleResult(result, req, success);
  }, options);
  return req;
};


exports.user = {
  login: function (mobilePhoneNumber, password,  cb) {
    var data = {mobilePhoneNumber: mobilePhoneNumber, password: password};
    return client.post('/api/user/login', data, function(resultData) {
      trackUser(resultData);
      cb && cb(resultData);
    });
  },

  sendSmsCode: function (mobilePhoneNumber, cb) {
    var data = {mobilePhoneNumber: mobilePhoneNumber};
    return client.post('/api/user/requestSmsCode', data , function (resultData) {
      cb && cb(resultData);
    });
  },

  signUp: function(data, cb) {
    return client.post('/api/user/register', data, function (resultData) {
      trackUser(resultData);
      cb && cb(resultData);
    });
  },

  logout : function () {
    return client.get('/api/user/logout', null, function (resultData) {
      debug('logout succeed');
      cleanUser();
    });
  },

  profile: function(uid, cb) {
    var url = '/api/user/self';
    return client.get(url, null, function(user) {
      trackUser(user);
      cb && cb(user);
    });
  }
};

exports.reviewers = {
  list: function (skip, limit, cb) {
    var data = {};
    if (skip) {
      data.skip = skip;
    }
    if (limit) {
      data.limit = limit;
    }
    return client.get('/api/reviewers', data, function (results) {
      cb && cb(results);
    });
  },

  view: function (id, cb) {
    return client.get('/api/reviewers/view', {id: id}, function (result) {
      cb && cb(result);
    });
  }

};

var localApp;

var TRY_CURRENT_USER_KEY = 'cr:try:me';
exports.register = function(app) {
  localApp = app;
  debug('register localApp ' + localApp);

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
    debug('profile me error');
    sessionStorage[TRY_CURRENT_USER_KEY] = '1';
  });
};

function trackUser(user) {
  delete sessionStorage[TRY_CURRENT_USER_KEY];
  debug('trackUser localApp ' + localApp);
  if (localApp != null) {
    localApp.user = user;
  }
}

function cleanUser() {
  localApp.user = {};
}
