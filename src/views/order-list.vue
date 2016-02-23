<template>
	<section class="setting">
		<h2>订单列表</h2>
		<section class="order-list">
			<div class="lj-pagination">
				<ul class="lj-page">
					<li @click="prev" :class="{'disable': currentPage == 0 }"><span>上一页</span></li>
					<li @click="next" :class="{'disable': !showNextPage}"><span>下一页</span></li>
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
						<div class="cell-img">
							<img :src="targetUser(item).avatarUrl">
							<span>{{targetUser(item).username}}</span>
						</div>
					</div>
					<div class="list-cell">{{item.status | reviewStatus}}</div>
					<div class="list-cell">{{item.created | formatTimeCommon}}</div>
					<div class="list-cell">
						{{item.amount | moneyAsYuan | currency '￥' | integer}}
					</div>
					<div class="list-cell"><button type="button" class="detail" @click="view(item)"></button></div>
					<div class="list-cell" v-if="userType=='learner'">
						<button v-if="item.status=='unpaid'" type="button" class="detail" @click="showPayForm(item)"></button>
					</div>
					<div class="list-cell" :class="{'stop': !item.status}" v-if="userType=='reviewer'">
						<button v-if="item.status=='paid'" title="将通知申请者您已答应帮忙审阅。" type="button" class="assess accept" @click="consent(item)"></button>
					</div>
					<div class="list-cell" v-if="userType=='reviewer'">
						<button v-if="item.status=='paid'" title="当您觉得无法完成 Review 时，或对打赏额不满意时，可选择这个。平台将退款给申请者。" type="button" class="reject" @click="reject(item)"></button>
					</div>
					<div class="list-cell" v-if="userType=='reviewer'">
						<button v-if="item.status=='consented' || item.status=='finished'" title="填写或者更改 Review"
										type="button" name="填写" class="write" @click="writeOrEditView(item.orderId)"></button>
					</div>
				</dd>
			</dl>
			<div class="no-list" v-show="tableData.length === 0 ">暂无订单</div>
		</section>

		<overlay :overlay.sync="overlayStatus">
		    <detail :detail="detailData"></detail>
		</overlay>

		<overlay :overlay.sync="payOverlayStatus">
				<order-form mode="pay" :order="payOrder"></order-form>
		</overlay>


	</section>

</template>

<script>
	import util from '../common/util'
	import serviceUrl from "../common/serviceUrl.js"
	import Detail from '../components/order-detail.vue'
	import Overlay from '../components/overlay.vue'
	import OrderForm from '../components/order-form.vue'
	var debug = require('debug')('order');

	export default {
		data () {
			return {
				tableHead: ['序号','用户名','状态','申请日期','打赏金额'],
				tableData: [],
				detailData: {
					userType: 'reviewer',
					reviewer: {},
					learner:{}
				},
				overlayStatus: false,
				currentPage: 0,
				pageLimit: 6,
				userType :'',
				user : {},
				payOrder: {},
				payOverlayStatus: false
			}
		},
		components:{
			overlay: Overlay,
			detail: Detail,
			'order-form': OrderForm
		},
		computed: {
			showNextPage () {
				return this.tableData.length == this.pageLimit;
			}
		},
		created() {
			this.user = util.getLocalUser();
			this.loadCurrentPage();
			if(this.user.type == 'reviewer') {
				this.userType = 'reviewer';
				this.tableHead.push('详情');
				this.tableHead.push('接手');
				this.tableHead.push('拒绝');
				this.tableHead.push('填写');
			}else{
				this.userType = 'learner';
				this.tableHead.push('详情');
				this.tableHead.push('打赏');
			}
		},
		methods: {
			loadCurrentPage () {
				this.$http.get(serviceUrl.ordersList, {
					skip: this.currentPage * this.pageLimit,
					limit: this.pageLimit
				})
				.then((resp) => {
					if (util.filterError(this, resp)) {
						debug('orders: %j', resp.data.result);
						this.tableData = resp.data.result;
					}
				}, util.httpErrorFn(this))
			},
			targetUser (review) {
				// 显示对方的头像、用户名
				return this.user.type == 'learner' ? review.reviewer:review.learner;
			},
			view (item){
				this.overlayStatus = true;
				this.detailData = item;
				this.detailData.userType = this.userType;
				this.detailData.typeText = this.user.type == 'reviewer' ? '申请者':'代码审核者';
			},
			prev() {
				if (this.currentPage - 1 >= 0) {
					this.currentPage--;
					this.loadCurrentPage();
				}
			},
			next() {
				if (this.showNextPage) {
					this.currentPage++;
					this.loadCurrentPage();
				}
			},
			writeOrEditView (orderId) {
				window.location = 'write-review.html?id=' + orderId;
			},
			consentOrReject(order, status) {
				this.$http.post('orders/' + order.orderId, {
					status:status
				}).then((resp) => {
					if (util.filterError(this, resp)) {
						order.status = status;
					}
				}, util.httpErrorFn(this))
			},
			consent(order) {
				debug('order: %j', order);
				this.consentOrReject(order, 'consented');
			},
			reject(order) {
				this.consentOrReject(order, 'rejected');
			},
			showPayForm(order) {
				this.payOrder = order;
				this.payOverlayStatus = true;
			}
		}
	}
</script>

<style lang="stylus">
@import "../stylus/variables.styl";
	.lj-pagination
		font-size 1rem
		text-align center
		margin 10px 0px
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
				&.disable
					color gray
					span
						cursor default
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
			border-bottom 1px solid rgba(0,0,0,.15)
		.no-list
			background: rgba(255,255,255,0.9)
			line-height 96px
			height: 96px
			text-align center
		.list
			display: table;
			width: 100%;
			background #FDFFFF
			font-family "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", Arial, "Microsoft Yahei", Verdana, sans-serif
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
					.cell-img
						position relative
						min-width 130px
					img
						width: 50px;
						height: 50px;
						position absolute
						left 0
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
					.write
						width 24px
						height 24px
						background url(../img/icon/write_review.png)
</style>
