
var defaults = {};

function request(url, options) {
  var req = new XMLHttpRequest();
  req.error = function(cb) {
    options.error = cb;
    req.errorFn = cb;
  };

  var method = options.method || 'GET';
  var data = options.data;
  if (method === 'GET' && data) {
    url += '?' + Object.keys(data).filter(function(k){
      return k && data[k];
    }).map(function(k) {
      return k + '=' + data[k];
    }).join('&');
    data = null;
  }
  req.url = url;
  req.open(method, url);

  if (options.onload) {
    req.onload = options.onload.bind(this);
  }
  if (options.onerror) {
    req.onerror = options.onerror.bind(this);
  }
  if (options.onprogress) {
    req.upload.onprogress = options.onprogress.bind(this);
  }

  var startTime = new Date().getTime();
  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
    'X-Requested-Time': startTime.toString(),
  };

  if (window.FormData && data instanceof FormData) {
    delete headers['Content-Type'];
  } else if (data) {
    data = postBody(data);
    // data = JSON.stringify(data);
  }

  if (options.headers) {
    Object.keys(options.headers).forEach(function(k) {
      headers[k] = options.headers[k];
    });
  }

  Object.keys(headers).forEach(function(k) {
    req.setRequestHeader(k, headers[k]);
  });

  req.onreadystatechange = function(){
    if (4 === req.readyState) {
      var duration = new Date().getTime() - startTime;
      req.data = parseResponse(req.responseText);
      if (options.afterRequest) {
        options.afterRequest(req, duration);
      }
      var type = req.status / 100 | 0;
      if (2 === type) {
        options.success && options.success(req.data, req);
      } else {
        options.error && options.error(req.data, req);
      }
    }
  };

  if (options.beforeRequest) {
    options.beforeRequest(req);
  }

  if (data) {
    console.log('data: ' + data);
    req.send(data);
  } else {
    req.send();
  }

  return req;
}

function postBody (data) {
  var first = true;
  var body = '';
  for(var key in data) {
    if (first) {
      first =false;
    } else {
      body += '&';
    }
    body += key + '=' + data[key];
  }
  return body;
}

function parseResponse(text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

function extend(a, b) {
  Object.keys(b).forEach(function(k) {
    if (!a[k]) {
      a[k] = b[k];
    }
  });
  return a;
}

function parseParams(method, data, success, options) {
  if (typeof data === 'function') {
    options = success;
    success = data;
    data = null;
  }
  options = extend({method: method, data: data, success: success}, options || {});
  return extend(options, defaults);
}

exports.defaults = defaults;

exports.http = request;

exports.get = function(url, data, success, options) {
  return request(url, parseParams('GET', data, success, options));
};

exports.post = function(url, data, success, options) {
  return request(url, parseParams('POST', data, success, options));
};

exports.del = function(url, data, success, options) {
  return request(url, parseParams('DELETE', data, success, options));
};

exports.put = function(url, data, success, options) {
  return request(url, parseParams('PUT', data, success, options));
};
