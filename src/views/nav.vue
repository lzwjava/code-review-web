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
            <li class="signup" @click="signup">注册</li>
            <li @click="signin">登录</li>
            <li v-if="userStatus">
              <div>
                <a class="dropdown-item">个人设置</a>
                <a class="dropdown-item">Code Review 订单列表</a>
                <div class="dropdown-divider"></div>                
                <a class="dropdown-item" @click="logout" href="/session">注销</a>
              </div>
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
  var clock = new Date().getFullYear();
	export default {
    components: {
      overlay: Overlay,
      login:  Login,
      signup: Signup
    },
    data (){
      return {
        userStatus: false,
        overlayStatus: false,
        currentView: 'login',
        messages: []
      }
    },
		methods: {
			logout (){
        this.$http.get('/logout').then((resp) => {
          console.log('logout');
        }, (resp) => {
          console.log('logout failed');
        });
			},
      signin (){
        this.overlayStatus = true;
        this.currentView = 'login';
      },
      signup (){
        this.overlayStatus = true;
        this.currentView = 'signup';
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