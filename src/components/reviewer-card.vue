<template>
	<div @mouseenter="mouseenter" @mouseleave="mouseleave" class="card">

		<div v-show="active" class="card-overlay">
      <div class="tip">
        你决定想要申请<br> {{reviewer.username}}<br> 帮你 Code Review 吗？
      </div>
      <div class="btns">
        <button class="btn-common btn-blue">雇佣</button>
        <button class="btn-common btn-detail" v-link="{path: '/u/' + reviewer.username}">了解详情</button>
      </div>
		</div>

    <div class="card-header">
        <user-avatar :user="reviewer"></user-avatar>
        <div class="info">
          <p class="name">{{reviewer.username}}</p>
          <p class="intro">{{reviewer.introduction}}</p>
        </div>
    </div>
		<div class="card-footer">
		  <p class="review-num">{{reviewer.orderCount}}</p>
		  <p>Review 案例</p>
		</div>

	</div>
</template>

<script type="text/javascript">
var debug = require('debug')('components');
module.exports = {
  replace: true,
  data: function () {
    return {
      active: false
    };
  },
  props: ['reviewer'],
  computed: {
    link: function() {
      var url = '/u/' + this.reviewer.username;
      return url;
    },
    description: function() {
      return this.cafe.description || 'No description'
    }
  },
  components: {
    'user-avatar': require('./user-avatar.vue')
  },
  created: function () {
  	debug('created %j', typeof this.reviewer);
  },
  route: {
    data: function(transition) {
      // api.cafe.list(function(resp) {
      //   transition.next({
      //     following: resp.following || [],
      //     cafes: resp.data,
      //     cursor: resp.cursor,
      //   });
      // });
    }
  },
  methods: {
    mouseenter: function () {
      this.active = true;
    },
    mouseleave: function() {
      this.active = false;
    }
  }
};
</script>

<style lang="stylus">

.card-overlay
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(0, 0, 0, 0.75)
  z-index 100
  color #fff
  div.tip
    margin-top 35% 
  div.btns
    padding-top 10%

.btn-common
  width 80px
  height 35px
  margin 5px
  border-radius 3px  

.btn-blue
  background #00BDEF
  box-shadow 0px 1px 4px 0px rgba(0,0,0,0.50)

.btn-detail
  background rgba(255,255,255,0.10)
  border 1px solid #FFFFFF

.card
  text-align center
  line-height 20px
  height 350px

.card-header .avatar
  margin-top 30px
  width 100px
  height 100px
  img
    background: #D8D8D8;
    border: 4px solid #FFFFFF;
    box-shadow: 0px 4px 4px 0px rgba(135,135,135,0.50);

.card-header
  background #fff
  height 70%
  padding 5px 10px
  .info
    position relative
    padding 5px 15px
    p.name
      font-size 20px
      margin-top 20px
    p.intro
      margin-top 20px

.card-footer
  position relative
  height 30%
  background rgb(250, 250, 250)
  padding 5px 10px
  p.review-num
    font-size 24px
    font-weight 500
    padding-top 15px

</style>
