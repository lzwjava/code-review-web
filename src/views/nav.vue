<template>
  <overlay :overlay.sync="overlayStatus">
    <component :is="currentView"></component>
  </overlay>
	<nav class="navbar">
      <div class="container">

        <a href="/">
          <div class="left">
            <img class="navbar-brand" src="../img/header_logo.png">
            <div class="title">
              <span class="light">Code</span>
              <span class="bold">Review</span>
            </div>
          </div>
        </a>

        <div class="right">
          <ul class="list">
            <a href="/reviewers.html"><li class="hover-btn">发现大神</li></a>
            <a href="/case.html"><li class="hover-btn">精彩案例</li></a>
            <a href="/video.html"><li class="hover-btn">直播视频</li></a>
            <a href="/event.html?eventId=1"><li class="hover-btn">线下活动</li></a>
            <a href="/workshop.html?workshopId=1"><li class="hover-btn">研讨班</li></a>
            <li class="hover-btn" v-if="!userStatus" class="signup" @click="signup">注册</li>
            <li class="hover-btn" v-if="!userStatus" @click="signin">登录</li>
            <li v-if="userStatus">
              <dropdown>
                <div class="dropdown-anchor" slot="showText">
                  <span v-show="notificationCount > 0" class="badge"></span>
                  <user-avatar :user="user" @click="viewUserDropdown"></user-avatar>
                </div>
                <div slot="options">
                    <user-avatar :user="user"></user-avatar>
                    <div class="name">{{user.username}}</div>
                  <div>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="setting.html">个人设置</a>
                  <a class="dropdown-item" href="order.html">订单列表</a>
                  <a class="dropdown-item" href="notifications.html?unread=true" >通知
                     <span class="notification-num" v-if="notificationCount" >({{ notificationCount }})<span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" @click="logout" href="/">注销</a>
                </div>
              </dropdown>
            </li>
          </ul>
        </div>

      </div>
    </nav>
    <div id="message" aria-live="assertive">
      <div class="message message-{{msg.type}}" v-for="msg in messages" v-text="msg.text" transition="fade"></div>
    </div>
</template>
<script>
  import Overlay from '../components/overlay.vue';
  import Login from '../components/login.vue';
  import Signup from '../components/signup.vue';
  import ResetPassword from '../components/reset-password.vue';
  import DropDown from '../components/dropdown.vue';
  import UserAvatar from '../components/user-avatar.vue';
  import serviceUrl from "../common/serviceUrl.js";
  import util from '../common/util'
  var debug = require('debug')('components');
  var clock = new Date().getFullYear();
	export default {
    components: {
      overlay: Overlay,
      login:  Login,
      signup: Signup,
      dropdown: DropDown,
      'user-avatar':UserAvatar,
      'reset-password': ResetPassword
    },
    data (){
      return {
        userStatus: false,
        overlayStatus: false,
        currentView: 'login',
        messages: [],
        user: {},
        notificationCount: 0
      }
    },
    computed: {
    },
    events:{
      changeView(view){
        this.currentView = view;
      }
    },
		methods: {
			logout (e){
        e && e.preventDefault();
        this.$http.get(serviceUrl.logout).then((resp) => {
          this.user = {};
          this.userStatus = false;
          window.localStorage.removeItem('user');
          window.location = '/';
        }, util.httpErrorFn(this));
			},
      signin (){
        this.overlayStatus = true;
        this.currentView = 'login';
      },
      signup (){
        this.overlayStatus = true;
        this.currentView = 'signup';
      },
      forgot () {
        this.overlayStatus = true;
        this.currentView = 'reset-password';
      },
      viewUserDropdown (e) {
        e && e.preventDefault();
        this.showUserDropdown = true;
      },
      flush () {
        this.messages = [];
      },
      clear (index) {
        clearTimeout(clock);
        this.messages.splice(index, 1);
        clock = setTimeout(this.flush.bind(this), 4000);
      },
      show (type, text, timeout) {
        // 全局 error、warn、success 提示
        var msg = {type: type, text: text};
        if (!unique(msg, this.messages)) return;

        if (!timeout) {
          timeout = 3000
        }
        this.messages.push(msg);
        var index = this.messages.length - 1;
        setTimeout(function() {
          this.clear(index);
        }.bind(this), timeout);
      },
      check: function() {
        // 这个在 notifications.vue 被调用了
        if (!this.user.username) return;
        this.$http.get(serviceUrl.notificationsCount)
        .then((resp) => {
          if (util.filterError(this, resp)) {
            this.notificationCount = resp.data.result.count;
            debug('notificationsCount: ' + this.notificationCount);
          }
        }, util.httpErrorFn(this))
      }
		},
    ready () {
      this.check();
      //setTimeout(this.check.bind(this), 500);
      var interval = 300000;
      // check every 5 minutes
      // this.check.bind(this);
      setInterval(this.check.bind(this), interval);
    },
    created () {
      // console.log('created nav');
      /*this.$http.get(serviceUrl.userStatus).then((res) => {
        if (res.data.code != 0) {
          this.userStatus = false;
          this.user = {}
        } else {
          this.userStatus = true;
          this.user = res.data.result;
          debug('user %j', this.user)
        }
      }, (res) => {

      })*/
      if(window.localStorage.getItem('user')){
        this.userStatus = true;
        this.user = JSON.parse(window.localStorage.getItem('user'));
      }
    }
	}

  function unique (item, list) {
    return !list.some(function(data) {
      return JSON.stringify(data) === JSON.stringify(item);
    });
  }
