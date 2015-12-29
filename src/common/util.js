exports.filterError = (component, res) => {
  if (res.data.code != 0) {
    var nav = component.$root.$children[0];
    nav.show('error', res.data.error);
    return false;
  } else {
    return true;
  }
};

exports.httpErrorFn = (component) => {
  return function (res) {
    component.$root.$children[0].show('error', res.statusText);
  }
};


exports.escape = (html) => {
  html = html || '';
  return html
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');
};

exports.show = (component, type, text) => {
  component.$root.$children[0].show(type, text);
};

exports.updateNavUser = (component, user) => {
  var nav = component.$root.$children[0];
  nav.user = user;
  nav.userStatus = true;
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

exports.getSearchParameters = () => {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}
