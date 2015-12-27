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
            <li>发现大神</li>
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
</template>
<script>
  import Overlay from '../components/overlay.vue';
  import Login from '../components/login.vue';
  import Signup from '../components/signup.vue';
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
        currentView: 'login'
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
      }
		}
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
</style>