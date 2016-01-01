<template>
  <div class="home-main">
    <section class="slide">
      <div class="bg">
        <h1>最高效的代码审核服务</h1>
        <h2>Code Review，迅速帮你提升核心竞争力</h2>
        <div>
          <button class="begin"></button>
        </div>
        <button class="help">如何使用Code Review</button>
      </div>
    </section>

    <section class="feature">
      <ul class="list">
        <li>
          <div class="short">
            <div class="icon_crown"></div>
            <h4 class="number">280大神入驻</h4>
            <p class="detail">我们邀请了业内知名的开发者帮助大家解决在编码过程中所遇到的问题，这些高手利用自己所擅长的技术为各位竭诚服务。</p>
          </div>
          
        </li>
        <li>
          <div class="short">
            <div class="icon_doc"></div>
            <h4 class="number">2800+审核文档</h4>
            <p class="detail">每一次 Code Review 的过程都凝结着大神的心血 Code Review 上线半年以来，已经帮助重构、简化了 1400 份代码文件。</p>
          </div>
          
        </li>
        <li>
          <div class="short">
            <div class="icon_article"></div>
            <h4 class="number">280经验总结</h4>
            <p class="detail">代码审核无论对于审核者还是帮助申请人来说，都是宝贵的经验财富，在获得许可的情况下，我们提供 Code Review 经验文摘。</p>
          </div> 
        </li>
      </ul>
    </section>

    <section class="reviewer">
      <div class="bg">
          <h2>发现行业内精英开发者</h2>
          <h3>一览领域顶尖的编程人物</h3>
          <reviewer :reviewers="reviewers"></reviewer>
          <div>
            <a href="/reviewers.html">
              <button class="more" type="button">寻找更多高手</button>
            </a>
          </div>
      </div>
    </section>
    
    <section class="example">
        <div class="container"><!-- 
          <div class="pen"></div>
          <div class="book"></div>
          <div class="cup"></div> -->
          <h2>精选 Code Review 案例</h2>
          <h3>我们精心挑选了一些典型问题的优雅解决方案，分享给大家</h3>
          <ul class="list">
            <div class="row">
              <li class="clo-2">
                <div class="info">
                  <img src="http://img0.imgtn.bdimg.com/it/u=2405375823,572106225&fm=21&gp=0.jpg">
                  <div class="text">
                    <h6 class="title">
                      dsadadasdas
                    </h6>
                    <h6 class="tips">
                      <span>1111</span>
                      <span>2222</span>
                    </h6>
                  </div>
                </div>
                <!-- <div class="detail">
                  <p>
                    <span class="date">12 八月 2015</span>
                    <span>/ 12次打赏</span>
                    <i class="icon_wx"></i>
                    <i class="icon_wb"></i>
                  </p>
                </div> -->
              </li>
              <li class="clo-1">
                <div class="info">
                  <img src="http://img0.imgtn.bdimg.com/it/u=2405375823,572106225&fm=21&gp=0.jpg">
                  <div class="text">
                    <h6 class="title">
                      dsadadasdas
                    </h6>
                    <h6 class="tips">
                      <span>1111</span>
                      <span>2222</span>
                    </h6>
                  </div>
              </li>
            </div>
            <div class="row">
              <li class="clo-1">
                <div class="info">
                  <img src="http://img0.imgtn.bdimg.com/it/u=2405375823,572106225&fm=21&gp=0.jpg">
                  <div class="text">
                    <h6 class="title">
                      dsadadasdas
                    </h6>
                    <h6 class="tips">
                      <span>1111</span>
                      <span>2222</span>
                    </h6>
                  </div>
              </li>
              <li class="clo-1">
                <div class="info">
                  <img src="http://img0.imgtn.bdimg.com/it/u=2405375823,572106225&fm=21&gp=0.jpg">
                  <div class="text">
                    <h6 class="title">
                      dsadadasdas
                    </h6>
                    <h6 class="tips">
                      <span>1111</span>
                      <span>2222</span>
                    </h6>
                  </div>
              </li>
              <li class="clo-1">
                <div class="info">
                  <img src="http://img0.imgtn.bdimg.com/it/u=2405375823,572106225&fm=21&gp=0.jpg">
                  <div class="text">
                    <h6 class="title">
                      dsadadasdas
                    </h6>
                    <h6 class="tips">
                      <span>1111</span>
                      <span>2222</span>
                    </h6>
                  </div>
              </li>
            </div>
            <div class="row">
              <li class="clo-3">
                <div class="info">
                  <img src="http://img0.imgtn.bdimg.com/it/u=2405375823,572106225&fm=21&gp=0.jpg">
                  <div class="text">
                    <h6 class="title">
                      dsadadasdas
                    </h6>
                    <h6 class="tips">
                      <span>1111</span>
                      <span>2222</span>
                    </h6>
                  </div>
              </li>
            </div>
          </ul>
        </div>
        <div class="more">
          阅读更多
        </div>
    </section>
  </div>

