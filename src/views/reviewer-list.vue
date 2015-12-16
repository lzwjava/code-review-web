<template>
  <div class="body cafe-list">
    <logo class="loading center" v-if="$loadingRouteData"></logo>

    <div class="list-title">
      <div class="list-tip">
        发现各个语言领域的大神，向他们申请帮助<br>
        或者，你也可以先看看他们的 Code Review 案例
      </div>

      <div class="list-num">
        入驻大神：<span class="reviewer-num">{{reviewers.length}}</span>
      </div>
    </div>

    <div class="section container reviewer-cards">
      <div class="cafe-cards clearfix">
        <template v-for="reviewer in reviewers" track-by="id">
          <reviewer-card :reviewer="reviewer"></reviewer-card>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
var api = require('../api');

module.exports ={
  data: function() {
    return {
      cursor: 0,
      following: [],
      reviewers: [],
    }
  },
  computed: {
    subpath: function() {
      if (this.$route.query.show === 'create') {
        return '/create';
      }
      return '';
    }
  },
  route: {
    data: function(transition) {
      api.reviewers.list(0, 100, function(resp) {
        transition.next({
          reviewers: resp
        });
      });
    }
  },
  components: {
    'logo': require('../components/logo.vue'),
    'reviewer-card': require('../components/reviewer-card.vue')
  }
};
</script>

<style lang="stylus">

.cafe-list
  background-color #F1F5F6
  padding 40px 0

.reviewer-cards
  margin-top 60px  

.list-title
  text-align center
  .list-tip
    font-size 26px
    margin-top 10px
  .list-num
    margin-top 40px
    font-size 18px

span.reviewer-num
  font-size 24px
  line-height 28px
  color #33C96F

</style>
