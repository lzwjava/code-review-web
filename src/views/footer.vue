<template>
	<overlay :overlay.sync="overlayStatus">
    <component :is="currentView"></component>
  	</overlay>
	<footer class="footer-area">
		<ul class="list">
			<a class="slogan" href="/"></a>
	        <li>
	          <div class="short">
	            <h4 class="number">产品</h4>
	            <p class="detail"><a target="_blank" href="./reviewers.html">发现大神</a></p><br>
	            <p class="detail"><a target="_blank" href="./case.html">精彩案例</a></p><br>
	            <p class="detail"><a target="_blank" href="./video.html">视频直播</a></p>
	          </div>
	        </li>
	        <li>
	          <div class="short">
	            <h4 class="number">公司</h4>
	            <p class="detail"><a target="_blank" href="./belief.html">关于我们</a></p><br>
	            <p class="detail"><a @click="contactus">问题反馈</a></p><br>
	            <p class="detail"> <a target="_blank" href="./statement.html">用户协议</a> </p>
	          </div>
	        </li>
	        <div class="company">
	          <div class="short">
	            <h4 class="number2"><span class="rfont1">Code</span> <span class="rfont2">Review</span></h4>
	            <div class="detail2">
	            	<p>Copyright &copy; <span class="year">2016</span><br> 北京大米互娱科技有限公司 <a target="_blank" href="http://www.miibeian.gov.cn/"><br><span class="ICP">京ICP备15064530号</span></a></p>
	            </div>
	          </div>
	        </div>
	     </ul>
	</footer>
</template>

<script type="text/javascript">
import Overlay from '../components/overlay.vue';
import Contactus from '../components/contactus.vue';
import serviceUrl from "../common/serviceUrl.js";
var debug = require('debug')('home');
var util = require('../common/util');

export default {
components: {
      overlay: Overlay,
      contactus: Contactus,
    },
    data () {
      return {
        overlayStatus: false,
        currentView: '',
      }
    },
    events:{
      changeView(view){
        this.currentView = view;
      }
    },

    methods: {
      contactus (){
        this.overlayStatus = true;
        this.currentView = 'contactus';
      }
    }
}
</script>

<style lang="stylus">

.footer-area
	background #282F32
	height 338px
	width 100%
	text-align center
	color white
	.list
		width 1160px
		margin 0 auto
		display flex
		flex-direction row
		padding-top 100px
		padding-bottom 100px
		.slogan
			width 375px
			height 50px
			background url("../img/Slogan@2x.png") no-repeat
			background-size 100%
			margin auto auto auto 0
		.company
			text-align left
			margin 0 0 auto auto
			line-height 19px
			.short
				.number2
					margin-bottom 20px
					font-size 24px
					.rfont1
						font-family Raleway-Light
						font-weight lighter
					.rfont2
						font-family Raleway-SemiBold
						font-weight bold
				.detail2
					opacity 0.6
					font-size 14px
					line-height 27px
					font-weight normal
					p
						color white
						font-family Raleway
						margin-top: -5px;
						.year
							font-family Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,Microsoft Yahei,Verdana,sans-serif
						.ICP
							color white
							font-family Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,Microsoft Yahei,Verdana,sans-serif

		li
			text-align left
			margin 0 auto
			line-height 19px
			.number
				margin-bottom 20px
				font-weight 500
				font-size 20px
			.detail
				opacity 0.6
				font-size 14px
				font-weight normal
				a
					color white
					cursor pointer


</style>
