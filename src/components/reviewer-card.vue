<template>
	<div class="card">
		<div class="card-header">
		    <img class="avatar" src="../img/avatar1.png" >
		    <div class="info">
		      <p class="name">叶孤城</p>
		      <p>经验丰富的 iOS 开发者，曾就职于 360Camera、英语流利说</p>
		    </div>
		</div>
		<div class="card-footer">
		  <p class="review-num">7</p>
		  <p>Review 案例</p>
		</div>
	</div>
</template>

<script type="text/javascript">
module.exports = {
  replace: true,
  computed: {
    link: function() {
      var url = '/c/' + this.cafe.slug;
      if (this.subpath) url += this.subpath;
      return url;
    },
    description: function() {
      return this.cafe.description || 'No description'
    }
  },
  components: {
    'user-avatar': require('./user-avatar.vue')
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
  }
};
</script>

<style lang="stylus">
.card
  text-align center
  line-height 20px
  height 300px
  .card-header
    background #fff
    height 70%
    padding 5px 10px
    img
      position relative
      top -80px
    .info
      position relative
      top -50px
      padding 5px 15px
      p.name
        font-size 20px
        padding-bottom 10px
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