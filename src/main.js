import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'

// install router
Vue.use(Router)

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

// routing
var router = new Router()

router.map({

})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  
})

router.start(App, '#app')
