<template>
  <loading>
    <div class="list-containter">
      <div class="info">
        <h2>发现各个语言领域的大神，向他们申请帮助</h2>
        <h2>或者，你也可以先看看他们的 <a href="case.html"><strong>Code Review 案例</strong></a></h2>
        <h3>入驻大神：<strong class="num">{{reviewers.length}}</strong></h3>
      </div>
      <div class="list-content">
        <reviewer v-show="!loading" :reviewers="reviewers"></reviewer>
      </div>
      <div class="join-reviewer">
        <h2>噢，没有更多大神了</h2>
        <h2>或者，你就是<strong>下一个</strong></h2>
      </div>
    </div>
  </loading>
</template>

<script>
import reviewerCard from '../components/reviewer-card.vue'
import serviceUrl from "../common/serviceUrl.js"
import Loading from '../components/loading.vue'
var debug = require('debug')('reviewer-list');
var util = require('../common/util');
export default{
  components: {
      reviewer: reviewerCard,
      loading: Loading
  },
  data (){
    return {
      reviewers: []
    }
  },
  methods: {

  },
  created () {
    this.$http.get(serviceUrl.reviewers, {
      limit: 100
    }).then((resp) => {
      if (util.filterError(this, resp)) {
        this.reviewers = resp.data.result;
        this.$broadcast('loaded');
      }
    }, util.httpErrorFn(this));
  }
}
</script>

<style lang="stylus">
@import '../stylus/variables.styl';

.navbar
  position fixed
  top 0
  z-index 2

.list-containter
  margin-top 75px
  h2  // 上边和下边的标题都有用到
    font-size 1.5rem
    margin 15px 0px
    font-weight 400
    font-family Raleway-ExtraLight, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", Arial, "Microsoft Yahei", Verdana, sans-serif

.info
  text-align center
  margin-top 50px
  a
    color blue
    font-size inherit
  h3
    font-size 20px
    margin-top 30px
    .num
      font-family Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,Microsoft Yahei,Verdana,sans-serif
      font-size 48px
      color green
      vertical-align sub

.list-content
  width 1160px
  margin 30px auto

.join-reviewer
  text-align center
  margin-bottom 100px
  strong
    color blue

</style>
