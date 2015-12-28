import Vue from 'vue'
import filters from './common/filters'
import Ajax from 'vue-resource'
import Nav from 'views/nav.vue'
import Footer from 'views/footer.vue'
import Home from 'views/home.vue'

Vue.config.debug = true;
Vue.use(Ajax);

// 这里是 debug 模块调试，有用的，不用移除
localStorage.debug = 'api,user,components,setting';

Vue.http.options.root = '/api'
// register filters globally
for(let  k in filters){
  Vue.filter(k, filters[k])
}

let index = new Vue({
  el: 'body',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'my-home': Home
  }
})