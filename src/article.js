import Vue from 'vue'
import Nav from 'views/nav.vue'
import Footer from 'views/footer.vue'
import Article from 'views/article.vue'
import util from './common/util'
util.configVue(Vue)

let reviewer = new Vue({
  el: 'body',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'main-body': Article
  }
});
