<template>
  <div class="info">
    <h1>发现各个语言领域的大神，向他们申请帮助</h1>
    <h1>或者，你也可以先看看他们的 <strong>Code Review 案例</strong></h1>
    <h2>入住大神：<strong class="num">{{reviewers.length}}</strong></h2>
  </div>
  <div class="list-content">
    <reviewer :reviewers="reviewers"></reviewer>
  </div>
  <div class="join-reviewer">
    <h5>噢，没有更多大神了</h5>
    <h5>或者，你就是<strong>下一个</strong></h5>
  </div>
</template>

<script>
import reviewerCard from '../components/reviewer-card.vue'
import serviceUrl from "../common/serviceUrl.js"
var debug = require('debug')('reviewer-list');
var util = require('../common/util');
export default{
  components: {
      reviewer: reviewerCard
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
      }
    }, util.httpErrorFn(this));
  }
}
</script>

<style lang="stylus">
@import '../stylus/variables.styl';
body
  background #F1F5F6
.info
  font-size 36px
  text-align center
  line-height 120%
  padding-top 80px
  strong
    color blue
  h2
    font-size 24px
    line-height 65px
    margin-top 100px
    .num
      font-size 48px
      color green
      vertical-align sub
.list-content
  width 1200px
  margin 80px auto

.join-reviewer
  font-size 36px
  text-align center
  line-height 120%
  padding 80px
  strong
    color blue

</style>
