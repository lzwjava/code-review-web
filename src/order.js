/**
 * 
 * @authors yuqiu (yuqiu@luojilab.com)
 * @date    2015-12-23 16:08:22
 * @version $Id$
 */

import Vue from 'vue'
import filters from './common/filters'
import Ajax from 'vue-resource'
import Nav from 'views/nav.vue'
import Footer from 'views/footer.vue'
import Order from 'views/order.vue'

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
