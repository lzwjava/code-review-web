<template>
	<section class="setting">
		<h2>个人设置</h2>
		<section class="form">
			<div class="avatar">
				<div class="avatar-img">
					<img src="">
				</div>
				<button type="button">修改头像</button>
			</div>
			<div class="row">
				<p>昵称</p>
				<input type="text" v-model="nickname"/>
			</div>
			<div class="row">
				<p>Github 地址</p>
				<span>github.com/ </span><input style="width: 599px;" type="text" v-model="github"/>
			</div>
			<div class="row">
				<p>手机号码</p>
				<input type="text" v-model="phone"/>
			</div>
			<div class="row">
				<p>公司名称</p>
				<input type="text" v-model="company"/>
			</div>
			<div class="row">
				<p>职位</p>
				<input type="text"  v-model="jobTitle"/>
			</div>
			<div class="row">
				<p>做过的应用</p>
				<input type="text" v-model="app" />
			</div>
			<div class="row">
				<p>个人简介</p>
				<textarea v-model="introduction"></textarea>
			</div>
			<div class="row">
				<button type="button">确认修改</button>
			</div>
		</section>
		<section class="tags">
			<h2>想学领域</h2>
			<div class="tags-content">
				<ul class="list">
					<li><span>dasdasdas</span><i class="delete">X</i></li>
					<li><span>dasdasdas</span><i class="delete">X</i></li>
					<li><span>dasdasdas</span><i class="delete">X</i></li>
				</ul>
				<div class="select-content">
					<p>输入 「想学领域」</p>
					<select>
						<option>111</option>
						<option>111</option><option>111</option><option>111</option>
					</select>
					<button type="button">添加</button>
				</div>
			</div>
		</section>
	</section>
	

</template>

<style lang="stylus">
@import "../stylus/variables.styl";
	.setting
		width 1422px
		padding-bottom 80px
		font-size 1rem
		margin 80px auto
		clearfix()
		input,textarea,select,button
			border-radius 3px
		h2
			font-size 2rem
			height 70px
			border-bottom 1px solid rgba(0,0,0,.3)
		.form, .tags
			float left
			margin-top 80px
		.form
			width 870px
			background #FDFFFF
			font-weight 200
			button
				width 150px
				height 60px
				color white
				font-size 1rem
				background green
				text-align center
				line-height 60px
				border none
			.avatar
				padding 30px
				background white
				text-align center
				border-bottom 1px solid rgba(0,0,0,0.15)
				.avatar-img
					width 128px
					height 128px
					margin 0 auto
					img
						width 120px
						height 120px
				button
					margin-top 30px
			.row
				padding 20px 90px 0;
				p
					opacity 0.6
					line-height 36px
				input
					height 50px
					border 1px solid rgba(40,47,49,.5)
					width 100%
					font-size 1rem
					text-indent 20px
					box-shadow 0 1px 4px rgba(0,0,0,0.03)
				textarea
					width 100%
					height 280px
					text-indent 20px
					resize none
				button
					margin-top 20px
					margin-bottom 20px
		.tags
			width 480px
			margin-left 72px
			h2
				font-size 1.6rem
				height 56px
				border none
			.tags-content
				background #FDFFFF
				border 1px solid rgba(0,0,0,0.15)
				box-shadow 0 4px 4px rgba(135,135,135,0.15)
				font-weight 200
				.list
					padding 25px
					background white
					min-height 300px
					li
						margin-right 20px
						padding 15px 20px
						margin-bottom 20px
						border-radius 3px
						color #F01490
						background rgba(240,20,144,.1)
						.delete
							margin-left 10px
				.select-content
					border-top 1px solid rgba(0,0,0,0.15)
					height 150px
					padding 25px
					p
						opacity 0.6
						line-height 50px
					select
						height 50px
						width 300px
						-webkit-appearance: none
						border 1px solid rgba(40,47,49,0.3)
						box-shadow 0 1px 4px rgba(0,0,0,0.03)
						background white
						option
							-webkit-appearance: none
							height 40px
							line-height 40px
					button
						width 100px
						height 50px
						background green
						color white
						font-size 1rem
						text-align center
						line-height 50px
						border none
						margin-left 20px
</style>