<template>
	<loading>
		<section class="setting">
			<h2>个人设置</h2>
			<section class="form">
				<h3>个人资料</h3>
				<div class="white">
					<div class="avatar-container" id="upload-container">
						<user-avatar :user="user"></user-avatar>
						<button type="button" id="pickfiles">修改头像</button>
					</div>
					<div class="row">
						<p>昵称</p>
						<input type="text" v-model="username"/>
					</div>
					<div class="row">
						<p>Github 地址</p>
						<input type="text" v-model="github" style="text-indent: 116px" />
						<span>github.com / </span>
					</div>

					<div class="row">
						<button class="pwd-btn" @click="showChangePassword">修改密码</button>
					</div>
				</div>
				<div class="color">
					<div class="row">
						<p>公司名称</p>
						<input type="text" v-model="company"/>
					</div>
					<div class="row">
						<p>职位</p>
						<input type="text"  v-model="jobTitle"/>
					</div>
					<div class="row">
						<p>个人简介</p>
						<textarea v-model="introduction"></textarea>
					</div>
					<div class="row">
						<button class="update-btn" type="button" @click="updateUser">确认修改</button>
						<button class="apply-btn" v-if="user.type != 'reviewer'" type="button" @click="applyReviewer">申请成为大神</button>
					</div>
				</div>
			</section>
			<section class="tags">
				<h3 class="region-title">{{tagTitle}}</h3>
				<div class="tags-content">
					<ul class="list">
						<li v-for="tag in tags">
							<tag :tag="tag" :show-del="true"></tag>
						</li>
					</ul>
					<div class="select-content">
						<p>输入 「{{tagTitle}}」</p>
						<select v-model="selected">
							<option v-for="tag in remains" :value="{tagId: tag.tagId}">{{tag.tagName}}</option>
						</select>
						<button type="button" @click="addTag">添加</button>
					</div>
				</div>
			</section>


		</section>

		<overlay :overlay.sync="overlayStatus">
			<reset-password action="change"></reset-password>
		</overlay>

	</loading>

</template>

