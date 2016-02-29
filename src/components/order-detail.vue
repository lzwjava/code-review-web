<template>
	<section class="order-detail" @click="stop($event)">
		<button type="button" class="cancel" @click="cancel"></button>
		<h2>此订单的详情</h2>
		<div class="info">
			<div class="item left">
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
				<div class="row">
					<span>备注</span>
					<div class="orderps">{{detail.remark}}</div>
				</div>
				<div class="row">
					<span>Review 结果</span>
					<span v-if="!detail.reviewId" class="right">暂无</span>
					<a target="_blank" href="./article.html?reviewId={{detail.reviewId}}" v-if="detail.reviewId"><button type="button" class="check-result">查看结果</button></a>
				</div>
			</div>
			<!-- <div class="item right">
				<h4>请输入你对Review的看法</h4>
				<textarea></textarea>
				<button type="button" class="assess">进行评价</button>
			</div> -->
		</div>
	</section>
</template>
<style lang="stylus">
@import '../stylus/variables.styl';
	.order-detail
		width 480px
		height auto
		border-radius 3px
		position absolute
		left 50%
		top 50%
		margin -300px 0 0 -240px
		background #FDFFFF
		padding 20px 30px
		border 1px solid rgba(0,0,0,0.15)
		box-shadow 0 13px 21px 7px rgba(0,0,0,.1)
		-webkit-box-shadow 0 13px 21px 7px rgba(0,0,0,.1)
		.cancel
			position absolute
			top 20px
			right 20px
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
					padding-right 0px
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
					.orderps
						max-width 418px
						max-height 200px
						word-wrap break-word
						margin-top 15px
						line-height 1.8
						overflow scroll
					span
						line-height 30px
						color rgba(40,47,49,.6)
						&.right
							pull-right()
							color textColor
							font-family PingFang-SC
					.check-result
						btn(green, white, 0.8, 85, 30)
						pull-right()
					.btn-github
						pull-right()
						width 84px
						height 27px
						background-size contain
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
