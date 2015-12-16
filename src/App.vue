<template>
  <div id="wrapper">
    <!-- header -->
    <nav class="navbar navbar-inverse navbar-fixed-top main-nav-wrapper">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <img class="navbar-brand header-logo" src="./img/header_logo.png">
          <a class="navbar-brand header-title" href="/">Code Review</a>
        </div>

        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav-list navbar-right">
            <li><a v-link="{path: '/reviewers/'}" class="btn btn-header">发现大神</a></li>
            <li><a href="/new-features" class="btn btn-header">精彩案例</a></li>
            <li v-if="!user.username"><button class="btn btn-header" @click="showLogin=true">登录</button></li>
            <li v-if="user.username">
              <user-avatar :user="user" @click="viewUserDropdown"></user-avatar>
              <dropdown v-show="showUserDropdown" :show.sync="showUserDropdown">
                <a class="dropdown-item" href="/u/{{ user.username }}">个人设置</a>
                <a class="dropdown-item" href="/account/settings">Code Review 订单列表</a>
                <div class="dropdown-divider"></div>                
                <a class="dropdown-item" @click="logout" href="/session">注销</a>
              </dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- main view -->
    <router-view
      class="main-view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>

    <hr class="footer-divider">

    <!-- FOOTER -->
    <footer class="container">
      <p class="pull-right"><a href="#">Back to top</a></p>
      <p>&copy; 2015 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>

  </div>

  <div id="message" aria-live="assertive">
    <div class="message message-{{msg.type}}" v-for="msg in messages" v-text="msg.text" transition="fade"></div>
  </div>

  <overlay v-if="showLogin" transition="fade" :show.sync="showLogin">
    <login-form></login-form>
  </overlay>

</template>

<script type="text/javascript">

var api = require('./api');

var clock = new Date().getFullYear();

module.exports = {
  data: function () {
    return {
      user: {},
      showLogin: false,
      messages: [],
      showUserDropdown: false,
    }
  },
  methods: {
    logout: function(e) {
      e && e.preventDefault();
      api.user.logout();
    },
    viewUserDropdown: function(e) {
      e && e.preventDefault();
      this.showUserDropdown = true;
    },
    flush: function() {
      this.messages = [];
    },
    clear: function(index) {
      clearTimeout(clock);
      this.messages.splice(index, 1);
      clock = setTimeout(this.flush.bind(this), 4000);
    },
    show: function(type, text) {
      var msg = {type: type, text: text};
      if (!unique(msg, this.messages)) return;

      this.messages.push(msg);
      var index = this.messages.length - 1;
      setTimeout(function() {
        this.clear(index);
      }.bind(this), 3000);
    }
  },
  components: {
    'overlay': require('./components/overlay.vue'),
    'login-form': require('./components/login-form.vue'),
    'dropdown': require('./components/dropdown.vue'),
    'user-avatar': require('./components/user-avatar.vue')
  }
};

function unique(item, list) {
  return !list.some(function(data) {
    return JSON.stringify(data) === JSON.stringify(item);
  });
}

</script>

<style lang="stylus">
@import "./stylus/base.styl"

.btn-header
  color #000

.btn-header:hover
  border-color rgba(113, 199, 46, 1)
  color rgba(113, 199, 46, 1)

ul.nav-list
  position relative
  top 10px  

ul.nav-list li 
  display inline

.navbar-brand
  height 55px

.navbar-inverse .navbar-brand:focus,
.navbar-inverse .navbar-brand
  color #000

.navbar-inverse .navbar-brand:hover
  color rgb(113, 199, 46)

.main-nav-wrapper
  background #fff

.footer-divider
  margin 60px 0

footer.container
  height 80px

.main-view
  margin-top 55px

.navbar .avatar
  width 28px
  height 28px
  line-height 28px
  margin-left 20px

</style>
