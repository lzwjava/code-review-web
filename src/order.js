/**
 *
 * @authors yuqiu (yuqiu@luojilab.com)
 * @date    2015-12-23 16:08:22
 * @version $Id$
 */
import Vue from 'vue'
import Nav from 'views/nav.vue'
import Footer from 'views/footer.vue'
import Order from 'views/order-list.vue'
import util from './common/util'

util.configVue(Vue)

let reviewer = new Vue({
  el: 'body',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'order': Order
  }
})
