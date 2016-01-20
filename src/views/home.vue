<template>
  <div class="home-main">
    <section class="slide">
      <div class="bg">
        <h1>最高效的代码审核服务</h1>
        <h2 id="header2">Code Review，迅速帮你提升核心竞争力</h2>
        <div>
          <button class="begin"></button>
        </div>
        <button class="help">如何使用 Code Review</button>
        <a href="./belief.html"><button class="help">如何使用 Code Review</button></a>
      </div>
    </section>

    <section class="feature">
      <ul class="list">
        <li>
          <div class="short">
            <div class="icon_crown"></div>
            <h4 class="number">20+大神入驻</h4>
            <p class="detail">我们邀请了业内知名的开发者帮助大家解决在编码过程中所遇到的问题，这些高手利用自己所擅长的技术为各位竭诚服务。</p>
          </div>
        </li>
        <li>
          <div class="short">
            <div class="icon_doc"></div>
            <h4 class="number">10+审核文档</h4>
            <p class="detail">每一次 Code Review 的过程都凝结着大神的心血 Code Review 上线半年以来，已经帮助重构、简化了 1400 份代码文件。</p>
          </div>
        </li>
        <li>
          <div class="short">
            <div class="icon_article"></div>
            <h4 class="number">10+经验总结</h4>
            <p class="detail">代码审核无论对于审核者还是帮助申请人来说，都是宝贵的经验财富，在获得许可的情况下，我们提供 Code Review 经验文摘。</p>
          </div>
        </li>
      </ul>
    </section>

    <section class="reviewer">
      <div class="bg">
          <h2>发现行业内精英开发者</h2>
          <h3>一览各个语言领域顶尖的编程人物，了解他们，并申请帮助。</h3>
          <reviewer :reviewers="reviewers"></reviewer>
          <div>
            <a href="/reviewers.html">
              <button class="more" type="button">寻找更多高手</button>
            </a>
          </div>
      </div>
    </section>

    <section class="example">
        <div class="container">
          <h2>精选 Code Review 案例</h2>
          <h3>我们精心挑选了一些典型问题的优雅解决方案，分享给大家</h3>
          <ul class="list">
            <div class="row">
              <li class="clo-2" @click="goDetail(reviews[0].reviewId)">
                <div class="info">
                  <img :src="reviews[0].coverUrl">
                  <div class="text">
                    <h6 class="title" v-html="reviews[0].title">
                    </h6>
                    <h6 class="tips">
                      <span v-for="tag in reviews[0].tags">#{{tag.tagName}}</span>
                    </h6>
                  </div>
                </div>
              </li>
              <li class="clo-1" @click="goDetail(reviews[1].reviewId)">
                <div class="info">
                  <img :src="reviews[1].coverUrl">
                  <div class="text">
                    <h6 class="title" v-html="reviews[1].title">
                    </h6>
                    <h6 class="tips">
                      <span v-for="tag in reviews[1].tags">#{{tag.tagName}}</span>
                    </h6>
                  </div>
              </li>
            </div>
            <div class="row">
              <li class="clo-1" @click="goDetail(reviews[2 + i].reviewId)" v-for="i in 3">
                <div class="info">
                  <img :src="reviews[2 + i].coverUrl">
                  <div class="text">
                    <h6 class="title" v-html="reviews[2 + i].title">
                    <h6 class="tips">
                      <span v-for="tag in reviews[2 + i].tags">#{{tag.tagName}}</span>
                    </h6>
                  </div>
              </li>
            </div>
            <div class="row">
              <li class="clo-3" @click="goDetail(reviews[5].reviewId)">
                <div class="info big-img-wrap">
                  <span class="big-img"></span>
                  <div class="text">
                    <h6 class="title" v-html="reviews[5].title">
                    </h6>
                    <h6 class="tips">
                      <span v-for="tag in reviews[5].tags">#{{tag.tagName}}</span>
                    </h6>
                  </div>
              </li>
            </div>
          </ul>
        </div>
        <div class="more">
          <a href="./case.html">阅读更多</a>
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
        reviewers: [],
        reviews: [
          {reviewId: 2,
           coverUrl: 'http://7xotd0.com1.z0.glb.clouddn.com/photo-1450849608880-6f787542c88a.jpeg',
           title: '特邀采访<br>传奇开发者<br>Loren Brichter',
           tags: [{tagName: '传感器'}, {tagName: 'iOS'}]},
          {reviewId: 8,
           coverUrl: 'http://7xotd0.com1.z0.glb.clouddn.com/photo-1431975562098-bac8ded504c7.jpeg',
           title: '传感器使用误区<br>与性能优化',
           tags: [{tagName: '传感器'}, {tagName: 'iOS'}]},
          {reviewId: 9,
           coverUrl: 'http://7xotd0.com1.z0.glb.clouddn.com/photo-1443916765281-9937110585db.jpeg',
           title: '传感器使用误区<br>与性能优化',
           tags: [{tagName: '传感器'}, {tagName: 'iOS'}]},
          {reviewId: 10,
           coverUrl: 'http://7xotd0.com1.z0.glb.clouddn.com/photo-1448814100339-234df1d4005d.jpeg',
           title: '传感器使用误区<br>与性能优化',
           tags: [{tagName: '传感器'}, {tagName: 'iOS'}]},
           {reviewId: 9,
            coverUrl: 'http://7xotd0.com1.z0.glb.clouddn.com/photo-1439737567250-e9ea931e97a4.jpeg',
            title: '传感器使用误区<br>与性能优化',
            tags: [{tagName: '传感器'}, {tagName: 'iOS'}]},
           {reviewId: 10,
            coverUrl: '',
            title: '传感器使用误区<br>与性能优化',
            tags: [{tagName: '传感器'}, {tagName: 'iOS'}]},
        ]
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
      this.$http.get(serviceUrl.reviewsGet, {
        limit: 6
      }).then((resp) => {
        if (util.filterError(this, resp)) {
          var reviews = resp.data.result;
          for (var i = 0; i < reviews.length; i++) {
            // this.reviews[i].title = reviews[i].title;
            // this.reviews[i].reviewId = reviews[i].reviewId;
            // this.reviews[i].tags = reviews[i].tags;
          }
        }
      },util.httpErrorFn(this));
    },
    methods: {
      goDetail: (id) => {
        window.location = '/article.html?reviewId=' + id;
      }
    }
  }