<script type="text/javascript">
	import util from '../common/util';
	import UserAvatar from '../components/user-avatar.vue';
	var debug = require('debug')('setting');
	require('moxie');
	require('plupload'); // use for Qiniu js sdk
	import Qiniu from 'qiniu-js-sdk'
	import serviceUrl from "../common/serviceUrl.js"
	import Tag from '../components/tag.vue'
	import Loading from '../components/loading.vue'
	import ResetPassword from '../components/reset-password.vue'
	import Overlay from '../components/overlay.vue'
	export default {
		components: {
			'user-avatar': UserAvatar,
			'tag': Tag,
			'loading': Loading,
			'reset-password': ResetPassword,
			'overlay': Overlay
		},
		data () {
			return {
				user: {},
				username: '',
				github: '',
				phone: '',
				company: '',
				jobTitle: '',
				introduction: '',
				avatarUrl: '',
				tags: [],
				allTags: [],
				selected: '',
				overlayStatus: false,
			}
		},
		events: {
			/**
			 * [使用事件订阅方式来修改列表数据]
			 * @param  {[type]} newObj [回调的修改数据对象]
			 * @return {[type]}        [无]
			 */
			'remove-tag': function(newTags){
				this.tags = newTags;
			}
		},
		computed: {
			'remains': function () {
				if (!this.allTags || !this.tags) {
					return [];
				}
				var remain = [];
				for (var i = 0; i < this.allTags.length; i ++) {
					var tag = this.allTags[i];
					var found = false;
					for (var j = 0; j < this.tags.length; j++) {
						if (tag.tagId === this.tags[j].tagId) {
							found = true;
						}
					}
					if (!found) {
						remain.push(tag);
					}
				}
				return remain;
			},
			'tagTitle': function () {
				debug('type %j', this.user.type);
				switch (this.user.type) {
					case 'learner': return '想学领域';
					case 'reviewer': return '擅长领域';
				}
				return '';
			}
		},
		methods: {
			updateUser (e, cb) {
				var data = {
					gitHubUsername: this.github,
					company: this.company,
					jobTitle: this.jobTitle,
					introduction: this.introduction,
				};
				if (this.username && this.username.length > 0) {
					data.username = this.username;
				}
				if (this.avatarUrl && this.avatarUrl.length > 0) {
					data.avatarUrl = this.avatarUrl;
				}
				this.$http.patch(serviceUrl.updateUser, data)
				.then((res) => {
					debug(res)
					if (util.filterError(this, res)) {
						 util.show(this, 'success', '更新成功');
					   this.setUserInfo(res.data.result);
						 util.updateNavUser(this, res.data.result);
						 debug('cb: %j', cb);
						 cb && cb();
					}
				}, util.httpErrorFn(this));
			},
			setUserInfo (user) {
				this.user = user;
				this.username = user.username;
				this.github = user.gitHubUsername;
				this.phone = user.mobilePhoneNumber;
				this.company = user.company;
				this.jobTitle = user.jobTitle;
				this.introduction = user.introduction;
				this.avatarUrl = user.avatarUrl;
				this.tags = user.tags;
			},
			addTag () {
				if (!this.selected.tagId) {
					util.show(this, 'warn', '请选择领域');
					return;
				}
				this.$http.post(serviceUrl.userTag, {
					tagId: this.selected.tagId
				}).then((res) => {
					if (util.filterError(this, res)) {
						this.tags = res.data.result;
					}
				}, util.httpErrorFn(this));
			},
			loaded() {
				if (this.username && this.allTags) {
					this.$broadcast('loaded');
				}
			},
			applyReviewer () {
				var localUser = util.getLocalUser();
				var defaultUrl = 'http://7xotd0.com1.z0.glb.clouddn.com/defaultAvatar.png';
				if (!localUser.gitHubUsername && !localUser.company
				    && !localUser.jobTitle  && !localUser.introduction
				    && localUser.avatarUrl == defaultUrl) {
					util.show(this, 'info', '请先完善并保存各项资料。公司名称仅用作审核，不展示。');
					return;
				}
				if (!localUser.gitHubUsername) {
					util.show(this, 'info', '请先完善并保存 GitHub 用户名');
					return;
				}
				if (!localUser.company) {
					util.show(this, 'info', '请先完善并保存职务');
					return;
				}
				if (!localUser.introduction) {
					util.show(this, 'info', '请先完善并保存简介');
					return;
				}
				if (localUser.avatarUrl == defaultUrl) {
					util.show(this, 'info', '请先上传头像');
					return;
				}
				this.$http.post(serviceUrl.applicationsCreate, {
				}).then((resp) => {
					if (util.filterError(this, resp)) {
						util.show(this, 'info', '已收到您的申请，将尽快处理');
					}
				}, util.httpErrorFn(this))
			},
			showChangePassword() {
				this.overlayStatus = true;
			}
		},
		created() {
			this.$http.get(serviceUrl.userStatus).then((res) => {
				if (util.filterError(this, res)) {
					debug(res.data.result);
			    this.setUserInfo(res.data.result);
					util.updateNavUser(this, res.data.result); // addTag 等操作没有更新 nav user，这里更新一次
					this.loaded();
				}
			}, util.httpErrorFn(this))
			this.$http.get(serviceUrl.tags).then((res) => {
				if (util.filterError(this, res)) {
					this.allTags = res.data.result;
					this.loaded();
				}
			}, util.httpErrorFn(this))
		},
		ready () {
			var component = this;
			this.$http.get(serviceUrl.qiniu).then((res) => {
				if (util.filterError(this, res)) {
					debug('qiniu token %j', res.data);
					var uptoken = res.data.result.uptoken;
					var bucketUrl = res.data.result.bucketUrl;
					var uploader = Qiniu.uploader({
					    runtimes: 'html5,flash,html4',    //上传模式,依次退化
					    browse_button: 'pickfiles',       //上传选择的点选按钮，**必需**
					    uptoken_url: 'useless',
					    uptoken: uptoken,
					    domain: bucketUrl,
					    flash_swf_url: 'js/plupload/Moxie.swf',
					    unique_names: true,
					    get_new_uptoken: false,           //设置上传文件的时候是否每次都重新获取新的token
					    container: 'upload-container',    //上传区域DOM ID，默认是browser_button的父元素，
					    max_file_size: '100mb',           //最大文件体积限制
					    max_retries: 3,                   //上传失败最大重试次数
					    dragdrop: false,                  //开启可拖曳上传
					    drop_element: 'container',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
					    chunk_size: '4mb',                //分块上传时，每片的体积
					    auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传,
					    init: {
					        'FilesAdded': function(up, files) {
					        },
					        'BeforeUpload': function(up, file) {
					        },
					        'UploadProgress': function(up, file) {
					        },
					        'FileUploaded': function(up, file, info) {
					               // info:
					               // {
					               //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
					               //    "key": "gogopher.jpg"
					               //  }
					               var res = JSON.parse(info);
					               var domain = up.getOption('domain');
					               // 从第10个找，跳过之前的 http:// ，看看是不是 / 结尾
					               if (domain.indexOf('/', 10) == -1) {
					               	  domain += '/';
					               }
					               var sourceLink = domain + res.key;
					               debug('sourceLink: %j', sourceLink);
					               component.avatarUrl = sourceLink;
					               component.updateUser(null, () => {
					               	  // todo，component 没有进行更新的问题
					               	  window.location = '/setting.html';
					               });
					        },
					        'Error': function(up, err, errTip) {
					               debug('qiniu error %j errTip %j', err, errTip);
					               util.show(component, 'error', errTip);
					        },
					        'UploadComplete': function() {
					        },
					        'Key': function(up, file) {
					            // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
					            // 该配置必须要在 unique_names: false , save_key: false 时才生效
					            var key = "";
					            return key
					        }
					    }
					});
				}
			}, util.httpErrorFn(this))
		}
	}
