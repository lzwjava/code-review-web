<template>
	<section class="setting">
		<h2>Review 订单列表</h2>
		<section class="order-list">
			<div class="lj-pagination">
				<div class="lj-info" v-if="showInfo"></div>
				<div class="lj-jump" v-if="showJump">
					<input type="text" v-model="pageJump"/>
					<span>搜索</span>
				</div>
				<ul class="lj-page">
					<li @click="first" v-show="pageStart != 1"><span>首页</span></li>
					<li @click="prev" v-show="pageStart != 1"><span>上一页</span></li>
					<li :class="{'active': el == pageStart}" @click="pagePath(el)" v-for="el in pageList"><span>{{el}}</span></li>
					<li @click="next" v-show="pageStart != pageLimit.max"><span>下一页</span></li>
					<li @click="last" v-show="pageStart != pageLimit.max"><span>尾页</span></li>
				</ul>
			</div>
			<dl class="list">
				<dt class="list-row table-header">
					<div class="list-cell" v-for="item in tableHead">{{item}}</div>
				</dt>
				<dd class="list-row" v-for="item in tableData" :class="{'even': $index%2 == 0}">
					<div class="list-cell">{{item.number}}</div>
					<div class="list-cell">
						<img :src="item.avatar">
						<span>{{item.nickname}}</span>
					</div>
					<div class="list-cell">{{item.status}}</div>
					<div class="list-cell">{{item.date}}</div>
					<div class="list-cell">
						{{item.money}}
					</div>
					<div class="list-cell" :class="{'stop': !item.status}">
						<button type="button" class="accept">接手</button>
					</div>
					<div class="list-cell"><button type="button" class="detail">详情</button></div>
					<div class="list-cell"><button type="button" class="reject">拒绝</button></div>
				</dd>
			</dl>
		</section>
	</section>
	

</template>

<script>
	export default {
		data () {
			return { 
				tableHead: ['序号','用户名','状态','申请日期','打赏金额','接手','详情','拒绝'],
				tableData: [{number: 1,date: '2015-12-14', nickname: 'IU',avatar: 'http://img5.duitang.com/uploads/item/201411/06/20141106213813_uCE3W.thumb.700_0.jpeg',status: 0,money: '1215'},{number: 2,date: '2015-12-16', nickname: '李智恩',avatar: 'http://img5.duitang.com/uploads/item/201408/02/20140802204944_BK8V5.png',status: 1,money: '125'}],
				showJump : false,
				showInfo: false,
				pageJump: '',
				pageList: [1,2,3,4],
				pageStart: 1,
				pageLimit : {
					min: 1,
					max: 30,
					total: 1
				}
			}
		}
	}
</script>

<style lang="stylus">
@import "../stylus/variables.styl";
	.lj-pagination
		font-size 1rem
		text-align center
		margin 50px 0 30px
		clearfix()
		.lj-ibfo,.lj-jump,.lj-page
			float left
		.lj-page
			margin 0
			li
				list-style none
				margin-right 10px
				float left
				background green
				color white
				&.active
					color red
				span
					height 60px
					width 60px
					line-height 60px
					padding 0 5px
					display inline-block
					cursor pointer
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
		.list
			display: table;
			width: 100%;
			background #FDFFFF
			.list-row
				display: table-row
				background: rgba(255,255,255,0.03)
				height: 120px
				&.table-header
					height 90px
					background: rgba(40,47,49,.8)
					color white
				&.even
					background: rgba(0,189,239,0.03)
				.list-cell
					display: table-cell;
					text-align: center;
					vertical-align: middle;
					min-width: 80px;
					&:last-child
						border-right: none;
					&.stop
						color: #f04e4b;
					
					img
						width: 60px;
						height: 60px;
					
					.pop-btn
						color: #249bdf;
						line-height: 50px;
						cursor: pointer;
</style>