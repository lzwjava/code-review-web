<template>
  <div class="workshop-area">
    <section class="info">
      <div class="info__content">
        <p class="info__subtitle">iOS 研讨班</p>
        <hr>
        <ul class="info__numbers">
          <li>
            <span>6</span>周
          </li>
          <li>
            <span>10</span>学员
          </li>
          <li>
            <span>60</span>课时
          </li>
          <li>
            <span>150</span>任务
          </li>
          <li>
            <span>每天</span>审核代码
          </li>
        </ul>
      </div>
    </section>

    <section id="speaker" class="speaker">
      <div class="speaker__container">
        <h1 class="title">导师</h1>
         <div class="speaker-list">
           <div class="speaker__card">
             <div class="speaker__content">
               <img src="../img/event/yeguchen.jpg">
               <h4 class="name">臧其龙</h4>
               <p class="detail">微博 <a href="http://weibo.com/u/1438670852" target="_blank">@叶孤城</a>。
                 曾就职于探探、Camera 360、流利说。对动画交互，图像，视频处理颇有心得。
                 热爱 <a href="https://github.com/zangqilong198812" target="_blank">分享</a>，热爱 iOS 圈子，为大家提供了
                 <a href="http://reviewcode.cn/" target="_blank">Code Review 平台</a>。
               </p>
             </div>
           </div>
          <div class="speaker__card">
            <div class="speaker__content">
              <img src="../img/event/lzwjava_avatar.jpg">
              <h4 class="name">李智维</h4>
              <p class="detail">微博 <a href="http://weibo.com/zhiweilee" target="_blank">@lzwjava</a>。95 年出生的他，初中接触了编程，曾任职于 LeanCloud。现创业搞起了 <a href="http://reviewcode.cn/" target="_blank">Code Review 平台</a>。业余时间也开源了一些 <a href="https://github.com/lzwjava" target="_blank">项目</a>。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="story" class="story">
      <img src="../img/workshop/iphoneblack.png"/>
      <h2>起源</h2>
      <p>
        去年 12 月开始创办 Code Review 平台，今年 3 月尝试线下交流会。我们用心地准备场地、自助餐、演讲内容，最后也收到了很好的评价。一位参会的朋友说，这是他参加过的氛围最好的技术会议。于是打算尝试更多的线下活动，期待着用我们多年积累的编程经验来帮助渴望提高的 iOS 开发。
      </p>
      <p>
        形式上，周一至周五晚上线上指导、周六日全天线下指导。一周会安排若干任务，您写的每一行代码我们都会审核。第一期只招 10 位学员。如果说我们和其它培训有什么最大的不同的话，我想就是这点：两位导师将全职陪同 10 位学员度过一个半月的学习。
      </p>
      <p>
        领域内的大部分培训需要 18800 元，此次研讨班的定价是 20000 元。只针对有一定工作经验并且渴望提高的人。不菲的价格将让我们投入更多的时间精力到每一位学员身上。
      </p>
    </section>

    <section id="chapters" class="chapters">
      <div class="chapters__content">
        <h1 class="title">课程安排</h1>
        <ul class="chapter__list">
          <li class="chapter" v-for="chapter in chapters">
            {{chapter.title}}
            <ul class="chapter__sections">
              <li v-for="section in chapter.sections">{{section}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <section id="ticket" class="ticket">
      <div class="ticket__content">
        <div class="ticket__card">
          <div class="ticket__card__header">
            <img class="bg" src="../img/workshop/workshop-toronto-hero.jpg" alt="" />
            <div class="middle">
              <div class="city">
                <img src="../img/workshop/big-location.svg" alt="" />
                <span>北京</span>
              </div>
              <div class="price">
                ¥{{workshop.amount | moneyAsYuan}}
              </div>
            </div>
          </div>

          <div class="ticket__card__footer">
            <div class="heading">
              <img src="../img/workshop/big-swift.svg" alt="" />
              <h3>iOS 研讨班</h3>
            </div>
            <div class="date">
              <img src="../img/workshop/big-calendar.svg" alt="" />
              <h3>2016.5.3 ~ 2016.6.12<br>平时晚上、周六日全天</h3>
            </div>
            <div class="buy">
              <button @click="showAttend" class="btn btn-blue" :class="{'disabled' : !attendEnabled}">{{attendTitle}}</button>
              <p>
                咨询: 18611693632
              </p>
            </div>
          </div>

        </div>

        <!-- <div class="ticket__card">

          <h3>注意事项</h3>
          <p class="ticket__detail">
            为保证您的权利，在报名成功后我们会向您发送一条短信，同时将邀请您进入研讨班微信群，请您注意。
          </p>
          <p class="price"></p>
          <button class="btn-attend btn-blue">
          </button>
        </div> -->

        <div class="ticket__attend">
          <p class="ticket__attend__title">
            已经有 {{workshop.enrollCount}} 人报名参加了研讨会 <br>还剩 {{workshop.restCount}} 个名额
          </p>
          <ul class="ticket__attend__avatars">
            <li v-for="enrollment in enrollments">
              <user-avatar :user="enrollment.user"></user-avatar>
            </li>
          </ul>
        </div>
      </div>

    </section>

    <overlay :overlay.sync="overlayStatus">
      <workshop-form :workshop="workshop"></workshop-form>
    </overlay>

    <overlay :overlay.sync="qrcodeStatus">
      <qrcode></qrcode>
    </overlay>

  </div>
</template>

<style lang="stylus">
@import '../../node_modules/jeet/stylus/jeet'
@import '../../node_modules/rupture/rupture/index.styl'

.workshop-area
  text-align center

.r
  border-right  solid 1px #E7E7E7
.b
  border-bottom 1px solid #E7E7E7
.t
  border-top 1px solid #E7E7E7
.l
  border-left 1px solid #E7E7E7
+below(768px)
  .r,.b,.t,.l
    border none
  div.null
    display none

+below(700px)
  .navbar .right
    display none

body
  layout1()
    span(0.7, offset:0.15)
  layout1_sm()
    span(0.9, offset:0.05)
  layout2()
    span(0.5, offset:0.25)
  layout2_md()
    span(0.7, offset:0.15)
  layout2_sm()
    span(0.9, offset:0.05)
  font-size 16px

  h1.title
    center(300px)
    margin-top 60px
    margin-bottom 30px
    font-weight 300
    text-align center
    font-size 36px
    height 45px
    color #fff

  .info
    span(1)
    letter-spacing 3px
    position relative
    background url("../img/workshop/intro_bg1.png") no-repeat
    height 800px
    background-size cover
    background-position center
    text-align center
    font-size 20px
    +below(500px)
      font-size 10px
    color #fff
    .info__content
      width 600px
      +below(500px)
        width 300px
        margin-left -150px
        margin-top -100px
        top 45%
      height 300px
      position absolute
      top 50%
      left 50%
      margin-left -300px
      margin-top -150px
      hr
        margin 50px
        border-top 1px solid rgba(255, 255, 255, 0.247059)
        border-bottom 0
      .info__subtitle
        letter-spacing 2px
        font-size 50px
        font-weight 700
        margin-bottom 20px
        line-height 80px
        +below(500px)
          font-size 30px
          line-height 35px
        .info__down
          font-family arial
          font-weight normal
      .info__numbers
        margin-top 80px
        font-size 24px
        li
          display inline-block
          line-height 35px
          margin 0 20px
          span
            color #62E4F5
            display block

  .speaker
    color #34495e
    background linear-gradient(-179deg,#2B3745 0,#2E598B 100%)
    span(1)
    .speaker__container
      layout2()
      +below(1200px)
        layout2_sm()
    h1
      margin-bottom 60px
    .speaker__card
      span(1/2)
      +below(500px)
        span(1)
        height 500px
      height 550px
      .speaker__content
        span(1)
        +below(500px)
          padding 10px
        padding 35px
        padding-top 10px
        h4.name
          font-weight 700
          margin-top 25px
          font-size 22px
          color #CED6E6
        a
          color #62E4F5
          &:hover
            box-shadow 0 1px 0 0 #fff
            transition .5s
        p.detail
          text-align left
          margin-top 20px
          font-size 18px
          color #CED6E6
          line-height 30px
      img
        width 152px
        height 152px
        border-radius 117px

  .story
    background #2B3745 url('../img/workshop/photo-louvre.jpg') bottom center no-repeat
    background-size 100%
    span(1)
    padding 50px 0 500px
    +below(700px)
      padding 50px 0 200px
    h2,p
      color #fff
      text-align left
      margin 50px auto
      max-width 800px
      line-height 150%
      padding 0 20px
    img
      height 712px
      float right
      position relative
      top -100px
      shape-outside url('../img/workshop/iphoneblack.png')
      +below(700px)
        height 300px
    h2
      font-size 60px
      font-weight 300
    p
      font-size 18px
      color #ced6e6

  .chapters
    span(1)
    color #fff
    padding-bottom 300px
    background-image linear-gradient(-179deg,#38bbcc 0,#3cd3ad 100%)
    div.chapters__content
      layout2()
      +below(1200px)
        layout2_sm()
      ul
        padding-left 30px
      ul.chapter__list
        center(450px)
        +below(768px)
          center(320px)
        text-align left
        margin-top 50px
        list-style disc
        li
          display list-item
          line-height 30px
        ul.chapter__sections
          list-style circle

  .ticket
    text-align center
    letter-spacing 1px
    background #2B3745
    span(1)
    min-height 400px
    .ticket__content
      layout2()
      +below(1200px)
        layout2_sm()
      .ticket__card
        text-align left
        center(500px)
        border-radius 5px
        overflow hidden
        background #E2E4E9
        position relative
        top -240px
        .ticket__card__header
          color #fff
          img.bg
            width 100%
          .middle
            position relative
            bottom 50px
            font-size 24px
            div,p
              display inline-block
            .city
              margin-left 20px
            .price
              float right
              margin-right 20px
        .ticket__card__footer
          color #000
          padding 20px
          margin-top -30px
          position relative
          height 140px
          img
            width 30px
          .heading,.date
            h3
              font-size 18px
              display inline-block
              vertical-align 0px
              margin-left 10px
              line-height 24px
          .heading
            margin-bottom 15px
          .buy
            position absolute
            right 20px
            bottom 20px
            button
              width 150px
              height 65px
              font-size 20px
              margin-bottom 20px
            p
              color #6A7989

    .ticket__attend
       margin 50px 0
       color #6E7A83
       position relative
       top -240px
       .ticket__attend__title
         line-height 30px
         font-size 20px
         margin 20px 0
       .ticket__attend__avatars
         center(300px)
         li
          display inline-block
          margin 5px
         .avatar
           img
             width 38px
             height 38px

footer
  span(1)

.disabled
  cursor not-allowed
  opacity .65
  background-color #6E7A83

</style>


<script type="text/javascript">

import util from '../common/util'
import serviceUrl from '../common/serviceUrl'
import Loading from '../components/loading.vue'
import WorkshopForm from '../components/workshop-form.vue'
import Overlay from '../components/overlay.vue'
import UserAvatar from '../components/user-avatar.vue'
import Qrcode from '../components/qrcode.vue'

var debug = require('debug')('workshop');

module.exports = {
  components: {
    'workshop-form': WorkshopForm,
    overlay: Overlay,
    'user-avatar': UserAvatar,
    'qrcode': Qrcode
  },
  data: function() {
    return {
      workshop: {},
      enrollments: [],
      overlayStatus: false,
      qrcodeStatus: false,
      chapters: [
        {
          title: 'Git',
          sections: [
            'add、commit、push、remote、checkout 基础',
            'revert、rm、reset、rebase、merge 进阶',
            'GitHub、客户端、常用流程',
            'Git 内部原理、内容寻址介绍'
          ]
        },
       {
         title: 'UI（知名应用仿写)',
         sections: [
           '下厨房',
           'CityGuides'
         ]
       },
       {
         title: 'Animation',
         sections: [
           'Pop 框架',
           'LayerAnimation、ViewAnimation、Transition、Shape、Path 等基础',
           '贝塞尔曲线、数学与动画、精选动画详解'
         ]
       },
       {
         title: 'Swift',
         sections: [
           'Structures、Closures、Optional、Generics 等基础',
           'map、reduce、filter、flatMap 与函数式编程',
           'Swift 最佳实践'
         ]
       },
       {
         title: 'ORM',
         sections: [
           'Mantle vs JSONModel vs MJExtension vs YYModel',
           '如何自己写 ORM 框架'
         ]
       },
       {
         title: 'HttpClient',
         sections: [
           'Etag、Last-Modified 与缓存',
           '设计容易扩展、错误处理优雅的网络库',
           'HTTP 协议详解'
         ]
       },
       {
         title: 'Database',
         sections: [
          'Realm(增删改查、数据同步、多表关联设计)',
          'CoreData(增删改查、多表关联)',
          'Sqlite(join、group、foreign key、index)',
          '如何针对项目做数据库选型'
        ]
      },
       {
         title: 'Cache',
         sections: [
           '数据缓存、图片缓存',
           '知名 App 缓存策略分析'
         ]
       },
       {
         title: 'Optimize',
         sections: [
           '常见App优化手段',
           '单页面多列表如何解耦',
           'MVVM如何改善架构',
           'TableView如何优化'
         ]
       },
       {
         title: 'Media',
         sections: [
           '音视频图像基础',
           '滤镜、视频剪辑、拼接',
           'ffmpeg'
         ]
       },
       {
         title: 'Xcode',
         sections: [
           '快捷键、库依赖、深入 Cocoapods',
           '打包、测试发布、推送证书',
           'Profiling、Instrument',
           '越狱、Reveal、反编译'
         ]
       },
       {
         title: 'Test',
         sections: [
           '流行开源库单元测试详解',
           '真实开发中的测试',
           '覆盖率、测试框架',
         ]
       },
       {
         title: 'CI',
         sections: [
           '如何配置 Jenkins',
           '自动化打包、自动化测试',
           'Github Hooks、Travis CI'
         ]
       },
       {
         title: 'Full Stack & Silicon Valley',
         sections: [
           'PHP 与 MySQL 后端开发',
           'HTML、CSS、Vue 前端',
           'LeanCloud 数据存储、实时通信',
           '美国签证、硅谷游学见闻'
         ]
       }
      ]
    };
  },
  computed: {
    attendTitle () {
      if (this.workshop.enrollment != null) {
        return '您已报名，欢迎加参会群';
      } else if (this.workshop.restCount > 0)  {
        var user = util.getLocalUser();
        if (!user.username) {
          return '请登录后报名';
        } else {
          return '立即报名';
        }
      } else {
        return '报名已满';
      }
    },
    attendEnabled() {
      if (this.workshop.enrollment != null) {
        return true;
      } else if (this.workshop.restCount > 0)  {
        var user = util.getLocalUser();
        if (!user.username) {
          return true;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  },
  methods: {
    showAttend() {
      // if (util.mobileCheck()) {
      //   util.show(this, 'warn', '暂时只支持电脑支付，请在电脑上打开 http://reviewcode.cn 报名', 10 * 1000);
      //   return;
      // }
      if (!this.attendEnabled) {
        return;
      }
      if (this.workshop.attendance != null) {
        this.qrcodeStatus = true;
      } else if (this.workshop.restCount > 0)  {
        var user = util.getLocalUser();
        if (!user.username) {
          var nav = this.$root.$children[0];
          nav.signin();
        } else {
          this.overlayStatus = true;
        }
      } else {
        // 已满
      }
    },
    fetchWorkshop(workshopId) {
      this.$http.get(serviceUrl.workshopGet.replace(/:id/, workshopId))
        .then((resp)=> {
          if (util.filterError(this, resp)) {
            this.workshop = resp.data.result;
            debug('workshop: %j', this.workshop);
          }
        }, util.httpErrorFn(this));
    },
    fetchEnrollments(workshopId) {
      this.$http.get(serviceUrl.workshopEnrollments.replace(/:id/, workshopId))
        .then((resp) => {
          if (util.filterError(this, resp)) {
            this.enrollments = resp.data.result;
            debug('enrollments: %j', this.enrollments)
          }
        }, util.httpErrorFn(this));
    },
  },
  ready () {

  },
  created() {
    document.title = 'iOS 研讨班';
    var params = util.getSearchParameters();
    if (!params.workshopId) {
      util.show(this, 'error', '请提供 workshopId');
      return;
    }
    var workshopId = params.workshopId;
    this.fetchWorkshop(workshopId);
    this.fetchEnrollments(workshopId);
  }
};

</script>
