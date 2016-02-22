<template>
  <div class="article-list" v-for="item in articleList">
    		<div class="list-content">
    			<div class="article-logo">
    				<img :src="item.coverUrl">
    			</div>
    			<div class="article-info">
    				<div class="date-tags">
    					<span class="data">{{item.created | formatTime 'Do MMMM YYYY'}}</span>
    					<span class="tag" v-for="tag in item.tags">{{tag.tagName}}</span>
    				</div>
    				<h6><a class="title" href="/article.html?reviewId={{item.reviewId}}">{{item.title}}</a></h6>
    				<div class="info">
              {{item.content | truncate 200}}
    				</div>
    				<div class="count">
    					<span>{{item.visitCount}} 次阅读</span>
    					<span>{{item.rewardCount}} 次打赏</span>
    					<!-- <span>{{item.comment}} 条评论</span> -->
    				</div>
    			</div>
    		</div>
    	</div>
</template>
<script>
  var debug = require('debug')('article-item');
	export default{
		props:['articleList'],
    methods: {
    }
	}
</script>

<style lang="stylus">
	.article-list
		border-bottom 1px solid rgba(0,0,0,.15)
		padding 30px 80px
		.list-content
			width 935px
			display flex
			flex-direction row
			.article-info
				flex 0 1 auto
				padding-left 40px
				position relative
				
				.date-tags
					font-size 0.88rem
					color rgba(40,47,49,.6)
					line-height 30px
					.tag
						margin-right 10px
					.data
						margin-right 20px
						font-family Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,Microsoft Yahei,Verdana,sans-serif
				.title
					font-size 1.5rem
					line-height 60px
				.info
					line-height 180%
					font-size 0.88rem
				.count
					color rgba(40,47,49,.6)
					position absolute
					bottom 0
					font-family Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,Microsoft Yahei,Verdana,sans-serif
					span
						margin-right 30px
			.article-logo
				flex 0 0 220px
				width 220px
				height 220px
				img
					width 100%
					height 100%
					margin-left -20px
</style>
