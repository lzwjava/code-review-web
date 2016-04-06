<template>
  <div class="event-area">
    <section class="info">
      <div class="info__content">
        <p class="info__subtitle">iOS 研讨班</p>
        <p class="info__detail">
          我一直在思索一个问题，在 7000-15000 这个分段徘徊，想要提高却止步不前的 iOS 开发，他们到底需要一种怎样的指导或者方法持续提高？<br>
          我想到了一个让我受益匪浅的方案：仿写。<br>
          我们为什么不能提供后台和 UI，通过每日安排任务仿写知名 App 的方法，让这些渴望提高的朋友迅速地迈过这个门槛，向更高的阶段进发呢？<br>
          —— 叶孤城
        </p>
      </div>
    </section>
    <section id="intro" class="intro">
      <div class="intro__content">
        <h1 class="title">研讨班详情</h1>
        <h3>2016.05.01 ~ 2016.06.15</h3>
        <div class="intro__card">
          <h3 class="intro__reason">时间</h3>
          <p class="intro__detail">平时晚上、周日白天</p>
        </div>
        <div class="intro__card">
          <h3 class="intro__reason">学员</h3>
          <p class="intro__detail">10 位</p>
        </div>
        <div class="intro__card">
          <h3 class="intro__reason">费用</h3>
          <p class="intro__detail">¥20000</p>
        </div>

      </div>
    </section>
    <section id="speaker" class="speaker">
      <h1 class="title">导师介绍</h1>
       <div class="speaker-list">
         <div class="speaker__card">
           <div class="speaker__content">
             <img src="../img/event/yeguchen.jpg">
             <h4 class="name">臧其龙</h4>
             <p class="detail">微博 <a href="http://weibo.com/u/1438670852" target="_blank">@叶孤城</a>。现为探探 iOS 开发，
               曾就职于 Camera360、流利说。对动画交互，图像，视频处理颇有心得。
               热爱 <a href="https://github.com/zangqilong198812" target="_blank">分享</a>，热爱 iOS 圈子，为大家提供了
               <a href="http://reviewcode.cn/" target="_blank">Code Review 平台</a>。
             </p>
           </div>
         </div>
        <div class="speaker__card">
          <div class="speaker__content">
            <img src="../img/event/yanrui.jpg">
            <h4 class="name">张延瑞</h4>
            <p class="detail">微博 <a href="http://weibo.com/u/1764965604">@张延瑞</a> 。11年末开始从事 iOS 开发，曾就职于阿姨帮、Camera360，现就职于乐视，负责影视会员相关业务。拥有丰富的开发经验。
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

    </section>

    <section id="chapters" class="chapters">
      <div class="chapters__content">
        <h1 class="title">课程安排</h1>
        <ul class="chapter__list">
          <li v-for="chapter in chapters">
            {{chapter.title}}
            <ul class="chapter__sections">
              <li v-for="section in chapter.sections">{{section}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <div class="mount">

      <section id="ticket" class="ticket">
        <div class="ticket__content">
          <h1 class="title">报名参加</h1>

          <div class="ticket__card">
            <h3>注意事项</h3>
            <p class="ticket__detail">
              为保证您的权利，在报名成功后我们会向您发送一条短信，同时将邀请您进入研讨班微信群，请您注意。
            </p>
            <p class="price">¥{{workshop.amount | moneyAsYuan}}</p>
            <button class="btn-attend btn-blue" @click="showAttend" :class="{'disabled' : !attendEnabled}">
              {{attendTitle}}
            </button>
          </div>

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

        <footer>
            <p class="footer__brand">Code Review</p>
        </footer>
    </div>

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

.event-area
  text-align center

div
p
  font-family "PingFang SC","Helvetica Neue",Helvetica,"Hiragino Sans GB","WenQuanYi Micro Hei",Arial,"Microsoft Yahei",Verdana,sans-serif

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
  background #fff

  h1.title
    center(300px)
    margin-top 60px
    margin-bottom 30px
    font-weight 300
    text-align center
    font-size 36px
    height 45px
    color #1CB2EF
    background-image url("../img/event/intro_bg.png")
    background-repeat no-repeat
    background-position center bottom

  .info
    span(1)
    letter-spacing 3px
    position relative
    background url("../img/event/info_bg.jpg") no-repeat
    height 700px
    background-size contain
    background-position center
    text-align center
    font-size 20px
    +below(500px)
      font-size 10px
    color #282F31
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
    .info__subtitle
      letter-spacing 2px
      font-size 50px
      margin-bottom 20px
      line-height 60px
      +below(500px)
        font-size 30px
        line-height 35px
      .info__down
        font-family arial
        font-weight normal
    .info__detail
      margin-top 30px
      font-size 15px
      color #6E7A83
      line-height 30px
      +below(500px)
        font-size 16px
        line-height 20px
        margin 0 10px

  .speaker
    layout2()
    +below(1200px)
      layout2_sm()
    color #34495e
    h1
      background-image url("../img/event/speaker_bg.png")
      margin-bottom 20px
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
          color #6E7A83
        p.detail
          text-align left
          margin-top 20px
          font-size 18px
          color #6E7A83
          line-height 30px
        a
          color #428bca
      img
        width 152px
        height 152px
        border-radius 117px

  .intro
    span(1)
    color #34495e
    div.intro__content
      layout1()
      +below(1200px)
        layout1_sm()
    h1
      background-image url("../img/event/intro_bg.png")
    h3
      font-size 40px
      color #282F31
      line-height 72px
      margin-bottom 20px
      +below(500px)
        font-size 30px
    .intro__card
      span(1/3)
      +below(500px)
        span(1)
      padding 20px
      h3.intro__reason
        margin-bottom 20px
        font-size 20px
        color #E24B47
        line-height 40px
      p.intro__detail
        margin-top 20px
        line-height 25px
    div#map__container
      center(600px)
      margin-top 200px
      img
        width 100%
  .chapters
    span(1)
    color #34495e
    padding-bottom 50px
    div.chapters__content
      layout2()
      +below(1200px)
        layout2_sm()
      h1
        background-image url("../img/event/agenda_bg.png")
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
          margin-top 5px
        ul.chapter__sections
          list-style circle
  .ticket
    layout2()
    +below(1200px)
      layout2_sm()
    color #34495e
    text-align center
    letter-spacing 1px
    .ticket__card
      text-align center
      center(350px)
      background #FDFFFF
      border 1px solid #D9DBDC
      box-shadow 0px 1px 4px 0px rgba(0,0,0,0.08)
      border-radius 8px
      padding 30px
      margin-top 80px
      h3
        font-size 20px
        color #6E7A83
        line-height 20px
        margin-bottom 10px
      .ticket__detail
        font-size 14px
        color #6E7A83
        line-height 24px
        border-bottom 1px solid rgba(0,0,0,0.15)
        margin-top 10px
        padding-bottom 20px
      .price
        overflow visible
        padding 0
        color #000
        font-size 48px
        margin 20px 0
      .btn-attend
        font-size 16px
        width 80%
        padding 10px 0px
    .ticket__attend
       margin 50px 0
       color #6E7A83
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
  .mount
    span(1)
    background url("../img/event/mount.jpg") no-repeat
    background-position bottom
    background-size 100% 40%
    +below(500px)
      background-size 100% 30%

  footer
    span(1)
    color white
    width 100%
    height 300px
    color #6E7A83
    .footer__tips
      font-size 20px
      margin 80px 10px
      line-height 25px
    .footer__brand
      font-size 20px
      line-height 36px

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
          title: '数据库',
          sections: [
           'Realm vs CoreData vs SQLite ',
           '三个数据库的常规用法和高级用法',
           '如何针对项目做数据库选型'
         ]
       },
       {
         title: 'UI（知名App的仿写)',
         sections: [
           '下厨房',
           'CityGuides'
         ]
       },
       {
         title: 'Animation',
         sections: [
           'Pop框架',
           'LayerAnimation',
           'ViewAnimation',
           'TransitionAnimation',
           'Shape Animation',
           'Path Animation',
           'dynamic animation',
           'particles animation'
         ]
       },
       {
         title: 'ORM',
         sections: [
           'Mantle vs JSONModel vs MJExtension vs YYModel',
           '三个框架的对比解析',
           '如何自己写 ORM 框架'
         ]
       },
       {
         title: 'HttpClient',
         sections: [
           'Etag, Last-Modified',
           '如何设计合理的网络错误处理机制',
           '如何设计容易扩展的网络库'
         ]
       },
       {
         title: 'Cache',
         sections: [
           '如何使用Realm设计缓存',
           '如何使用CoreData设计缓存',
           '如何使用Sqlite设计缓存'
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
         title: 'UnitTest',
         sections: [
           '如何编写实用的测试用例',
           '如何使用OCMock编写测试用例'
         ]
       },
       {
         title: 'CI',
         sections: [
           '如何写一个持续化集成工具',
           '如何配置 Jenkins',
           '如何合理利用 Github Hooks 完成工作'
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
