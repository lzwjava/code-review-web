<template>
	<section class="sign-up" @click="stop($event)">
		<button type="button" class="cancel" @click="close"></button>
		<h2>注册开启 Code Review 之旅</h2>
		<div class="form">
				<div class="row">

					<input type="text" v-model="phone" placeholder="手机号码">
					<span class="icon-Phone icon"></span>
				</div>
				<div class="code">
					<div class="row">
						<input type="text" v-model="smsCode" placeholder="验证码">
						<span class="icon-Verify icon"></span>
					</div>
					<button class="send" :class="{'disabled': this.sendState}" type="button" @click="requestSmsCode" v-text="sendText"></button>
				</div>
				<div class="row">

					<input type="password"  v-model="password" placeholder="密码">
					<span class="icon-Password icon"></span>
				</div>
				<div class="row">

					<input type="text"  v-model="username" placeholder="用户名">
					<span class="icon-User icon"></span>
				</div>
			<button type="button" @click="register" class="gbutton">注册</button>
			<a href="/statement.html" target="_blank"><p>注册前请仔细阅读 <strong>服务条款</strong></p></a>
		</div>
		<p style="padding-top: 30px;">已经注册? <strong style="cursor:pointer;margin-left:5px;" @click="login"> 登录 </strong></p>
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
			login(e){
				e.stopPropagation();
				this.$dispatch('changeView', 'login');
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
@import "../font/iconfont.css";

	.sign-up
		background white
		width 500px
		height 670px
		padding 50px
		border-radius 3px
		box-shadow 0px 13px 21px 7px rgba(0,0,0,.1)
		-webkit-box-shadow 0px 13px 21px 7px rgba(0,0,0,.1)
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
					cursor not-allowed
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
				-webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
				box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
				border 1px solid #00a3e6
			.gbutton
				border 1px solid #31B766
		.row
			width 100%
			height 58px
			border-radius 3px
			margin-bottom 10px
			input
				width 100%
				height 55px
				margin-top 1px
				border 1px solid rgba(40,47,49,.3)
				text-indent 53px
				outline none
				font-size 14px
				&:focus
					border 1px solid #1CB2EF
					+ .icon
						color #08B1F6
						opacity 1
@media only screen and (max-width: 700px)
	.sign-up
		width 90%
		max-height 90%
		margin-left -45%
		padding 9%
		height auto
		.cancel
			right 10px
			top 10px
		.row
			height 40px
			input
				height 35px
				text-indent 43px
			.icon
				font-size 26px
				margin-top -31px
				margin-left 10px
		.form
			.code
				.row
					width 50%
				.send
					width 30%
					height 35px	
					font-size 12px
					line-height 35px
			.gbutton
				margin-top 30px
				margin-bottom 20px
</style>
