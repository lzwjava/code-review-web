exports.escape = function(html) {
  html = html || '';
  return html
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');
};

exports.shake = function(el) {
  el.classList.add('shake');
  setTimeout(function() {
    el.classList.remove('shake');
  }, 650);
};

exports.errorMessage = function(formError) {
  for (var k in formError) {
    if (formError[k].length) {
      return formError[k][0];
    }
  }
};
