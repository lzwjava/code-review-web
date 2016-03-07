<template>
	<section class="login" @click="stop($event)">
		<button type="button" class="cancel" @click="cancel"></button>
		<h2>欢迎回到 Code Review</h2>
		<div class="form">
			<form v-on:submit.prevent="login">
			<ul class="row">
				<li>
					<input type="text" class="phone" v-model="phone" placeholder="手机号码">
					<span class="icon-Phone icon"></span>
				</li>
				<li>
					<input type="password"  class="password" v-model="password" placeholder="密码">
					<span class="icon-Password icon"></span>
				</li>
			</ul>
			<button type="submit">登录</button>
			</form>
				<p class="forgetpswd" @click="toForgot">忘记密码？</p>
		</div>
		<p style="padding-top: 30px;">您还没有<strong style="cursor:pointer;margin-left:5px;" @click="toSignup">注册？</strong></p>
	</section>
</template>
<script>
  'use strict'
  import md5 from 'blueimp-md5'
  import util from '../common/util'
  import serviceUrl from "../common/serviceUrl.js"
  var debug = require('debug')('components');
  debug(util);
	export default{
		data (){
			return {
				phone:'',
				password: ''
			}
		},
		methods:{
			stop (e){
				e.stopPropagation();
			},
			cancel (){
				this.$parent.overlay = false;
			},
			toSignup(e){
				e.stopPropagation();
				this.$dispatch('changeView', 'signup');
			},
			toForgot(e) {
				e.stopPropagation();
				this.$dispatch('changeView', 'reset-password');
			},
			login (){
				this.$http.post(serviceUrl.login, {
					mobilePhoneNumber: this.phone,
					password: md5(this.password)
				},{
					emulateJSON: true
				}).then((res) => {
					if (util.filterError(this, res)) {
						this.$parent.overlay = false;
						util.updateNavUser(this, res.data.result);
					}
				}, util.httpErrorFn(this))
			}
		}
	}
</script>
<style lang="stylus">
@import "../font/iconfont.css";
@import '../../node_modules/rupture/rupture/index.styl'

blue = #1CB2EF
green = #33C96F

	.login
		background white
		width 500px
		border-radius 3px
		height 525px
		padding 50px
		box-shadow 0px 13px 21px 7px rgba(0,0,0,.1)
		-webkit-box-shadow 0px 13px 21px 7px rgba(0,0,0,.1)
		position absolute
		left 50%
		top 50%
		margin -250px 0 0 -250px
		.cancel
			position absolute
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
			padding 30px 0 10px 0
			margin-top 20px
			p
				color blue
				margin-bottom 20px
			button
				width 100%
				height 55px
				color white
				font-size 1rem
				text-align center
				line-height 55px
				background green
				border-radius 3px
				margin-top 62px
				margin-bottom 30px
				-webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
				box-shaodw 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
				border 1px solid #31B766
		.forgetpswd
			margin-bottom 10px
		.row
			width 100%
			height 116px
			border-radius 3px
			li
				height 57px
				margin-bottom 10px
			input
				width 100%
				height 55px
				margin-top 1px
				border 1px solid rgba(40,47,49,.3)
				outline none
				font-size 14px
				text-indent 53px
				&:focus
					border 1px solid #1CB2EF
					+ .icon
						color #08B1F6
						opacity 1

</style>
