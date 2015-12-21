<template>
	<nav class="navbar">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <img class="navbar-brand header-logo" src="../img/header_logo.png">
          <a class="navbar-brand header-title" href="/">Code Review</a>
        </div>

        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav-list navbar-right">
            <li><a  class="btn btn-header">发现大神</a></li>
            <li><a  class="btn btn-header">精彩案例</a></li>
            <li><button class="btn btn-header">登录</button></li>
            <li>
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
	export default {
		methods: {
			logout (){

			}
		}
	}
</script>
<style lang="stylus">
@import '../stylus/base.styl';	
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