<template>
  <div class="event-area">
    <section class="info">
      <div class="info__content">
        <p class="info__subtitle">CRViewController<br>线下活动</p>
        <p class="info__detail">
          亲爱的朋友们，我们一起相约中关村 e 世界，参与、分享并交流代码。<br>
          你可以带着问题来，这些问题可以是和活动相关的，也可以是无关的。<br>
          比如，你平时写代码遇到的问题，想知道如何快速提高等等。<br> Ask me anything。
        </p>
      </div>
    </section>
    <section id="intro" class="intro">
      <div class="intro__content">
        <h1 class="title">活动详情</h1>
        <h3>2016 年 3 月 13 日</h3>
        <div class="intro__card">
          <h3 class="intro__reason">时间</h3>
          <p class="intro__detail">1pm - 6:30pm</p>
        </div>
        <div class="intro__card">
          <h3 class="intro__reason">地点</h3>
          <p class="intro__detail">中关村 e 世界<br>联合创业办公社</p>
        </div>
        <div class="intro__card">
          <h3 class="intro__reason">费用</h3>
          <p class="intro__detail">¥288</p>
        </div>

        <div id="map__container">
          <img src="../img/event/map_e_world.jpg">
        </div>

      </div>
    </section>
    <section id="speaker" class="speaker">
      <h1 class="title">嘉宾介绍</h1>
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
            <img src="../img/event/ios_programmer.jpg">
            <h4 class="name">陈宜龙</h4>
            <p class="detail">你可能不熟悉陈宜龙，但不会不知道 <a href="http://weibo.com/u/1692391497" target="_blank">iOS 程序犭袁</a>。
              热爱分享，崇尚开源精神，对新技术有狂热的追求。
              著有《iOS 9 适配系列教程》、《iOS 面试题集锦》、《CYLTabBarController》等
              <a href="https://github.com/ChenYilong" target="_blank">教程和框架</a>，均获得数千 Star。
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
        <!-- <div class="speaker__card b l">
          <div class="speaker__content">
            <h4 class="name">邱胤炎</h4>
            <img src="../img/event/MartinRGB.jpg">
            <p class="detail">微博 <a href="http://weibo.com/u/1956547962">@MartinRGB</a> 。设计与编程才华集于一身。就职于魅族、乐视、渡鸦。
              最大的成就感就是自己亲手把自己设计的复杂动画用代码实现。
              UI 中国有一期 MartinRGB 的 <a href="http://www.ui.cn/detail/56421.html" target="_blank">采访</a>。
              开源了多个炫酷的 <a href="https://github.com/MartinRGB" target="_blank"> 动画项目</a>。
            </p>
          </div>
        </div> -->
        <div class="speaker__card">
          <div class="speaker__content">
            <img src="../img/event/lzwjava_avatar.jpg">
            <h4 class="name">李智维</h4>
            <p class="detail">微博 <a href="http://weibo.com/zhiweilee" target="_blank">@lzwjava</a>。95 年出生的他，初中接触了编程，曾任职于 LeanCloud。现创业搞起了 <a href="http://reviewcode.cn/">Code Review 平台</a>，负责大部分技术开发。业余时间也开源了一些 <a href="https://github.com/lzwjava">项目</a>。</p>
          </div>
        </div>

      </div>
      <!-- <div class="speaker-list">

      </div> -->

    </section>
    <section id="agenda" class="agenda">
      <div class="agenda__content">
        <h1 class="title">活动流程</h1>
        <ul class="agenda__list">
          <li v-for="arrange in agenda">
            <div class="agenda__item">{{arrange.item}}</div>
            <div class="agenda__detail" v-html="arrange.detail"></div>
            <div class="agenda__time">{{arrange.time}}</div>
          </li>
        </ul>
      </div>
    </section>

    <div class="mount">

      <section id="ticket" class="ticket">
        <div class="ticket__content">
          <h1 class="title">购买门票</h1>

          <div class="ticket__card">
            <h3>注意事项</h3>
            <p class="ticket__detail">
              为保证您的权利，在购买成功后我们会向您发送一条短信，请您确认。本活动所得用于场地、嘉宾、晚宴费用，Code Review 秉承平台原则，不收取额外费用。
            </p>
            <p class="price">¥{{event.amount | moneyAsYuan}}</p>
            <button class="btn-attend btn-blue" :class="{'disabled': event.attendance != null }" @click="showAttend">
              {{attendTitle}}
            </button>
          </div>

          <div class="ticket__attend">
            <p class="ticket__attend__title">
              已经有 {{event.attendCount}} 人购买了门票 <br>还剩 {{event.restCount}}张
            </p>
            <ul class="ticket__attend__avatars">
              <li v-for="attendance in attendances">
                <user-avatar :user="attendance.user"></user-avatar>
              </li>
            </ul>
          </div>
        </div>

      </section>

        <footer>

            <p class="footer__tips">现场我们会拍摄一些照片，别忘了活动结束后回来看哦</p>
            <p class="footer__brand">Code Review</p>

          </footer>
    </div>




    <overlay :overlay.sync="overlayStatus">
      <event-form :event="event"></event-form>
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
        height 450px
      height 600px
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
  .agenda
    span(1)
    color #34495e
    padding-bottom 50px
    div.agenda__content
      layout2()
      +below(1200px)
        layout2_sm()
      h1
        background-image url("../img/event/agenda_bg.png")
      .agenda__list
        center(650px)
        +below(768px)
          center(320px)
        list-style none
        display block
        margin-top 50px
        li
          span(1)
          height 100px
          border-bottom 2px solid #f8f8f8
          text-align left
          padding-top 30px
          div
            display inline-block
            font-size 24px
            color #6E7A83
            vertical-align middle
            line-height 30px
            +below(768px)
              font-size 14px
          .agenda__item
            width 150px
            +below(768px)
              width auto
              margin-right 10px
          .agenda__time
            float right
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
    background-size 100% 65%
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
import EventForm from '../components/event-form.vue'
import Overlay from '../components/overlay.vue'
import UserAvatar from '../components/user-avatar.vue'

