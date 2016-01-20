<template>
	<section class="sign-up" @click="stop($event)">
		<button type="button" class="cancel" @click="close"></button>
		<h2>注册开启 Code Review 之旅</h2>
		<div class="form">
				<div class="row">
					<input type="text" v-model="phone" placeholder="手机号码">
				</div>
				<div class="code">
					<div class="row" style="width: 250px;">
						<input type="text" v-model="smsCode" placeholder="验证码">
					</div>
					<button class="send" :class="{'disabled': this.sendState}" type="button" @click="requestSmsCode" v-text="sendText"></button>
				</div>
				<div class="row">
					<input type="password"  v-model="password" placeholder="密码">
				</div>
				<div class="row">
					<input type="text"  v-model="username" placeholder="用户名">
				</div>
			<button type="button" @click="register">注册</button>
			<a href="/statement.html" target="_blank"><p>注册前请仔细阅读 <strong>服务条款</strong></p></a>
		</div>
		<p style="padding-top: 30px;">已经注册? <strong> 登录 </strong></p>
	</section>
</template>
<script>
  import md5 from 'blueimp-md5'
  import util from '../common/util'
  import serviceUrl from "../common/serviceUrl.js";
  var debug = require('debug')('components')
	export default{
		data () {
			return {
				phone:'',
				smsCode: '',
				password: '',
				username: '',
				sendState: false,
				sendText: '发送验证码'
			}
		},
		methods:{
			stop (e){
				e.stopPropagation();
			},
			close (){
				this.$parent.overlay = false;
			},
			register () {
				this.$http.post(serviceUrl.register, {
					mobilePhoneNumber: this.phone,
					password: md5(this.password),
					username: this.username,
					smsCode: this.smsCode,
					type: 'learner'
				},{
					emulateJSON: true
				}).then((res) => {
					if (util.filterError(this, res)) {
						this.$parent.overlay = false;
						util.updateNavUser(this, res.data.result);
					}
				}, util.httpErrorFn(this))
			},
			requestSmsCode () {
				if(this.sendState){
					return;
				}
				this.sendState = true;
				this.$http.post('/api/user/requestSmsCode', {
					mobilePhoneNumber:this.phone
				}, {
					emulateJSON: true
				}).then((res) => {
					this.sendText = 60;
					let time = setInterval(()=>{
						this.sendText --;
						if(this.sendText == 0){
							clearInterval(time);
							this.sendText = '发送验证码';
							this.sendState = false;
						}
					}, 1000);
					if (util.filterError(this, res)) {

					}else{
						clearInterval(time);
						this.sendText = '发送验证码';
						this.sendState = false;
					}
				}, util.httpErrorFn(this))
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
		.cancel
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
				.disabled
					background #767676
					cursor not-allowed
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
