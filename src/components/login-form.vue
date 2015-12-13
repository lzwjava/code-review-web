<template>

  <div class="login-form" :class="{shake: error}">
    <div class="login-tab clearfix">
      <a href="javascript:;" :class="{active: loginTab}" @click="loginTab=true">Log In</a>
      <a href="javascript:;" :class="{active: !loginTab}" @click="loginTab=false">Sign Up</a>
    </div>

    <div v-show="showErrorMsg" class="error">{{ errorMsg }}</div>

    <form action="/session" method="post" @submit="login" v-show="loginTab">
      <div class="form-field">
        <input type="text" placeholder="手机号" aria-label="手机号" name="mobilePhoneNumber" v-model="mobilePhoneNumber" required v-el:mobile-phone-number>
      </div>
      <div class="form-field">
        <input type="password" placeholder="Password" aria-label="Password" name="password" v-model="password" required>
      </div>
      <label class="form-check">
        <input type="checkbox" name="permanent" v-model="permanent">Remember Me
      </label>
      <div class="form-submit">
        <button class="button buttong--green">Log In</button>
        <a href="/account/find-password">Find Password</a>
      </div>
    </form>

    <form action="/session/new" method="post" @submit="signup" v-show="!loginTab">
      <div class="form-field">
        <input type="email" placeholder="Email" aria-label="Email" name="email" v-model="email" required>
      </div>
      <div class="form-submit">
        <button class="button buttong--green">Sign Up</button>
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
        email: '',
        loginTab: true,
        permanent: true,
        showErrorMsg: false,
        errorMsg: '',
        error: false
      };
    },
    methods: {
      promtError: function (errorMsg) {
        this.shakeError();
        this.showError(errorMsg);
      },
      showError: function (errorMsg) {
        this.showErrorMsg = true;
        this.errorMsg = errorMsg;
        setTimeout(function () {
          this.showErrorMsg = false;
          this.errorMsg = '';
        }.bind(this), 8000);
      },
      shakeError: function() {
        this.error = true;
        setTimeout(function() {
          this.error = false;
        }.bind(this), 1000);
      },
      login: function(e) {
        e.preventDefault();
        var data = {
          mobilePhoneNumber: this.mobilePhoneNumber,
          password: this.password
        };
        api.user.login(data, function(resp) {
          this.$root.showLogin = false;
        }.bind(this)).error(this.promtError.bind(this));
      },
      signup: function(e) {
        e.preventDefault();
        // api.user.signup(this.email, function(resp) {
        //   this.$root.show('info', resp.message);
        // }.bind(this)).error(function(resp) {
        //   this.$root.show('error', getMessage(resp.error_form));
        //   this.shakeError();
        // }.bind(this));
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
