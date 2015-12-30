import Vue from 'vue'
import Nav from 'views/nav.vue'
import Footer from 'views/footer.vue'
import Home from 'views/home.vue'
import util from './common/util'
util.configVue(Vue)

let index = new Vue({
  el: 'body',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'my-home': Home
  }
})
