<template>

  <div class="login-form" :class="{shake: error}">
    <div class="login-tab clearfix">
      <a href="javascript:;" :class="{active: loginTab}" @click="loginTab=true">登录</a>
      <a href="javascript:;" :class="{active: !loginTab}" @click="loginTab=false">注册</a>
    </div>

    <div v-show="showErrorMsg" class="error">{{ errorMsg }}</div>

    <form action="/session" method="post" @submit="login" v-show="loginTab">
      <div class="form-field">
        <input type="text" placeholder="手机号" aria-label="手机号" name="mobilePhoneNumber" v-model="mobilePhoneNumber" required v-el:mobile-phone-number>
      </div>
      <div class="form-field">
        <input type="password" placeholder="Password" aria-label="Password" name="password" v-model="password" required>
      </div>
      <div class="form-submit">
        <button class="button buttong--green">登录</button>
<!--         <a href="/account/find-password">Find Password</a> -->
      </div>
    </form>

    <form action="/session/sendSmsCode" method="post" @submit="sendSmsCode" v-show="!loginTab">

      <div class="form-field">
        <input type="mobilePhoneNumber" placeholder="手机号" name="mobilePhoneNumber" v-model="mobilePhoneNumber" required>
      </div>
      <div class="form-submit">
        <button class="button button--green">发送验证码</button>
      </div>

    </form>

    <form action="/session/new" method="post" @submit="signUp" v-show="!loginTab">
      <div class="form-field">
        <input type="number" placeholder="验证码" name="smsCode" v-model="smsCode" required>
      </div>
      <div class="form-field">
        <input type="username" placeholder="用户名" name="username" v-model="username" required>
      </div>
      <div class="form-field">
        <input type="password" placeholder="密码" name="password" v-model="password" required>
      </div>
      <div class="form-submit">
        <button class="button buttong--green">注册</button>
      </div>
    </form>
<!--     <div class="login-social" v-if="$site.logins && loginTab">
      <h3>Login With</h3>
      <div class="login-buttons">
        <a class="button login-{{name}}" href="/account/s/{{name}}" v-for="name in $site.logins">
          <i class="qc-icon-{{name}}"></i>{{name}}
        </a>
      </div>
    </div>
 -->  </div>
</template>

<script>
 var api = require('../api');
// var App = require('../App.vue');
//  console.log('app');
//  console.log(App);
  // var getMessage = require('../utils').errorMessage;
  module.exports = {
    replace: true,
    data: function() {
      return {
        mobilePhoneNumber: '',
        password: '',
        username: '',
        loginTab: true,
        error: false,
        smsCode: undefined,
        password: '',
      };
    },
    methods: {
      promtError: function (errorMsg) {
        this.shakeError();
        this.$root.show('error', errorMsg);
      },
      shakeError: function() {
        this.error = true;
        setTimeout(function() {
          this.error = false;
        }.bind(this), 1000);
      },
      login: function(e) {
        e.preventDefault();
        api.user.login(this.mobilePhoneNumber, this.password, function(resp) {
          this.$root.showLogin = false;
        }.bind(this)).error(this.promtError.bind(this));
      },
      signUp: function(e) {
        e.preventDefault();
        var data = {
          mobilePhoneNumber: this.mobilePhoneNumber,
          smsCode: this.smsCode,
          username: this.username,
          password: this.password,
          type: 0
        };
        api.user.signUp(data, function(resp) {
          this.$root.show('info', '注册成功');
        }.bind(this)).error(function(resp) {
          this.$root.show('error', resp);
          this.shakeError();
        }.bind(this));
      },
      sendSmsCode: function (e) {
        e.preventDefault();
        api.user.sendSmsCode(this.mobilePhoneNumber, function () {
          alert("send succeed");
        }).error(this.promtError.bind(this));
      }
    },
    ready: function() {
      var el = this.$els.mobilePhoneNumber;
      setTimeout(function() {
        el.focus();
      }, 20);
    }
  };
</script>

<style lang="stylus">

.login-overlay
  background-color rgba(255, 255, 255, 0.98)

.login-tab
  margin-bottom 35px
  a
    display inline-block
    float left
    width 30%
    background-color #ddd
    text-align center
    color white
    text-transform uppercase
    padding 5px 0
    &.active
      background-color #42B983

.login-form
  width 460px
  margin 120px auto 100px
  transition all .15s ease
  max-width 100%

.login-social
  text-align center
  text-transform uppercase
  transition all .2s ease
  h3
    color #999
    font-size 18px
    font-weight 400
    margin-bottom 20px
  .button
    margin 10px
  i
    margin-right 8px
  .login-github
    background-color black
  .login-google
    background-color #4d90fe
  .login-twitter
    background-color #23acee
  .login-facebook
    background-color #3c5696
  .login-weibo
    background-color #e32428

.fade-enter
  .login-form
    margin-top 300px

.fade-leave
  .login-social
    opacity 0

.error
  border 1px solid red
  background #FDEFF0
  padding 5px 15px
  margin-bottom 15px  
  font-size 18px

</style>
