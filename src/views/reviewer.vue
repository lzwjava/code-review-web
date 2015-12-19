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
          <p>Review 案例</p>
        </div>

        <div class="review-stat">
          <p class="review-num">{{reviewer.rewardCount}}</p>
          <p>打赏次数</p>
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
    font-size 20px
    margin-top 30px
  .intro
    font-size 16px
    margin-top 20px

.stat 
  width 100%
  margin-top 50px
  .review-stat
    height 100px
    width 50%
    float left
    text-align center
    p.review-num
      font-size 24px
      font-weight 500
      margin-bottom 20px

.order
  text-align center
  margin-top 200px

</style>
