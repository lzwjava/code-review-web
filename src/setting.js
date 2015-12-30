/**
 * 
 * @authors yuqiu (yuqiu@luojilab.com)
 * @date    2015-12-23 16:07:42
 * @version $Id$
 */

import Vue from 'vue'
import Nav from 'views/nav.vue'
import Footer from 'views/footer.vue'
import Setting from 'views/setting.vue'
import util from './common/util'
util.configVue(Vue)

let reviewer = new Vue({
  el: 'body',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'setting': Setting
  }
})
