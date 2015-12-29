<template>
	<section class="setting">
		<h2>个人设置</h2>
		<section class="form">
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
				<p>个人简介</p>
				<textarea v-model="introduction"></textarea>
			</div>
			<div class="row">
				<button type="button" @click="updateUser">确认修改</button>
			</div>
		</section>
		<section class="tags">
			<h2>想学领域</h2>
			<div class="tags-content">
				<ul class="list">
					<li v-for="tag in tags"><span>{{tag.tagName}}</span><i class="delete" @click="removeTag(tag.tagId)">X</i></li>
				</ul>
				<div class="select-content">
					<p>输入 「想学领域」</p>
					<select v-model="selected">
						<option v-for="tag in remains" :value="{tagId: tag.tagId}">{{tag.tagName}}</option>
					</select>
					<button type="button" @click="addTag">添加</button>
				</div>
			</div>
		</section>
	</section>
	

</template>

<script type="text/javascript">
	import util from '../util';
	import UserAvatar from '../components/user-avatar.vue';
	var debug = require('debug')('setting');
	var plupload = require('moxie-plupload');	
	import Qiniu from 'qiniu-js-sdk'
	import serviceUrl from "../common/serviceUrl.js"
	export default {
		components: {
			'user-avatar': UserAvatar
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
				selected: ''
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
			}
		},
		methods: {
			updateUser () {
				this.$http.post(serviceUrl.updateUser, {
					username: this.username,
					gitHubUsername: this.github,
					company: this.company,
					jobTitle: this.jobTitle,
					introduction: this.introduction,
					avatarUrl: this.avatarUrl,
				}, {
					emulateJSON: true
				}).then((res) => {
					debug(res)
					if (util.filterError(this, res)) {
						util.show(this, 'success', '更新成功');
					   	this.setUserInfo(res.data.result);
					   	util.updateNavUser(this, res.data.result);
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
			addOrRemoveTag (op, tagId) {
				this.$http.post(serviceUrl.userTag, {
					tagId: tagId,
					op: op
				}, {
					emulateJSON: true
				}).then((res) => {
					this.tags = res.data.result;
				}, util.httpErrorFn(this));
			},
			addTag () {
				if (!this.selected.tagId) {
					util.show(this, 'warn', '请选择领域');
				}
				this.addOrRemoveTag('add', this.selected.tagId);
			},
			removeTag(tagId) {
				debug('removeTag ' + tagId);
				addOrRemoveTag('remove', tagId);
			}
		},
		created() {
			this.$http.get(serviceUrl.userStatus).then((res) => {
				if (util.filterError(this, res)) {
					debug(res.data.result);
			    this.setUserInfo(res.data.result);
				}
			}, util.httpErrorFn(this))
			this.$http.get(serviceUrl.tags).then((res) => {
				if (util.filterError(this, res)) {
					this.allTags = res.data.result;
				}
			}, util.httpErrorFn(this))
		},
		ready () {
			var component = this;
			this.$http.get(serviceUrl.qiniu).then((res) => {
				if (util.filterError(this, res)) {
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
					               // 从第10个找，跳过之前的 http:// ，看看是不是 / 结尾
					               if (domain.indexOf('/', 10) == -1) {
					               	  domain += '/';
					               }
					               var sourceLink = domain + res.key;
					               debug('sourceLink: %j', sourceLink);
					               component.avatarUrl = sourceLink;
					               component.updateUser();
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
		button
			display block
			margin 10px auto
		.avatar
			width 150px
			height 150px
			margin 10px

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
