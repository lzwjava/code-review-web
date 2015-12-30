<template>
	<section class="setting">
		<h2>订单列表</h2>
		<section class="order-list">
			<div class="lj-pagination">
				<ul class="lj-page">
					<li @click="prev" v-show="currentPage != 0"><span>上一页</span></li>
					<li @click="next" v-show="showNextPage"><span>下一页</span></li>
				</ul>
				<div class="lj-search" v-if="showSearch">
					<input type="text" v-model="pageJump"/>
					<span>搜索</span>
				</div>
			</div>
			<dl class="list">
				<dt class="list-row table-header">
					<div class="list-cell" v-for="item in tableHead">{{item}}</div>
				</dt>
				<dd class="list-row" v-for="item in tableData" :class="{'even': $index%2 == 0}">
					<div class="list-cell">{{item.orderId}}</div>
					<div class="list-cell">
						<div>
							<img :src="targetUser(item).avatarUrl">
							<span>{{targetUser(item).username}}</span>
						</div>
					</div>
					<div class="list-cell">{{item.status | reviewStatus}}</div>
					<div class="list-cell">{{item.created}}</div>
					<div class="list-cell">
						{{item.money  | currency '￥' | integer}}
					</div>
					<div class="list-cell" :class="{'stop': !item.status}">
						<button type="button" class="assess accept"></button>
					</div>
					<div class="list-cell"><button type="button" class="detail"></button></div>
					<div class="list-cell"><button type="button" class="reject"></button></div>
				</dd>
			</dl>
		</section>
	</section>
	

</template>

<script>
	import util from '../common/util'
	import serviceUrl from "../common/serviceUrl.js"
	var debug = require('debug')('order');

	export default {
		data () {
			return { 
				tableHead: ['序号','用户名','状态','申请日期','打赏金额','接手','详情','拒绝'],
				tableData: [],
				showJump : false,
				showInfo: false,
				currentPage: 0,
				pageLimit: 2,
				user : {}
			}
		},
		computed: {
			showNextPage () {
				return this.tableData.length == this.pageLimit;
			}
		},
		created() {
			this.user = util.getLocalUser();
			this.loadCurrentPage();
		},
		methods: {
			loadCurrentPage () {
				this.$http.get(serviceUrl.ordersList, {
					skip: this.currentPage * this.pageLimit,
					limit: this.pageLimit
				})
				.then((resp) => {
					if (util.filterError(this, resp)) {
						debug('%j', resp.data.result);
						this.tableData = resp.data.result;
					}
				}, util.httpErrorFn(this))
			},
			targetUser (review) {
				if (this.user.type == 0) {
					return review.reviewer;
				} else {
					return review.learner;
				}
			},
			prev() {
				if (this.currentPage - 1 >= 0) {
					this.currentPage--;
					this.loadCurrentPage();
				}
			},
			next() {
				this.currentPage++;
				this.loadCurrentPage();
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
		.lj-search,.lj-jump,.lj-page
			float left
			line-height 50px
			input
				height 50px
				border 1px solid rgba(40,47,49,.3)
				box-shadow 0 1px 4px rgba(0,0,0,0.03)
				font-size 1rem
				text-align center
				margin 0 10px
		.lj-jump
			input
				width 50px
		.lj-search
			margin-left 20px
			input
				width 253px
		.lj-page
			margin 0
			li
				list-style none
				margin-right 5px
				float left
				color blue
				&.active
					color textColor
				span
					padding 0 5px
					display inline-block
					cursor pointer
	.setting
		width 1160px
		padding-bottom 80px
		font-size 1rem
		margin 80px auto
		clearfix()
		input,textarea,select,button
			border-radius 3px
		h2
			font-size 1.5rem
			height 65px
			border-bottom 1px solid rgba(0,0,0,.3)
		.list
			display: table;
			width: 100%;
			background #FDFFFF
			.list-row
				display: table-row
				background: rgba(255,255,255,0.03)
				height: 96px
				&.table-header
					height 70px
					background: rgba(40,47,49,.8)
					color white
				&.even
					background: rgba(0,189,239,0.03)
				.list-cell
					display: table-cell;
					text-align: center;
					vertical-align: middle;
					line-height: 50px;
					min-width: 80px;
					&:last-child
						border-right: none;
					&.stop
						color: #f04e4b;
					
					img
						width: 50px;
						height: 50px;
						float left
						border-radius 50%
					.pop-btn
						color: #249bdf;
						line-height: 50px;
						cursor: pointer
					.assess
						background url(../img/icon/assess.png) no-repeat
						width 21px
						height 21px
						&:hover
							background-image url(../img/icon/assess_hover.png)
						&.disable
							background-image url(../img/icon/assess_disable.png)
					.accept
						background url(../img/icon/accept.png) no-repeat
						width 21px
						height 21px
						&:hover
							background-image url(../img/icon/accept_hover.png)
						&.disable
							background-image url(../img/icon/accept_disable.png)
					.detail
						background url(../img/icon/detail.png) no-repeat
						width 23px
						height 14px
						&:hover
							background-image url(../img/icon/detail_hover.png)
					.reject
						background url(../img/icon/reject.png) no-repeat
						width 15px
						height 15px
						&:hover
							background-image url(../img/icon/reject_hover.png)
						&.disable
							background-image url(../img/icon/reject_disable.png)
</style>
