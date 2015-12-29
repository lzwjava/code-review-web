/**
 * 
 * @authors yuqiu (yuqiu@luojilab.com)
 * @date    2015-12-23 16:07:42
 * @version $Id$
 */

import Vue from 'vue'
import filters from './common/filters'
import Ajax from 'vue-resource'
import Nav from 'views/nav.vue'
import Footer from 'views/footer.vue'
import Setting from 'views/setting.vue'

Vue.config.debug = true;
Vue.use(Ajax);
Vue.http.options.root = '/api'
Vue.http.options.timeout = 1000 * 10;

// register filters globally
for(let  k in filters){
  Vue.filter(k, filters[k])
}

let reviewer = new Vue({
  el: 'body',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'setting': Setting
  }
})
