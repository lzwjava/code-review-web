<template>
	<section class="order-detail" @click="stop($event)">
		<button type="button" class="cancel" @click="cancel"></button>
		<h2>此订单的详情</h2>
		<div class="info">
			<div class="item left">
				<h3>订单信息</h3>
				<div class="row">
					<span>申请日期</span>
					<span class="right">{{detail.created}}</span>
				</div>
				<div class="row">
					<span>状态</span>
					<span class="right">{{detail.status | reviewStatus}}</span>
				</div>
				<div class="row">
					<span>打赏金额</span>
					<span class="right">{{detail.money  | currency '￥' | integer}}</span>
				</div>
				<div class="row">
					<span>{{detail.typeText}}</span>
					<span class="right">{{detail[detail.userType].username}}</span>
				</div>

				<h3>项目信息</h3>
				<div class="row">
					<span>项目大致代码行数</span>
					<span class="right">{{detail.codeLines}}</span>
				</div>
				<div class="row">
					<span>项目Github地址</span>
					<a target="_blank" :href="detail.gitHubUrl">
						<button class="btn-github"></button>
					</a>
				</div>
				<h3>Review 结果</h3>
				<div class="row">
					<span>Review 结果</span>
					<span v-if="!detail.review" class="right">暂无</span>
					<a href="./article.html?reviewId={{detail.orderId}}" v-if="detail.review"><button type="button" class="check-result">查看结果</button></a>
				</div>
			</div>
			<div class="item right">
				<h4>请输入你对Review的看法</h4>
				<textarea></textarea>
				<button type="button" class="assess">进行评价</button>
			</div>
		</div>
	</section>
</template>
<style lang="stylus">
@import '../stylus/variables.styl';
	.order-detail
		width 960px
		height 600px
		position absolute
		left 50%
		top 50%
		margin -300px 0 0 -480px
		background #FDFFFF
		padding 20px 30px
		border 1px solid rgba(0,0,0,0.15)
		box-shadow 0 13px 21px 6px rgba(0,0,0,.15)
		.cancel
			position absolute
			top 15px
			right 15px
		h2
			font-size 1.5rem
			line-height 50px
		.info
			display flex
			flex-direction row
			justify-content center
			.item
				flex 1 1
				text-align center
				&.right
					border-left 1px solid rgba(0,0,0,.15)
					padding-left 50px
				&.left
					padding-right 50px
				h3
					border-bottom 1px solid rgba(0,0,0,.15)
					line-height 20px
					padding-bottom 20px
					margin-top 20px
					text-align left
					color rgba(40,47,49,.6)
					&:first-child
						margin 0
				h4
					font-size 0.88rem
					color rgba(40,47,49,.6)
					line-height 20px
					padding-bottom 20px
					text-align left
				textarea
					width 400px
					height 200px
					background white
					border 1px solid rgba(0,0,0,.15)
					resize none
				.assess
					btn(blue, white, 1, 200, 50)
					margin-top 50px
				.row
					padding 10px 0
					text-align left
					span
						line-height 30px
						color rgba(40,47,49,.6)
						&.right
							pull-right()
							color textColor
					.check-result
						btn(green, white, 0.8, 85, 30)
						pull-right()
					.btn-github
						pull-right()
</style>

<script>
	var debug = require('debug')('order-detail');
	export default {
		props:['detail'],
		methods: {
			stop (e){
				e.stopPropagation();
			},
			cancel(){
				this.$parent.overlay = false;
			}
		},
		ready () {
			debug('%j', this.detail);
		}
	}
</script>
