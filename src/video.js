/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-02-16 22:48:12
 * @version $Id$
 */

import Vue from 'vue'
var player = new CloudVodPlayer();
import Nav from './views/nav.vue'
import Footer from './views/footer.vue'
import util from './common/util'
util.configVue(Vue)

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

var video = new Vue({
	el: 'body',
	data: {
		list: [],
		listState: false,
		ppt: false,
		video: {}
	},
	components: {
		'my-nav': Nav,
		'my-footer': Footer
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
			window.location = '/?videoId=' + item.videoId;
			// 	this.loadVideo(item);
			// this.listState = !this.listState;
		},
		dropdown: function() {
			this.listState = !this.listState;
		},

	}
})