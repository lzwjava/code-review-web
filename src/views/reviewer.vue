<template>
  <div class="whole-container">
    <div class="left-side">

      <div class="reviewer-info">

        <user-avatar class="user-avatar" :user="reviewer"></user-avatar>

        <p class="name">{{reviewer.username}}</p>
        <p class="intro">{{reviewer.introduction}}</p>

      </div>

      <div class="stat">

        <div class="review-stat">
          <p class="review-num">{{reviewer.orderCount}}</p>
          <p class="num-title">Review 案例</p>
        </div>

        <div class="y-divider"></div>

        <div class="review-stat">
          <p class="review-num">{{reviewer.rewardCount}}</p>
          <p class="num-title">打赏次数</p>
        </div>

      </div>

      <div class="domains">

      </div>

      <div class="order">
        <button class="btn-common btn-blue">申请 Code Review</button>
      </div>

    </div>

    <div class="right-side">

    </div>

  </div>
</template>

<script type="text/javascript">
var debug = require('debug')('components');
var api = require('../api');
module.exports = {
  data: function () {
    return {
      reviewer: {}
    }
  },
  route: {
    data: function(transition) {
      var id = transition.to.params.id;
      api.reviewers.view(id, function (reviewer) {
        document.title = 'Code Review' + ' — ' + reviewer.username;
        transition.next({reviewer: reviewer});
      });
    }
  },
  components: {
    'user-avatar': require('../components/user-avatar.vue')
  }
};
</script>

<style lang="stylus">

.whole-container
  width 100%
  height 800px

.left-side
  width 35%
  float left
  background url('../img/reviewer-left.png')
  background-size 100% 100%
  height 600px

.right-side
  width 65%

.reviewer-info
  text-align center
  margin-top 100px
  .user-avatar
    width 100px
    height 100px
  .name 
    margin-top 30px
    font-family STHeitiSC-Light
    font-size 36px
    color #000
    line-height 37px
  .intro
    margin-top 20px
    font-size 20px
    color #3B3E3F
    line-height 27px

.stat 
  width 100%
  margin-top 80px
  height 100px  
  .review-stat
    width 49%
    float left
    text-align center
    p.review-num
      margin-bottom 20px
      font-size 36px
      color #282F31
      line-height 43px
    p.num-title
      opacity 0.6
      font-size 24px
      color #3B3E3F
      line-height 28px

.y-divider
  width 1px
  height 100px
  float left
  background rgba(0,0,0, 0.15)
  display inline-block

.order
  text-align center
  margin-top 80px

</style>
