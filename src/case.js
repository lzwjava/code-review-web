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
import Pagination from './components/pagination/main.js'
util.configVue(Vue)
Vue.use(Pagination);
let page = new Pagination({
    remote: {
        pageSize: 10,
        pageIndexName: 'page_no',
        pageSizeName: 'page_size',
        params: {},
        url: 'reviews',
        totalName: 'total_nums',
        offset: -1,
        dataKey: 'showcases'
    }
});
page.init();
let caseVue = new Vue({
  el: 'body',
  components:{
    'my-nav': Nav,
    'my-footer': Footer,
    'case': Case
  }
})