</script>

<style lang="stylus">
@import "../stylus/variables.styl";

	.avatar-container
		text-align center
		background white
		border-top-left-radius 3px
		border-top-right-radius 3px
		button
			display block
			margin 0 auto
		.avatar
			width 112px
			height 112px
			margin-top 32px

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
		h3
			line-height 80px
			border-bottom 1px solid rgba(0,0,0,.15)
			background white
			border-top-left-radius 3px
			border-top-right-radius 3px
			padding-left 40px
			font-weight 600
		.form, .tags
			float left
			margin-top 50px
			border 1px solid rgba(0,0,0,.15)
			border-radius 3px
		.form
			width 61%
			font-weight 200
			box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset, 0px 1px 2px rgba(0,0,0,0.15)
			-webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset, 0px 1px 2px rgba(0,0,0,0.15)
			.white
				background white
				padding-bottom 54px
				border-bottom 1px solid rgba(0,0,0,.15)
			.color
				background #FDFFFF
				border-bottom-left-radius 3px
				border-bottom-right-radius 3px
				border-top none
			button
				width 150px
				height 50px
				color white
				font-size 1rem
				background green
				text-align center
				line-height 50px
				-webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
				box-shaodw 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
				border 1px solid #31B766
			.row
				padding 27px 40px 0;
				position relative
				&:last-child
					border-bottom-left-radius 3px
					border-bottom-right-radius 3px
				p
					line-height 32px
					opacity 0.75
					font-size 14px
					font-weight 700
				span
					opacity .6
					position absolute
					top 78px
					padding-left 15px
				input
					height 50px
					border 1px solid rgba(40,47,49,.3)
					width 100%
					font-size 1rem
					text-indent 15px
					box-shadow 0 1px 4px rgba(0,0,0,0.03)
					color rgba(40,47,49,.6)
					&:focus
						border 1px solid #1CB2EF
				textarea
					width 100%
					height 280px
					padding 15px
					resize none
					color rgba(40,47,49,.6)
					font-size 1rem
					border 1px solid rgba(40,47,49,.3)
					font-family Helvetica Neue,Helvetica
					&:focus
						border 1px solid #1CB2EF
				.update-btn
					margin 27px 0 54px
					background blue
					-webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
					box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
					border 1px solid #00a3e6
				.apply-btn
					margin 27px 0 54px
					float right
				.pwd-btn
					width 80px
					height 30px
					line-height 100%
		.tags
			width 34%
			margin-left 5%
			box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset, 0px 1px 2px rgba(0,0,0,0.15)
			-webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset, 0px 1px 2px rgba(0,0,0,0.15)
			.tags-content
				background #FDFFFF
				font-weight 200
				.list
					background white
					min-height 300px
					padding 40px
					li
						border-radius 3px
						height 48px
						width 50%
						text-align left
				.select-content
					border-top 1px solid rgba(0,0,0,0.15)
					padding 40px
					border-bottom-left-radius 3px
					border-bottom-right-radius 3px
					p
						opacity 0.75
						line-height 50px
						font-size 14px
						font-weight 700
					select
						height 50px
						width 205px
						-webkit-appearance: none
						border 1px solid rgba(40,47,49,0.3)
						box-shadow 0 1px 4px rgba(0,0,0,0.03)
						background white
						&:focus
							border 1px solid #1CB2EF
						option
							-webkit-appearance: none
							height 40px
							line-height 40px
					button
						width 82px
						height 50px
						background blue
						color white
						font-size 1rem
						text-align center
						line-height 50px
						border 1px solid #00a3e6
						-webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
						box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
						margin-left 20px
</style>
