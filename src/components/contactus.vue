<template>
	<section class="sign-up" @click="stop($event)">
		<button type="button" class="cancel" @click="close"></button>
		<h2>联系我们</h2>
		<div class="form">
			<div class="qrcode"></div>
			<div class="wechattext">Code Review 微信反馈通道</div>
		</div>
		<p style="padding-top: 30px;font-weight: bold;">邮箱地址：feedback@reviewcode.cn</p>
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

	.sign-up
		background white
		width 500px
		height 615px
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
		.qrcode
			width 320px
			height 320px
			background url("../img/QRCode@2x.png") no-repeat
			background-size contain
			margin-top 10px
			margin 0 auto
		.wechattext
			text-align center
			margin 0 auto
			font-size 16px
			margin-top 20px
			margin-bottom 10px
			font-weight bold

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
				font-size 14px

</style>