var debug = require('debug')('event');

module.exports = {
  components: {
    'event-form': EventForm,
    overlay: Overlay,
    'user-avatar': UserAvatar
  },
  data: function() {
    return {
      event:{},
      attendances: [],
      overlayStatus: false,
      agenda: [
        {
          item: '签到',
          detail: '',
          time: '13:00'
        },
        {
          item: '臧其龙',
          detail: '开场',
          time: '13:30'
        },
        {
          item: '臧其龙',
          detail: 'iOS 开发如何快速成长(20min) <br>Ask Me Anything(20min)',
          time: '13:40'
        },
        {
          item: '陈宜龙',
          detail: 'IM 开发的那些事(20min) <br>Ask Me Anything(20min)',
          time: '14:25'
        },
        {
          item: '茶歇',
          detail: '',
          time: '15:10'
        },
        {
          item: '张延瑞',
          detail: '编程、生活(20min) <br> Ask Me Anything(20min)',
          time: '15:40'
        },
        {
          item: '李智维',
          detail: '走在野心的路上(20min) <br> Ask Me Anyting(20min)',
          time: '16:25'
        },
        {
          item: '分组交流',
          detail: '嘉宾和参会者分组交流',
          time: '17:00'
        },
        {
          item: '晚宴',
          detail: '嘉宾和参会者共享晚宴',
          time: '18:30'
        },
        {
          item: '结束',
          detail: '',
          time: '20:30'
        }
      ]
    };
  },
  computed: {
    attendTitle () {
      var user = util.getLocalUser();
      if (!user.username) {
        return '请登录后报名';
      } else if (this.event.attendance == null) {
        return '立即报名';
      } else {
        return '您已报名';
      }
    }
  },
  methods: {
    showAttend() {
      // if (util.mobileCheck()) {
      //   util.show(this, 'warn', '暂时只支持电脑支付，请在电脑上打开 http://reviewcode.cn 报名', 10 * 1000);
      //   return;
      // }
      var user = util.getLocalUser();
      if (!user.username) {
        var nav = this.$root.$children[0];
        nav.signin();
      } else if (this.event.attendance == null){
         this.overlayStatus = true;
      } else {
      }
    },
    fetchEvent(eventId) {
      this.$http.get(serviceUrl.eventGet.replace(/:id/, eventId))
        .then((resp)=> {
          if (util.filterError(this, resp)) {
            this.event = resp.data.result;
            debug('event: %j', this.event);
          }
        }, util.httpErrorFn(this));
    },
    fetchAttendances(eventId) {
      this.$http.get(serviceUrl.attendancesGetEvent.replace(/:id/, eventId))
        .then((resp) => {
          if (util.filterError(this, resp)) {
            this.attendances = resp.data.result;
            debug('attendances: %j', this.attendances)
          }
        }, util.httpErrorFn(this));
    },
  },
  ready () {

  },
  created() {
    var params = util.getSearchParameters();
    if (!params.eventId) {
      util.show(this, 'error', '请提供 eventId');
      return;
    }
    var eventId = params.eventId;
    this.fetchEvent(eventId);
    this.fetchAttendances(eventId);

    var user = util.getLocalUser();
    if (!user.username) {
      // 没有登录
      return;
    } else {
      this.$http.get(serviceUrl.attendanceGet.replace(/:id/, eventId))
       .then((resp) => {

       }, util.httpErrorFn(this));
    }
  }
};

</script>
