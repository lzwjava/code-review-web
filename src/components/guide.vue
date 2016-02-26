<template>
	<section class="guide">
		<div class="browser">
			<div class="slider" :class="[stepClass]">
				<h2 v-if="step==0">Code Review 申请指南</h2>
				<button type="button" class="begin" v-if="step==0" @click="begin">开始申请</button>
				<div class="sliderbg" :class="[stepClass]"></div>
				<div class="stepcontainer">
					<div class="card-tips" v-if="step>0" :style="styleObject">
						<button type="button" class="cancel" @click="cancel"></button>
						<div class="card-content" :class="[stepClass]">
							<h3 :class="[stepClass]">{{stepText}} <div class ="numbercontainer" :class="[stepClass]"><span v-text="step" v-if="step!=4" :class="[stepClass]"></span> </div> </h3>
							<h6>{{title}}</h6>
							<p>{{text}}</p>
							<div class="card-footer" v-if="step<4" :class="[stepClass]">
								<span style="font-family: PingFang-SC;">{{stepnumber}} of 3</span>
								<button type="button" @click="next">下一步 &gt;</button>
								<button type="button" @click="prev" :class="{'disabled': step==1}">&lt; 上一步</button>
							</div>
							<div class="final" :class="[stepClass]"></div>
						</div>
					</div>
					<div class="point1" :class="[stepClass]"></div>
					<div class="point2" :class="[stepClass]"></div>
					<div class="point3" :class="[stepClass]"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="stylus">
blue = #1cb2ef
	.guide
		background white
		padding 30px 0;
	.browser
		background: url("../img/guide/browser.png") no-repeat
		margin 0 auto;
		width: 1160px
		height: 800px
		background-size contain
		.slider
			h2
				padding-top 276px
			.begin
				background #33C96F
				height 45px
				border-radius 45px
				width 162px
				background-size contain
				margin 21px auto auto auto
				color white
				font-size 1rem
				letter-spacing 2px
				font-weight 300
				transition all 0.3s ease 0s
				-webkit-transition all 0.3s ease 0s
				&:hover
					opacity 0.6
			height 677px
			top 62px
			margin 0 2px
			position relative
			.sliderbg
				width 100%
				height 100%
				background-repeat no-repeat
				background-size cover
				opacity 1
				-webkit-filter brightness(1)
				transition all 0.6s ease 0s
				-webkit-transition all 0.6s ease 0s
				&.step1
					opacity 1
					-webkit-filter brightness(0.6)
					background-image url("../img/guide/step1.jpg")
				&.step2
					opacity 1
					-webkit-filter brightness(0.6)
					background-image url("../img/guide/step2.jpg")
				&.step3
					opacity 1
					-webkit-filter brightness(0.6)
					background-image url("../img/guide/step3.jpg")
				&.step4
					opacity 1
					-webkit-filter brightness(0.6)
					background-image url("../img/guide/step3.jpg")
			&.step2
				.card-tips
					.card-footer
						bottom -2px
			&.step4
				h3
					text-align center
			.point1
				position absolute
				top 378px
				left 630px
				background rgba(255,255,255, 0.5)
				width 12px
				height 12px
				border-radius 50%
				box-shadow 0px 0px 0px 0px rgba(255,255,255,0.8)
				animation 2s cd-pulse infinite
				-webkit-animation 2s cd-pulse infinite
				transition all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)
				-webkit-transition all 0.6 cubic-bezier(0.68, -0.55, 0.265, 1.55)
				transform scale(0)
				-webkit-transform scale(0)
				&.step1
					transform scale(1)
					-webkit-transform scale(1)
					transition all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)
					-webkit-transition all 0.6 cubic-bezier(0.68, -0.55, 0.265, 1.55)
				&.step2
					transform scale(0)
					-webkit-transform scale(0)
					transition all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)
					-webkit-transition all 0.6 cubic-bezier(0.68, -0.55, 0.265, 1.55)
			.point2
				position absolute
				top 508px
				left 890px
				background rgba(255,255,255, 0.5)
				width 12px
				height 12px
				border-radius 50%
				box-shadow 0px 0px 0px 0px rgba(255,255,255,0.8)
				animation 2s cd-pulse infinite
				-webkit-animation 2s cd-pulse infinite
				transition all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)
				-webkit-transition all 0.5 cubic-bezier(0.68, -0.55, 0.265, 1.55)
				transform scale(0)
				-webkit-transform scale(0)
				&.step2
					transform scale(1)
					-webkit-transform scale(1)
					transition all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)
					-webkit-transition all 0.6 cubic-bezier(0.68, -0.55, 0.265, 1.55)
				&.step3
					transform scale(0)
					-webkit-transform scale(0)
					transition all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)
					-webkit-transition all 0.5 cubic-bezier(0.68, -0.55, 0.265, 1.55)
			.point3
				position absolute
				top 542px
				left 456px
				background rgba(255,255,255, 0.5)
				width 12px
				height 12px
				border-radius 50%
				box-shadow 0px 0px 0px 0px rgba(255,255,255,0.8)
				animation 2s cd-pulse infinite
				-webkit-animation 2s cd-pulse infinite
				transition all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)
				-webkit-transition all 0.5 cubic-bezier(0.68, -0.55, 0.265, 1.55)
				transform scale(0)
				-webkit-transform scale(0)
				&.step3
					transform scale(1)
					-webkit-transform scale(1)
					transition all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)
					-webkit-transition all 0.6 cubic-bezier(0.68, -0.55, 0.265, 1.55)
				&.step4
					transform scale(0)
					-webkit-transform scale(0)
					transition all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)
					-webkit-transition all 0.5 cubic-bezier(0.68, -0.55, 0.265, 1.55)

			.card-tips
				width 460px
				height 284px
				background-size cover
				position absolute
				text-align left
				transition all 0.4s ease 0s
				-webkit-transition all 0.4s ease 0s
				.cancel
					position absolute
					top 48px
					right 52px
					z-index 2
				.card-footer
					position absolute
					height 45px
					bottom 0px
					width 100%
					left 0
					line-height 0px
					text-align left
					padding-left 25px
					padding-right 88px
					margin-left 37px
					&.step3
						height 43px
					button
						float right
						margin-top -12px
						margin-left 20px
						font-weight 500
						font-size 14px
						&:hover
							color blue
						&.disabled
							display none
							cursor not-allowed
				.card-content
					top 0px
					left 0px
					opacity 1
					padding 25px 25px 25px 25px
					margin-left 37px
					margin-top 15px
					height 258px
					width 395px
					border-radius 3px
					background white
					box-shadow 0 13px 21px 7px rgba(0,0,0,0.1)
					-webkit-box-shadow 0 13px 21px 7px rgba(0,0,0,0.1)
					transition all 0.3s ease 0s
					&.step4
						height 286px

					h6
						font-size 20px
						margin 15px 0
					p
						line-height 150%
						font-size 16px
					.final
						width 128px
						height 128px
						background url("../img/guide/final.png") no-repeat
						background-size cover
						margin 35px auto
						transform scale(0)
						-webkit-transform scale(0)
						transition all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.575)
						-webkit-transition all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.575)
						&.step4
							transform scale(1)
							-webkit-transform scale(1)
				h3
					color blue
					line-height 30px
					font-size 26px
					&.step4
						color rgb(40,47,49)
						opacity 1
					.numbercontainer
						&.step4
							background none
						width 27px
						height 32px
						background blue
						margin-right 245px
						margin-top -2px
						float right
						span
							color white
							padding 0 8px
							&.step2
								margin-left -1px
							&.step3
								margin-left: -1px;
								font-size 23px
								position absolute
								top 36px
