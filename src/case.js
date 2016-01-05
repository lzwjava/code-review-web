/**
 * 
 * @authors yuqiu (yuqiu@luojilab.com)
 * @date    2016-01-05 11:41:43
 * @version $Id$
 */

import Vue from 'vue'
import Nav from 'views/nav.vue'
import Footer from 'views/footer.vue'
import Case from 'views/case.vue'
import util from './common/util'
util.configVue(Vue)

let caseVue = new Vue({
  el: 'body',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'case': Case
  }
})