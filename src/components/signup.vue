<template>
	<section class="sign-up" @click="test($event)">
		<button type="button" class="close" @click="close">X</button>
		<h2>注册开启 Code Review 之旅</h2>
		<div class="form">
				<div class="row">
					<input type="text" v-model="phone" placeholder="手机号码">
				</div>
				<div class="code">
					<div class="row" style="width: 250px;">
						<input type="text" v-model="code" placeholder="验证码">
					</div>
					<button class="send" type="button">验证</button>
				</div>
				<div class="row">
					<input type="password"  v-model="password" placeholder="密码">
				</div>
			<button type="button">注册</button>
			<p>注册前请仔细阅读 <strong>服务条款</strong> 和 <strong>许可协议</strong></p>
		</div>
		<p style="padding-top: 30px;">已经注册? <strong> 登录 </strong></p>
	</section>
</template>
<script>
	export default{
		methods:{
			test (e){
				e.stopPropagation();
			},
			close (){
				this.$parent.overlay = false;
			}
		}
	}
</script>
<style lang="stylus">
@import "../stylus/variables.styl";

	.sign-up
		background white
		width 500px
		height 600px
		padding 50px
		position absolute
		left 50%
		top 50%
		margin -300px 0 0 -250px
		.close
			position absolute
			width 20px
			height 20px
			right 20px
			top 20px
		p
			font-size 0.8rem
			text-align center
			strong
				color blue
		h2
			font-size 1.5rem
			text-align center
		.form
			border-top 1px solid #E9EAEC
			border-bottom 1px solid #E9EAEC
			padding 30px 0
			margin-top 20px
			.code
				clearfix()
				.row
					float left
					width 250px
				.send
					float right
					margin 0
					width 135px
					background blue
			p
				margin-bottom 10px
			button
				width 100%
				height 55px
				color white
				font-size 1rem
				text-align center
				line-height 55px
				background green
				border-radius 3px
				margin-top 50px
				margin-bottom 30px
					
		.row
			width 100%
			height 58px
			border 1px solid rgba(40,47,49,.3)
			border-radius 3px
			padding-left 30px
			margin-bottom 10px
			input
				width 100%
				height 55px
				margin-top 1px
				border none
				outline none
		
</style>