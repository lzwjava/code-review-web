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
          <img class="navbar-brand header-logo" src="../img/header_logo.png">
          <a class="navbar-brand header-title" href="#">Code Review</a>
        </div>

        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav-list navbar-right">
            <li><a href="/reviewers" class="btn btn-header">发现大神</a></li>
            <li><a href="/new-features" class="btn btn-header">精彩案例</a></li>
            <li><a href="" class="btn btn-header">登录</a></li>
            <li class="signup"><a href="" class="btn btn-header">注册</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<style lang="stylus">
@import "../variables.styl"

html, body
  font-family "Helvetica Neue",Helvetica,"PingFang SC","Microsoft Yahei","WenQuanYi Micro Hei",Arial,Verdana,sans-serif
  font-size 14px
  height 100%

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

</style>
