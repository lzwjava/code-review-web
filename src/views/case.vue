<template>
	<section class="slide">
			<div class="bg">
				<loading>
					<div class="text">
						<h1>{{topReview.title}}</h1>
						<a href="article.html?reviewId={{topReview.reviewId}}" target="_blank"><button class="detail">详细阅读</button></a>
					</div>
				</loading>
			</div>
	</section>
	<section class="case-list">
			<div class="listcontainer">
				<h3>全部文章</h3>
			</div>

			<loading>
				<case-list :article-list="caseList"></case-list>
			</loading>
			<div class="no-case" v-if="articleState" >没有文章可看</div>
			<div class="pagination">
				<pagination></pagination>
			</div>
	</section>

</template>
<script>
    import ArticleList from '../components/article-item.vue'
		import Loading from '../components/loading.vue'
		var debug = require('debug')('case');
    export default{
        data () {
            return {
								topReview: {
									title: ' '
								},
                caseList: [],
                articleState: false
            }
        },
        events:{
            'pagination-success': function(res) {
							this.$broadcast('loaded');
							this.caseList = res.data.result;
							if (this.caseList.length > 0) {
								this.topReview = this.caseList[0];
								//this.topReview = this.caseList[this.getRandomInt(0, this.caseList.length - 1)];
							}
            },
            'no-article': function(){
              this.articleState = true;
            },
            'pagination-error': function(res){
                console.log(res, 'error')
            }
        },
        components: {
            "case-list":ArticleList,
						'loading': Loading
        },
				methods: {
					getRandomInt: function (min, max) {
						return Math.floor(Math.random() * (max - min + 1)) + min;
					}
				}
    }
</script>
<style lang="stylus">
.navbar
  position fixed
  top 0
  z-index 8 // signup login overlay = 9

.slide
  height 570px
  position relative
  color #fff
  width 100%
  .bg
    background url(http://7xotd0.com1.z0.glb.clouddn.com/case.png) no-repeat
    background-size cover
    background-position-y 40%
    position 200% 200%
    width 100%
    height 100%
    padding-top 160px
    .text
    	width 1000px
    	margin 0 auto
    h1
      margin-top 30px
      font-size 50px
      width 600px
      font-weight 100
      margin-left -20px
      font-family Raleway-Light,PingFang-SC
      line-height 70px
    .detail
      margin-left -20px
      height 40px
      width 120px
      background transparent
      border-radius 3px
      font-size 1rem
      margin-top 60px
      color #33C96F
      border 1px solid #33C96F
      font-family Raleway-Regular,"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei",Arial,"Microsoft Yahei",Verdana,sans-serif
      transition all 0.4s
      &:hover
          color white
          border 1px solid #31B766
          -webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
          box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
          background #33C96F



.listcontainer
  border-bottom 1px solid rgba(0,0,0,.15)
.case-list
	width 1160px
	margin 0 auto
	h3
		line-height 80px
		margin-left 60px
.no-case
  line-height 80px
  text-align center
.pagination
    text-align center
</style>
