import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './components/App.vue'
import HomeView from './components/HomeView.vue'
import 'bootstrap'
require('bootstrap.min.css')

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
});

router.beforeEach(function () {
  window.scrollTo(0, 0);
});

router.redirect({

});

router.start(App, '#app');
