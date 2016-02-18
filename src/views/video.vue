<template>
	<div class="video-container">
        <div class="title">
            <span>{{video.title}}</span>
            <span class="pull-right download" >PPT下载</span>
            <span class="count pull-right">{{video.visitCount}}次浏览</span>
            <div class="pull-right scan" @click="dropdown">
    		浏览课程
    		</div>
            <div class="video-list" v-show="listState">
				<div class="row" v-for="item in list" @click="changeSrc(item)">{{item.speaker}}: {{item.title}}</div>
			</div>
        </div>
        <div class="video" id="video"></div>
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
  width 100%
  top 50px
  bottom 100px
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
  right 10px
  z-index 100
  box-shadow 0px -1px 4px rgba(0, 0, 0, .05)
  font-size 16px
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

.video-list:before,
    .video-list:after
  position absolute
  margin-left 82px
  content ''
  display block
  border 8px solid transparent

.scan
  background url("../img/icon/section.png") no-repeat
  padding-left 26px
  background-size contain
  cursor pointer
  font-size 14px
  margin-top 4px

.video
  position absolute
  width 100%
  top 50px
  bottom 10px

.title
  padding 10px 20px
  font-size 22px
  .download
    background url("../img/icon/dl.png") no-repeat
    padding-left 16px
    background-size contain
    font-size 14px
    margin-top 4px
    margin-left 20px

.count
  opacity 0.6
  font-size 14px
  margin-top 4px
  margin-left 20px

.pull-right
  float right

.hidden
  display none

.share-img
  width 0px
  height 0px

.footer-area
  position absolute
  bottom 0
  width 100%
  height 100px
  margin 0
</style>
