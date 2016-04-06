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
               <p class="detail">微博 <a href="http://weibo.com/u/1438670852" target="_blank">@叶孤城</a>。现为探探 iOS 开发，
                 曾就职于 Camera360、流利说。对动画交互，图像，视频处理颇有心得。
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
          <li v-for="chapter in chapters">
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
    padding-bottom 50px
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
          margin-top 5px
        ul.chapter__sections
          list-style circle

  .ticket
    color #34495e
    text-align center
    letter-spacing 1px
    background #2B3745 url('../img/workshop/photo-louvre.jpg') bottom center no-repeat
    background-size 100%
    span(1)
    .ticket__content
      layout2()
      +below(1200px)
        layout2_sm()
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
           'Realm',
           'CoreData',
           'Sqlite',
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
           'Pop 框架',
           'LayerAnimation',
           'ViewAnimation',
           'TransitionAnimation',
           'Shape Animation',
           'Path Animation',
           'Dynamic animation',
           'Particles animation'
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
           '如何使用 Etag、Last-Modified 来实现缓存',
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
