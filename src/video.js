import Vue from 'vue'
import Nav from './views/nav.vue'
import Footer from './views/footer.vue'
import Video from './views/video.vue'
import util from './common/util'
util.configVue(Vue)

let video = new Vue({
  el: 'body',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'my-video': Video
  }
})
