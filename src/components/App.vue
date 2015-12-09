<template>
  <div id="wrapper">
    <!-- header -->
    <div class="main-nav-wrapper">
      <div class="inside">

        <nav>
          <div class="main-logo-wrapper">
            <img src="../img/header_logo.png">
            Code Review
          </div>

          <ul class="nav-list">
            <li><a href="/reviewers" class="">发现大神</a></li>
            <li><a href="/new-features" class="">精彩案例</a></li>
            <li><a href="" class="more">登录</a></li>
            <li class="signup"><a href="" class="">注册</a></li>
          </ul>

        </nav>

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

.main-nav-wrapper
  height 40px
  background #fff

.main-logo-wrapper
  float left
  position absolute
  left 20%

ul.nav-list
  margin 0
  position absolute
  right 10%
  li
    display inline

</style>
