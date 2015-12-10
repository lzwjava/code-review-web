<template>
  <div id="wrapper">
    <!-- header -->
    <div class="main-nav-wrapper">
      <div class="nav-inside">

          <div class="main-logo-wrapper">
            <img src="../img/header_logo.png">
            <div>Code Review</div>
          </div>

          <ul class="nav-list">
            <li><a href="/reviewers" class="">发现大神</a></li>
            <li><a href="/new-features" class="">精彩案例</a></li>
            <li><a href="" class="more">登录</a></li>
            <li class="signup"><a href="" class="">注册</a></li>
          </ul>

      </div>
    </div>

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
@import "../stylus/base.styl"

a
  cursor pointer
  text-decoration none
  border 1px solid transparent
  border-radius 2px

li a
  color #000

li a.selected
  border-color rgba(113, 199, 46, 0.1)

li a:hover
  border-color rgba(113, 199, 46, 1)
  color rgba(113, 199, 46, 1)

.main-nav-wrapper
  height 60px
  background #fff

  .nav-inside
    padding-top 20px

    .main-logo-wrapper
      float left
      position absolute
      left 10%

      img 
        width 25px

      div
        font-size 18px
        display inline

    ul.nav-list
      margin 0
      position absolute
      right 10%

      li
        display inline

        a
          margin 3px
          padding 3px 15px
          font-size 16px
          font-weight 100

</style>
