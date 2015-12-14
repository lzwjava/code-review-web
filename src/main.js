import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
require('./css/ui.css');

import "bootstrap.min.css"
import 'bootstrap'

import HomeView from './components/HomeView.vue'

Vue.config.debug = true;

localStorage.debug = 'api';

var App = Vue.extend(require('./App.vue'));

// install router
Vue.use(Router);

// register filters globally
Vue.filter('fromNow', fromNow);
Vue.filter('domain', domain);

// routing
var router = new Router();

router.map({
  '/': {
    component: HomeView
  },
  '/u/:username': {
    name: 'user',
    component: require('./views/user.vue'),
  },
});

router.beforeEach(function () {
  window.scrollTo(0, 0);
});

router.redirect({

});

router.start(App, '#app');

