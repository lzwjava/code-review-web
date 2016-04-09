import Vue from 'vue'
import Nav from './views/nav.vue'
import MainBody from './views/workshop.vue'
import Footer from './views/footer.vue'
import util from './common/util'
util.configVue(Vue)

let reviewer = new Vue({
  el: 'html',
  components:{
    'my-nav': Nav,
    'main-body': MainBody,
    'my-footer': Footer
  }
});
