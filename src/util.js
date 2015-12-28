exports.filterError = (component, res) => {
  if (res.data.resultCode != 0) {
    var nav = component.$root.$children[0];
    nav.show('error', res.data.resultInfo);
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
