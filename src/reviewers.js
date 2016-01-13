/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-20 17:17:32
 * @version $Id$
 */

import Vue from 'vue'
import Nav from './views/nav.vue'
import Footer from './views/footer.vue'
import List from './views/reviewer-list.vue'
import util from './common/util'
util.configVue(Vue)

let reviewer = new Vue({
  el: 'body',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'reviewer-list': List
  }
})
