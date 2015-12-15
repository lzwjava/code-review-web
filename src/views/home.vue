<template>
  <div>
    <loading v-if="$loadingRouteData"></loading>

    <div id="home-view container">
      <section class="row section1">

        <h1 class="h1-big">最高效的代码审核服务</h1>
        <h2 class="h2-big">Code Review，迅速帮你提升核心竞争力</h2>

        <a class="btn btn-success btn-start">开始使用</a>

      </section>

      <section class="section2">


        <div class="row intro">
          <h2 class="h3-big">帮助开发者重构逻辑、精简代码</h2>
          <p class="lead">让您在最短的时间内理解优秀开发者的代码习惯</p>
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
                每一次 Code Review 的过程都凝结着大神的心血 Code Review 上线半年以来，已经帮助重构、简化了 1400 份代码文件。
              </p>
            </div>  

            <div class="feature">
              <div class="short">
                <img class="feature-logo" src="../img/article.png"></img>
                <h2>254</h2>
                <p>经验总结</p>
              </div>

              <p class="detail">
                代码审核无论对于审核者还是帮助申请人来说，都是宝贵的经验财富，在获得许可的情况下，我们提供 Code Review 经验文摘。
              </p>
            </div> 
          </div>

        </div>

      </section>

      <section class="section3">


        <div class="row intro">
          <h2>发现行业内精英开发者</h2>
          <h3>一览领域顶尖的编程人物</h3>
        </div>

        <ul class="col-lg-12 reviewers">
          <li class="col-lg-4" v-for="reviewer in reviewers" track-by="id">
            <reviewer-card :reviewer="reviewer"></reviewer-card>
          </li>
        </ul>

        <div class="see-more col-lg-12">
            <button v-link="{path: '/reviewers'}" type="button" class="btn btn-info">查看更多大神</button>
        </div>


      </section>

    </div>
  </div>
</template>

<script type="text/javascript">

var api = require('../api');
module.exports = {
  data: function () {
    return {
      reviewers: []
    }
  },
  route: {
    data: function(transition) {
      api.reviewers.list(0, 3, function(resp) {
        transition.next({
          reviewers: resp
        });
      });
    }
  },
  components: {
    'logo': require('../components/logo.vue'),
    'loading': require('../components/loading.vue'),
    'reviewer-card': require('../components/reviewer-card.vue')
  }
};

</script>

<style lang="stylus">

.section1
  height 650px
  background url("../img/home_hero.png")
  background-size contain
  padding-top 250px
  text-align center
  color #fff
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

.btn-start
  margin-top 100px
  background $main
  padding 10px 20px
  font-size 20px
  border-radius 4px

.h1-big
  font-size 4em

.h2-big
  font-size 1.5em
  font-weight normal

.h3-big
  font-size 2.4em

.intro .row
    text-align center
    padding-top 60px
    h2, h3
      font-weight 100

.section2
  height 900px
  .intro
    height 500px
    background url("../img/section2_bg.png")
  .features
    background #fff
    .wrapper
      padding 50px 200px
      .feature
        display inline-block
        width 33%
        text-align center
        line-height 20px        
        .short
          padding 10px 50px
        .detail
          padding 0 10px
          font-size 14px

div.intro
  padding-top: 60px
  text-align center

ul.reviewers
  padding 120px 200px 50px
  list-style none 

.section3
  height 750px
  background rgb(244, 245, 247)

.see-more
  text-align center

.section4
  height 600px

</style>