</script>
<style lang="stylus">
@import '../stylus/base.styl';

.navbar
  height totalHeight = 50px
  padding paddingTop=5px 0
  background white
  border-bottom 1px solid rgba(0,0,0,0.15)
  box-shadow 0 2px 1px 0px rgba(135,135,135,.15)
  width 100%
  left 0
  right 0
  .container
    margin 0 auto
    line-height totalHeight - 2 * paddingTop
    width 80%
    height 100%
  .navbar-brand
    width 35px
    top 3px
    position relative
  .left
    pull-left()
    .title
      font-size 20px
      margin-left 10px
      display inline-block
      .light
        font-family Raleway-Light
        top -2px
        position relative
      .bold
        font-family Raleway-SemiBold
        top -2px
        position relative
  .right
    pull-right()
  .list
    li
      padding-left 20px
      padding-right 20px
      text-align left
      cursor pointer
      font-size 14px
      top -2px
      position relative
      &.hover-btn
        border 1px solid #ffff // 避免hover之后颤抖
        font-weight 600
      &.hover-btn:hover
        color blue
      .dropdown-anchor
        position relative
        .badge
          position absolute
          top 4px
          right 4px
          width 8px
          height 8px
          border-radius 50%
          font-size 5px
          background #f00
    .dropdown-inner
      width 220px
      right 0
      &:before,&:after
        left 90%
    .notification-num
      color #f00
  .avatar
    width totalHeight - 2 * paddingTop
    height totalHeight - 2 * paddingTop
    img
      border-radius 50%
      border 1px solid #8F9DA4

#message
  position fixed
  top 0
  left 0
  width 100%
  text-align center
  z-index 99999

.message
  font-size 1rem
  line-height 1.8
  padding 10px 20px
  box-sizing border-box
  border-bottom 1px solid #efefef
  background-color rgba(255, 255, 255, 0.9)
  color #565656

.message-success
  background-color rgba(66, 185, 131, 0.9)
  border-color rgb(66, 185, 131)
  color white

.message-error
  background-color rgba(255, 68, 68, 0.9)
  border-color rgb(255, 68, 68)
  color white

.message-warn
  background-color rgba(255, 220, 0, 0.9)
  border-color rgb(255, 220, 0)

</style>
