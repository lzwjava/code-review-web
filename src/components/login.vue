<template>
	<section class="login" @click="test($event)">
		<button type="button" class="close" @click="close">X</button>
		<h2>欢迎回到 Code Review</h2>
		<div class="form">
			<ul class="row">
				<li>
					<input type="text" class="phone" v-model="phone" placeholder="手机号码">
				</li>
				<li>
					<input type="password"  class="password" v-model="password" placeholder="密码">
				</li>
			</ul>
			<button type="button" @click="login">登录</button>
<!-- 			<p>忘记密码？</p> -->
		</div>
		<p style="padding-top: 30px;">您还没有<strong>注册？</strong></p>
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
				phone:'13261630925',
				password: '123456'
			}
		},
		methods:{
			test (e){
				e.stopPropagation();
			},
			close (){
				this.$parent.overlay = false;
			},
			login (){
<<<<<<< HEAD
				this.$http.post('user/login', {
=======
				this.$http.post(serviceUrl.login, {
>>>>>>> 1919739bed711e1812ee62a610134f3e0fbba34c
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
blue = #00BDEF

green = #33C96F

	.login
		background white
		width 500px
		height 500px
		padding 50px
		position absolute
		left 50%
		top 50%
		margin -250px 0 0 -250px
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
			p
				color blue
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
			height 116px
			border 1px solid rgba(40,47,49,.3)
			border-radius 3px
			li
				height 57px
				padding-left 30px
			li:first-child
				border-bottom 1px solid rgba(40,47,49,.3)
			input
				width 100%
				height 55px
				margin-top 1px
				border none
				outline none
		
</style>