</script>

<style lang="stylus">
@import '../stylus/variables.styl';
@import '../stylus/base.styl';

#header2
  font-size 1.5rem
  font-weight 100
  font-family Raleway-ExtraLight,"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei",Arial,"Microsoft Yahei",Verdana,sans-serif

.navbar
  position fixed
  z-index 8 // signup login overlay = 9

.home-main
  text-align center
  font-size 1rem
  h3
    opacity 0.6

.slide
  height 800px
  position relative
  color #fff
  width 100%
  overflow hidden
  .bg
    background url("../img/home/hero.jpg") no-repeat
    background-size cover
    background-position-y 40%
    position 200% 200%
    width 100%
    height 100%
    padding-top 250px
    h2
      margin-top 30px
    .begin
      background url("../img/icon/play.png") no-repeat
      width 80px
      height 80px
      margin-top 60px
    .help
      @extend .raleway-regular-font
      height 50px
      width 220px
      background blue
      border-radius 3px
      font-size 1rem
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
        width 49px
        height 52px
        margin 0 auto
      .icon_crown
        background url("../img/icon/crown.png") no-repeat
        background-size: contain
      .icon_doc
        background url("../img/icon/doc.png") no-repeat
        background-size: contain
      .icon_article
        background url("../img/icon/article.png") no-repeat
        background-size: contain
      .detail
        margin-top 20px
        line-height 180%
        font-size 0.88rem
.reviewer
  height 800px;
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
    padding-top 80px
    h3
      margin 30px 0
      margin-bottom 40px
    .more
      width 220px
      height 50px
      color white
      text-align center
      margin-top 60px
      background #42D0F6
      font-size 1rem
      border-radius 3px
    .item
      margin-top 14px
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
    margin-top 30px
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
      .big-img-wrap
        .big-img
          background-image url('http://7xotd0.com1.z0.glb.clouddn.com/photo-1449157291145-7efd050a4d0e.jpeg')
          background-size cover
          background-repeat no-repeat
          display block
          width 100%
          height 100%
          -webkit-filter brightness(0.4)
          transition: all 0.35s ease 0s;
          -webkit-transition all 0.35s ease 0s
          &:hover
            -webkit-filter brightness(0.6)
            transform: scale(1.2,1.2)
      .info
        position relative
        height 354px
        width 100%
        color white
        box-shadow 0 4px 4px 1px rgba(135,135,135,.1)
        overflow hidden
        backface-visibility hidden
        &:hover
          img
            transform: scale(1.2,1.2)
            -webkit-filter brightness(0.6)
          .title
            -webkit-transform translate(0, -20px)
            transfrom translate(0, -20px)
            opacity 1.0
          .tips
            -webkit-transform translate(0, -10px)
            transfrom translate(0, -10px)
            opacity 0.8
        img
          position relative
          left 0
          top 0
          height 100%
          width 100%
          -webkit-filter brightness(0.4)
          transition: all 0.35s ease 0s;
          -webkit-transition: all 0.35s ease 0s;
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
          width 200px
          word-break break-word
          font-family "PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei",Arial,"Microsoft Yahei",Verdana,sans-serif
        .title
          font-size 1.5rem
          line-height 2rem
          font-weight 100
          -webkit-transform translate(0, 10px)
          transfrom translate(0, 10px)
          opacity 0.92
          transition: all 0.35s ease 0s;
          -webkit-transition: all 0.35s ease 0s;
        .tips
          font-size .88rem
          font-weight 100
          //margin-top 15px
          margin-bottom 10px
          -webkit-transform translate(0, 20px)
          transfrom translate(0, 20px)
          opacity 0
          transition: all 0.35s ease 0.05s;
          -webkit-transition: all 0.35s ease 0.05s;
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
