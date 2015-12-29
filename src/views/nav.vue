<template>
  <overlay :overlay.sync="overlayStatus">
    <component :is="currentView"></component>
  </overlay>
	<nav class="navbar">
      <div class="container">
        <a href="/"><div class="left">
          <img class="navbar-brand" src="../img/header_logo.png">
          <span class="title">Code Review</span>
        </div></a>

        <div class="right">
          <ul class="list">
            <li><a href="./reviewer.html">发现大神</a></li>
            <li>精彩案例</li>
            <li v-if="!userStatus" class="signup" @click="signup">注册</li>
            <li v-if="!userStatus" @click="signin">登录</li>
            <li v-if="userStatus">
              <user-avatar :user="user" @click="viewUserDropdown"></user-avatar>
              <dropdown v-show="showUserDropdown" :show.sync="showUserDropdown">
                <a class="dropdown-item" href="setting.html">个人设置</a>
                <a class="dropdown-item" href="order.html">Code Review 订单列表</a>
                <div class="dropdown-divider"></div>                
                <a class="dropdown-item" @click="logout" href="/">注销</a>
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
      'user-avatar':UserAvatar
    },
    data (){
      return {
        userStatus: false,
        overlayStatus: false,
        showUserDropdown: false,
        currentView: 'login',
        messages: [],
        user: {}
      }
    },
		methods: {
			logout (e){
        e && e.preventDefault();
        this.$http.get(serviceUrl.logout).then((resp) => {
          this.user = {};
          this.userStatus = false;
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
      show (type, text) {
        // 全局 error、warn、success 提示
        var msg = {type: type, text: text};
        if (!unique(msg, this.messages)) return;

        this.messages.push(msg);
        var index = this.messages.length - 1;
        setTimeout(function() {
          this.clear(index);
        }.bind(this), 3000);
      }
		},
    created () {
      // console.log('created nav');
      this.$http.get(serviceUrl.userStatus).then((res) => {
        if (res.data.code != 0) {
          this.userStatus = false;
          this.user = {}
        } else {
          this.userStatus = true;
          this.user = res.data.result;
          debug('user %j', this.user)
        }
      }, (res) => {

      })
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
  height 100px
  padding 30px 100px
  background white
  .container
    height 40px
    line-height 38px
  .left
    pull-left()
    .title
      font-size 26px
      margin-left 10px
  .right
    pull-right()
  .list
    li
      width 120px
      height 40px
      text-align center
      cursor pointer
      &.signup
        background rgba(51,201,111,.1)
        border 1px solid #33C96F
        color #33C96F

#message
  position fixed
  top 0
  left 0
  width 100%
  text-align center
  z-index 99999

.message
  font-size 16px
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