</template>

<script type="text/javascript">
  import reviewerCard from '../components/reviewer-card.vue'
  import serviceUrl from "../common/serviceUrl.js"
  var debug = require('debug')('home');
  var util = require('../common/util');
  export default {
    components: {
      reviewer: reviewerCard
    },
    data () {
      return {
        reviewers: []
      }
    },
    created () {
      this.$http.get(serviceUrl.reviewers, {
        limit: 3
      }).then((resp) => {
        if (util.filterError(this, resp)) {
          this.reviewers = resp.data.result;
        }
      }, util.httpErrorFn(this));
    }
  }
</script>

<style lang="stylus">
@import '../stylus/variables.styl';

.home-main
  text-align center
  font-size 1rem
  h1
    font-size 3.75rem
  h2
    font-size 1.5rem
  h3,h4
    font-size 1rem
  h5
    font-size 20px
.slide
  height 1000px
  position relative
  color #fff
  width 100%
  overflow hidden
  .bg
    background url("../img/home/hero.png") no-repeat
    width 1920px
    height 1000px
    position absolute
    top 0
    left 50%
    margin-left -960px
    padding-top 315px
    h3
      margin-top 50px
    .begin
      background url("../img/icon/play.png") no-repeat
      width 80px
      height 80px
      margin-top 60px
    .help
      height 66px
      width 288px
      background #33C96F
      font-size 20px
      margin-top 50px
      color white
.feature
  height 450px
  padding 125px 0
  background white
  .list
    width 1160px
    margin 0 auto
    display flex
    flex-direction row
    li
      height 200px
      padding-left 50px
      flex-grow 1
      &:first-child
        padding-left 0
      .short
        width 235px
        height 200px
        margin 0 auto
      .number
        margin 20px 0 10px
      .icon_crown, .icon_article, .icon_doc
        width 45px
        height 52px
        margin 0 auto
      .icon_crown
        background url("../img/icon/crown.png") no-repeat
      .icon_doc
        background url("../img/icon/doc.png") no-repeat
      .icon_article
        background url("../img/icon/article.png") no-repeat
      .detail
        margin-top 20px
        line-height 150%
        font-size 0.88rem
.reviewer
  height 900px;
  position relative
  overflow hidden
  .reviewers
    width 1160px
    margin 0 auto
  .bg
    background url("../img/home/reviewer.png") no-repeat
    width 1920px
    height 900px
    position absolute
    top 0
    left 50%
    margin-left -960px
    padding-top 100px
    h3
      margin 50px 0
    .more
      width 220px
      height 50px
      color white
      text-align center
      margin-top 50px
      background #42D0F6
      font-size 1rem
      border-radius 3px
    .item
      margin-bottom 0 !important
    
.example
  margin 0 auto
  padding-top 5px
  background #FDFFFF
  .container
    width 1160px
    margin 0 auto
    position relative
    .pen,.book,.cup
      position absolute
    .pen
      background url("../img/icon/pen.png")
      width 98px
      height 180px
      top -85px
      left -20px
    .book
      background url("../img/icon/book.png")
      width 336px
      height 173px
      top -85px
    .cup
      background url("../img/icon/cup.png")
      width 207px
      height 221px
      right 95px
      top -45px
  .more
    border-top 1px solid rgba(40,47,49,.3)
    border-bottom 1px solid rgba(40,47,49,.3)
    height 135px
    line-height 135px
    margin 0 5%
  h2
    margin-top 80px
  h3
    margin-top 20px
    opacity .6
  .list
    clearfix();
    padding 70px 0
    .row
      clearfix()
      li:first-child
        margin-left 0
    li
      height 354px
      margin-left 48px
      pull-left();
      margin-bottom 40px
      .info
        position relative
        height 354px
        width 100%
        color white
        box-shadow 0 4px 4px 1px rgba(135,135,135,.1)
        img
          position absolute
          left 0
          top 0
          height 100%
          width 100%
        .text
          height 150px
          width 100%
          position absolute
          bottom 0
          left 0
          padding 0 0 10px 30px
          z-index 2
          text-align left
          display flex
          flex-direction column
          justify-content flex-end
        h6
          font-size 1.5rem
          width 160px
          word-break break-word
        .tips
          font-size .88rem
          margin-top 15px
      .detail
        margin-top 15px
        height 60px
        border-top 1px solid rgba(40,47,49,.3)
        padding 15px 0
        p
          text-align left
          font-size 28px
          .date
            font-size 16px
            opacity 0.6
            vertical-align super
        .icon_wx,.icon_wb
          pull-right()
      &.clo-1
        width 354px
      &.clo-2
        width 755px
      &.clo-3
        width 100%

</style>