@-webkit-keyframes cd-pulse
	0%
		box-shadow 0 0 0 0 #ff962x
	100%
		box-shadow 0 0 0 20px rgba(255, 150, 44, 0)
@-moz-keyframes cd-pulse
	0%
		box-shadow 0 0 0 0 #ff962x
	100%
		box-shadow 0 0 0 20px rgba(255, 150, 44, 0)
@keyframes cd-pulse
	0%
		box-shadow 0 0 0 0 #ff962x
	100%
		box-shadow 0 0 0 20px rgba(255, 150, 44, 0)
</style>

<script>
	var text = ['','首先，你需要确定帮你审核代码的审核人，在「首页」或者 「发现大神」页面，选择大神卡片，点击了解详情。','在审核者个人页中，点「申请 Code Review 」按钮，即可进入审核流程。','在弹出的 Code Review 订单中，输入「 GitHub 地址」、「 代码行数」、「问题简介」，输入完成后，点击按钮提交申请。'];
	var title = ['','发现大神','申请 Code Review','填写订单']
	export default{
		data (){
			return{
				step: 0,
			}
		},
		computed: {
			stepText (){
				if(this.step!=4){
					return 'STEP'
				}else{
					return '申请成功'
				}
			},
			text (){
				return text[this.step]
			},
			title (){
				return title[this.step]
			},
			stepnumber (){
				return this.step
			},
			stepClass (){
				var className = '';
				switch (this.step){
					case 0: className = '';break;
					case 1: className = 'step1';break;
					case 2: className = 'step2';break;
					case 3: className = 'step3';break;
					case 4: className = 'step4';break;
					default: className = '';break;
				}
				return className
			},
			styleObject (){
				var obj = {
					top: 0,
					left: 0
				};
				switch (this.step){
					case 0: obj = {
						top: 0,
						left: 0
					};break;
					case 1: obj = {
						top: '230px',
						left: '623px'
					};break;
					case 2: obj = {
						top: '365px',
						left: '440px'
					};break;
					case 3: obj = {
						top: '396px',
						left: '460px'
					};break;
					case 4: obj = {
						top: '208px',
						left: '360px'
					};break;
					default: obj = {
						top: 0,
						left: 0
					};break;
				}
				return obj;
			}
		},
		methods: {
			cancel (){
				this.step = 0;
			},
			begin(){
				this.step = 1;
			},
			next (){
				this.step += 1;
			},
			prev (){
				if(this.step > 0){
					this.step -= 1;
				}
			}
		}
	}
</script>
