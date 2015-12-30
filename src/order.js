/**
 * 
 * @authors yuqiu (yuqiu@luojilab.com)
 * @date    2015-12-23 16:08:22
 * @version $Id$
 */

import Vue from 'vue'
import Ajax from 'vue-resource'
import Nav from 'views/nav.vue'
import Footer from 'views/footer.vue'
import Order from 'views/order.vue'

// 用 import 好像不行，会出现找不到 undefined 的情况
var filters = require('./common/filters');

Vue.config.debug = true;
Vue.use(Ajax);
Vue.http.options.root = '/api'

// register filters globally
for(let  k in filters){
  Vue.filter(k, filters[k])
}

let reviewer = new Vue({
  el: 'body',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'order': Order
  }
})
