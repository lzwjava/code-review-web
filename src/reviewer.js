/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-20 17:17:32
 * @version $Id$
 */

import Vue from 'vue'
import filters from './filters'
import Ajax from 'vue-resource'
import Nav from 'views/nav.vue'
import Footer from 'views/footer.vue'
import List from 'views/reviewer-list.vue'

Vue.config.debug = true;
Vue.use(Ajax);

// register filters globally
for(let  k in filters){
  Vue.filter(k, filters[k])
}

let reviewer = new Vue({
  el: 'body',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'reviewer-list': List
  }
})