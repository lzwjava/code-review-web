// 用 import 好像不行，会出现找不到 undefined 的情况
var filters = require('./filters');
import Ajax from 'vue-resource'

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
    //console.erroe(res.statusText)
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
  window.localStorage.setItem('user',JSON.stringify(user));
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

exports.configVue = (Vue) => {

  Vue.config.debug = true;
  Vue.use(Ajax);
  Vue.http.options.root = '/api';
  Vue.http.options.emulateJSON = true;
  Vue.http.options.timeout = 1000 * 15;

  // 这里是 debug 模块调试，有用的，不用移除
  localStorage.debug = 'api,user,components,setting,reviewer-list,home,reviewer-detail,order-form,'
   + 'order,write-review,tag,markdown-area,markdown,article,reward-form,loading,order-detail,case,article-item,belief';

  // register filters globally
  for(let  k in filters){
    Vue.filter(k, filters[k])
  }
}

exports.getLocalUser = () => {
  var str = window.localStorage.getItem('user')
  if (str) {
    return JSON.parse(str);
  } else {
    return {};
  }
}
