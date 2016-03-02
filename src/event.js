import Vue from 'vue'
import Nav from './views/nav.vue'
import Footer from './views/footer.vue'
import MainBody from './views/event.vue'
import util from './common/util'
util.configVue(Vue)

let reviewer = new Vue({
  el: 'html',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'main-body': MainBody
  }
});
