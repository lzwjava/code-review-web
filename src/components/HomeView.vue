<template>
  <div id="home-view">
    <section class="section1">
     <div class="container">
        <div class="row">
          <h1>最高效的代码审核服务</h1>
          <h2>Code Review，迅速帮你提升核心竞争力</h2>

          <div class="button">
              <a>开始使用</a>
          </div>
        </div>
      </div>      
    </section>

    <section class="section2">

      <div class="intro">

        <div class="row">
          <h2>帮助开发者重构逻辑、精简代码</h2>
          <h3>让您在最短的时间内理解优秀开发者的代码习惯</h3>
        </div>

      </div>

      <div class="features">
        <div class="wrapper">
          <div class="feature">
            <div class="short">
              <img class="feature-logo" src="../img/crown.png"></img>
              <h2>280</h2>
              <p>大神入驻</p>
            </div>

            <p class="detail">
              我们邀请了业内知名的开发者帮助大家解决在编码过程中所遇到的问题，这些高手利用自己所擅长的技术为各位竭诚服务。
            </p>
          </div>     

          <div class="feature">
            <div class="short">
              <img class="feature-logo" src="../img/doc.png"></img>
              <h2>1400+</h2>
              <p>审核文档</p>
            </div>

            <p class="detail">
              每一次Code Review的过程都凝结着大神的心血Code Review上线半年以来，已经帮助重构、简化了1400份代码文件。
            </p>
          </div>  

          <div class="feature">
            <div class="short">
              <img class="feature-logo" src="../img/article.png"></img>
              <h2>254</h2>
              <p>经验总结</p>
            </div>

            <p class="detail">
              代码审核无论对于审核者还是帮助申请人来说，都是宝贵的经验财富，在获得许可的情况下，我们提供Code Review经验文摘。
            </p>
          </div> 
        </div>

      </div>

    </section>

    <section class="section3">

    </section>

  </div>
</template>

<script type="text/javascript">

</script>

<style lang="stylus">
@import "../variables.styl"

section
  width 100%

.section1
  height 700px
  background url("../img/home_hero.png")
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

.section2
  height 900px
  .intro
    height 500px
    background url("../img/section2_bg.png")
    .row
      text-align center
      padding-top 60px
      h2, h3
        font-weight 100
  .features
    background #fff
    .wrapper
      padding 50px 200px;
      .feature 
        display inline-block
        width 33%
        text-align center
        line-height 20px        
        .short
          padding 10px 50px
          p
            font-size 16px

.section3
  height 850px
  background #333

</style>
