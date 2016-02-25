<template>
	<section class="guide">
		<div class="browser">
			<div class="slider" :class="[stepClass]">
				<button type="button" class="begin" v-if="step==0" @click="begin"></button>
				<div class="card-tips" v-if="step>0" :style="styleObject">
					<button type="button" class="cancel" @click="cancel"></button>
					<div class="card-content">
						<h3>{{stepText}} <span v-text="step" v-if="step!=4"></span></h3>
						<h6>{{title}}</h6>
						<p>{{text}}</p>
						<div class="card-footer" v-if="step<4">
							<span>1 of 3</span>	
							<button type="button" @click="next">下一步 ></button>
							<button type="button" @click="prev" :class="{'disabled': step==1}">< 上一步</button>
						</div>
						<div class="final" v-if="step==4"></div>
					</div>
					<div class="point">
						<div class="circle"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="stylus">
blue = #00BDEF
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
			height 677px
			top 62px
			margin 0 2px
			background-repeat no-repeat
			background-size cover
			position relative
			&.step1
				background-image url("../img/guide/step1.png")
			&.step2
				background-image url("../img/guide/step2.png")
				.card-tips
					background-image url("../img/guide/card-right.png")
					.point
						right 0
						top 127px
					.card-footer
						bottom 40px
			&.step3
				background-image url("../img/guide/step3.png")
			&.step4
				background-image url("../img/guide/step3.png")
				h3
					text-align center
			.begin
				background url("../img/guide/begin.png") no-repeat
				height 100px
				width 282px
				background-size contain
				margin 290px auto
			.card-tips
				background url("../img/guide/card.png") no-repeat
				width 460px
				height 284px
				background-size cover
				position absolute
				text-align left
				.point
					position absolute
					top 143px
					background rgba(255,255,255, 0.3)
					width 18px
					height 18px
					border-radius 50%
					.circle
						margin 5.5px auto
						background rgba(255,255,255, 0.8)
						width 6.50px
						height 6.50px
						border-radius 50%
				.cancel
					position absolute
					top 40px
					right 50px
					z-index 2
				.card-footer
					position absolute
					height 50px
					bottom 12px
					width 100%
					left 0
					line-height 50px
					text-align left
					padding 0 45px 0 65px
					button
						float right
						margin-top 18px
						margin-left 20px
						&.disabled
							opacity .5
							curosr not-allowed
				.card-content
					padding 34px 45px 34px 65px
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
				h3
					color blue
					line-height 30px
					font-size 26px
					span
						color white
						background blue
						padding 0 8px
</style>
<script>
	var text = ['','首先，你需要确定帮你审核代码的审核人，在「首页」或者 「发现大神」页面，选择大神卡片，点击了解详情。','在审核者的个人页中，点击「申请 Code Review 」按钮，即可进入审核流程。','在弹出的 Code Review 订单中，输入「 GitHub 地址」、「 代码行数」、「问题简介」，输入完成后，点击按钮提交申请。'];
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
					return 'FIN'
				}
			},
			text (){
				return text[this.step]
			},
			title (){
				return title[this.step]
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
						top: '228px',
						left: '623px'
					};break;
					case 2: obj = {
						top: '310px',
						left: '460px'
					};break;
					case 3: obj = {
						top: '396px',
						left: '460px'
					};break;
					case 4: obj = {
						top: '396px',
						left: '460px'
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