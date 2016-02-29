<template>
	<div class="video-container">
        <div class="title">
            <span style="font-size: 24px;">{{video.title}}</span>
            <div class="pull-right scan" @click="dropdown">
    		      浏览课程
    		    </div>
            <div class="video-list" transition="expand" v-show="listState">
				      <div class="row" v-for="item in list" @click="changeSrc(item)">{{item.speaker}}: {{item.title}}</div>
			     </div>
        </div>
        <div class="video" id="video"></div>
        <div class="title video-bottom">
          <span>主讲人：{{video.speaker}}</span>
          <span class="pull-right download" v-if="ppt">PPT下载</span>
          <span class="count pull-right">{{video.visitCount}}次浏览</span>
        </div>
    </div>
</template>

<script>
/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-02-16 22:48:12
 * @version $Id$
 */

var player = new CloudVodPlayer();

function transformToAssocArray(prmstr) {
	var params = {};
	var prmarr = prmstr.split("&");
	for (var i = 0; i < prmarr.length; i++) {
		var tmparr = prmarr[i].split("=");
		params[tmparr[0]] = tmparr[1];
	}
	return params;
}

function getParameters() {
	var prmstr = window.location.search.substr(1);
	return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

export default {
	data () {
		return {
			list: [],
			listState: false,
			ppt: false,
			video: {}
		}
	},
	created: function() {
		this.$http.get('videos', {})
			.then(function(resp) {
				if (resp.data.code == 0) {
					this.list = resp.data.result;
					var params = getParameters();
					if (typeof params.videoId !== 'undefined') {
						var videoId = params.videoId;
						for (var i = 0; i < this.list.length; i++) {
							if (videoId == this.list[i].videoId) {
								var video = this.list[i];
								document.title = video.speaker + ': ' + video.title;
								this.loadVideo(video);
								return;
							}
						}
					}
					var i = Math.floor(Math.random() * this.list.length);
					this.video = this.list[i];
					this.loadVideo(this.video);
					// console.log(this.list);
				}
			});
	},
	ready: function() {},
	methods: {
		loadVideo: function(item) {
			player.init({
				uu: 'jcybhn1to4',
				vu: item.source
			}, "video");
			this.video = item;

			var referrer = document.referrer;
			this.$http.post('videos/' + item.videoId + '/visits', {
				referrer: referrer
			}).then(function(resp) {
				// console.log('visit:' + resp.data);
			});
		},
		changeSrc: function(item) {
			window.location = '/video.html?videoId=' + item.videoId;
			// 	this.loadVideo(item);
			// this.listState = !this.listState;
		},
		dropdown: function() {
			this.listState = !this.listState;
		},

	}
}
</script>

<style lang="stylus">
[v-cloak]
  display none

  /* 必需 */
.expand-transition
  transition: all .6s ease;

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave
  opacity: 0;

html
  height 100%

body
  width 100%
  height 100%
  overflow hidden
  margin 0
  padding 0
  font-size 14px
  color #444

*
  -webkit-transition all ease-in-out .4s
  -ms-transition all ease-in-out .4s
  -moz-transition all ease-in-out .4s
  transition all ease-in-out .4s

.video-container
  position absolute
  width: 960px;
  left: 50%;
  margin-left: -480px;
  top 60px
  bottom 80px
  padding 5px 0

.video-list
  display block
  width 320px
  margin-top 10px
  border 1px solid rgba(0, 0, 0, .1)
  background #fff
  border-radius 3px
  padding 15px 0
  position absolute
  right 0px
  z-index 100
  box-shadow 0px -1px 4px rgba(0, 0, 0, .05)
  font-size 16px
  &:before,&:after
    position absolute
    margin-left 265px
    content ''
    display block
    border 8px solid transparent
  &:before
    top -16px
    border-bottom-color rgba(0, 0, 0, .1)
  &:after
    top -15px
    border-bottom-color white
  .row
    line-height 40px
    padding-left 15px
    cursor pointer
    &:hover
      background-color #00cff5
      color white
    &:last-child
      border-bottom none

.scan
  background url("../img/icon/section.png") no-repeat
  padding-left 26px
  background-size contain
  cursor pointer
  font-size 14px
  margin-top 12px
  line-height 100%

.video
  width 100%
  height 540px

.video-container .title
  padding 10px 0
  font-size 16px
  height 60px
  line-height 40px;
  .download
    background url("../img/icon/dl.png") no-repeat
    padding-left 16px
    background-size contain
    font-size 14px
    margin-top 4px
    margin-left 20px

.video-bottom
  border-bottom: 1px solid #979797;
  height 60px
  line-height 40px

.count
  opacity 0.6
  font-size 14px
  margin-left 20px
  font-family Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,Microsoft Yahei,Verdana,sans-serif

.pull-right
  float right

.hidden
  display none

.share-img
  width 0px
  height 0px

.footer-area
  position absolute
  bottom 0px
  width 100%
  margin 0
  line-height 100px
  display block
</style>
