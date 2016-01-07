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
    	<div class="list" v-for="item in caseList">
    		<div class="list-content">
    			<div class="article-logo">
    				<img :src="item.articleLogo">
    			</div>
    			<div class="article-info">
    				<div class="date-tags">
    					<span class="data">{{item.date}}</span>
    					<span class="tag" v-for="tag in item.tags">{{tag}}</span>
    				</div>
    				<h6 class="title">{{item.title}}</h6>
    				<div class="info">

    				</div>
    				<div class="count">
    					<span>{{item.view}} 次阅读</span>
    					<span>{{item.tip}} 次打赏</span>
    					<span>{{item.comment}} 条评论</span>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="pagination">
    		<pagination></pagination>
    	</div>
    </section>
</template>
<script>
    export default{
        data (){
            return {
                caseList: [{
                    articleLogo: 'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D200/sign=160cee1dce3d70cf53faad0dc8dcd1ba/79f0f736afc3793163673a0decc4b74543a91182.jpg',
                    date: '13 八月 2015',
                    tags: ['#IOS基础'],
                    title: 'Swift 与 Objective-C 混编的一些问题',
                    info: '在 Objective-C++ 中，可以用 C++ 代码调用方法也可以从 Objective-C 调用方法。在这两种语言里对象都是指针，可以在任何地方使用。例 如，C++ 类可以使用 Objective-C 对象的指针作为数据成员，Objective-C 类也可以有 C++ 对象指针做实例变量。下例说明了这一点。',
                    view: 6024,
                    comment: 300,
                    tip: 30
                },{
                    articleLogo: 'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D200/sign=160cee1dce3d70cf53faad0dc8dcd1ba/79f0f736afc3793163673a0decc4b74543a91182.jpg',
                    date: '13 八月 2015',
                    tags: ['#IOS基础'],
                    title: 'Swift 与 Objective-C 混编的一些问题',
                    info: '在 Objective-C++ 中，可以用 C++ 代码调用方法也可以从 Objective-C 调用方法。在这两种语言里对象都是指针，可以在任何地方使用。例 如，C++ 类可以使用 Objective-C 对象的指针作为数据成员，Objective-C 类也可以有 C++ 对象指针做实例变量。下例说明了这一点。',
                    view: 6024,
                    comment: 300,
                    tip: 30
                },{
                    articleLogo: 'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D200/sign=160cee1dce3d70cf53faad0dc8dcd1ba/79f0f736afc3793163673a0decc4b74543a91182.jpg',
                    date: '13 八月 2015',
                    tags: ['#IOS基础'],
                    title: 'Swift 与 Objective-C 混编的一些问题',
                    info: '在 Objective-C++ 中，可以用 C++ 代码调用方法也可以从 Objective-C 调用方法。在这两种语言里对象都是指针，可以在任何地方使用。例 如，C++ 类可以使用 Objective-C 对象的指针作为数据成员，Objective-C 类也可以有 C++ 对象指针做实例变量。下例说明了这一点。',
                    view: 6024,
                    comment: 300,
                    tip: 30
                }]
            }
        },
        events:{
            'pagination-success': function(res){
                console.log(res);//这里处理分页获取数据的回调
            },
            'pagination-error': function(res){
                console.log(res, 'error')
            }
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
	.list
		border-bottom 1px solid rgba(0,0,0,.15)
		padding 30px 50px
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
					span
						margin-right 30px
			.article-logo
				flex 0 0 220px
				width 220px
				height 220px
				img
					width 100%
					height 100%
.pagination
    text-align center
</style>
