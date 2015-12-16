import Vue from 'vue'
import Router from 'vue-router'
import filters from './filters'

// 必须把 bootstrap 的样式先引入
import "bootstrap.min.css"
import 'bootstrap'

require('./css/base.css');
require('./css/ui.css');

Vue.config.debug = true;

localStorage.debug = 'api,user,components';

var App = Vue.extend(require('./App.vue'));

// install router
Vue.use(Router);

// register filters globally
for(let  k in filters){
  Vue.filter(k, filters[k])
}


// routing
var router = new Router({
  hashbang: false,
  history: true,
  saveScrollPosition: true
});

router.map({
  '/': {
    component: require('./views/home.vue')
  },
  '/u/:username': {
    name: 'user',
    component: require('./views/user.vue')
  },
  '/reviewers/': {
      component: require('./views/reviewer-list.vue'),
   }
});

router.beforeEach(function () {
  window.scrollTo(0, 0);
});

router.redirect({

});

router.start(App, '#app');
require('./api').register(router.app);