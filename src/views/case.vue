<template>
	<section class="slide">
      <div class="bg">
        <div class="text">
        	<h1>2015年十大IOS开源项目</h1>
        	<button class="detail">详细阅读</button>
        </div>
      </div>
    </section>
    <section class="case-list">
    	<h3>全部文章</h3>
    	<case-list :article-list="caseList"></case-list>
      <div class="no-case" v-if="articleState" >没有文章可看</div>
    	<div class="pagination">
    		<pagination></pagination>
    	</div>
    </section>
</template>
<script>
    import ArticleList from '../components/article-item.vue'
		var debug = require('debug')('case');
    export default{
        data (){
            return {
                caseList: [],
                articleState: false
            }
        },
        events:{
            'pagination-success': function(res) {
							this.caseList = res.data.result;
            },
            'no-article': function(){
              this.articleState = true;
            },
            'pagination-error': function(res){
                console.log(res, 'error')
            }
        },
        components: {
            "case-list":ArticleList
        }
    }
</script>
<style lang="stylus">
.slide
  height 620px
  position relative
  color #fff
  width 100%
  overflow hidden
  .bg
    background url("../img/case.png") no-repeat
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
      font-size 60px
      width 440px
      font-weight 100
    .detail
      height 40px
      width 120px
      background transparent
      border-radius 3px
      font-size 1rem
      margin-top 80px
      color white
      border 1px solid white
      font-family font-family Raleway-Regular,"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei",Arial,"Microsoft Yahei",Verdana,sans-serif
.case-list
	width 1160px
	margin 0 auto
	h3
		line-height 80px
		border-bottom 1px solid rgba(0,0,0,.15)
.no-case
  line-height 80px
  text-align center
.pagination
    text-align center
</style>
