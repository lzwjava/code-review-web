<template>
  <div id="home-view">
    <div id="home-header">
      <div class="container">
        <div class="row">
          <h1>最高效的代码审核服务</h1>
          <h2>Code Review，迅速帮你提升核心竞争力</h2>

          <div class="button">
              <a>开始使用</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

</script>

<style lang="stylus">
@import "../variables.styl"

#home-header
  background url("../img/home_hero.png")
  width 100%
  height 650px

  .container
    .row 
      color #fff
      text-align center
      padding-top 200px

      h1
        font-size 4em

      h2
        font-size 1.5em
        font-weight 200

      div.button
        margin-top 100px

        a
          background $main
          padding 10px 20px
          font-size 20px
          border-radius 4px

</style>
