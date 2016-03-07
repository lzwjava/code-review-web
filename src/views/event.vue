<template>
  <div class="event-area">
    <section class="info">
      <div class="info__content">
        <p class="info__subtitle"><span class="info__down">Code Review</span><br>第一次线下活动</p>
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
             <h4 class="name">臧其龙</h4>
             <img src="../img/event/yeguchen.jpg">
             <p class="detail">微博 <a href="http://weibo.com/u/1438670852" target="_blank">@叶孤城</a>。现为探探 iOS 开发，
               曾就职于 Camera360、流利说。对动画交互，图像，视频处理颇有心得。
               热爱 <a href="https://github.com/zangqilong198812" target="_blank">分享</a>，热爱 iOS 圈子，为大家提供了
               <a href="http://reviewcode.cn/" target="_blank">Code Review 平台</a>。
             </p>
           </div>
         </div>
        <div class="speaker__card">
          <div class="speaker__content">
            <h4 class="name">陈宜龙</h4>
            <img src="../img/event/ios_programmer.jpg">
            <p class="detail">你可能不熟悉陈宜龙，但不会不知道 <a href="http://weibo.com/u/1692391497" target="_blank">iOS 程序犭袁</a>。
              热爱分享，崇尚开源精神，对新技术有狂热的追求。
              著有《iOS 9 适配系列教程》、《iOS 面试题集锦》、《CYLTabBarController》等
              <a href="https://github.com/ChenYilong" target="_blank">教程和框架</a>，均获得数千 Star。
            </p>
          </div>
        </div>
        <div class="speaker__card">
          <div class="speaker__content">
            <h4 class="name">张延瑞</h4>
            <img src="../img/event/yanrui.jpg">
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
            <h4 class="name">李智维</h4>
            <img src="../img/event/lzwjava_avatar.jpg">
            <p class="detail">微博 <a href="http://weibo.com/zhiweilee" target="_blank">@lzwjava</a>。95 年出生的他，初中接触了编程，曾任职于 LeanCloud。现创业搞起了 <a href="http://reviewcode.cn/">Code Review 平台</a>，负责大部分的技术开发。业余时间也开源了一些 <a href="https://github.com/lzwjava">项目</a>。</p>
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
          <li>
            <time>13:00</time>
            <div><span>签到</span></div>
          </li>
          <li>
            <time>13:30</time>
            <div><span>开场</span>
              <p>臧其龙</p>
            </div>
          </li>
          <li>
            <time>13:40</time>
            <div>
              <span>iOS 开发如何快速成长(20min)</span><br>
              <span>Ask Me Anything(20min)</span>
              <p>臧其龙</p>
            </div>
          </li>
          <li>
            <time>14:25</time>
            <div>
              <span>IM 开发的那些事(20min)</span><br>
              <span>Ask Me Anything(20min)</span>
              <p>陈宜龙</p>
            </div>
          </li>

          <li>
            <time>15:10</time>
            <div><span>茶歇</span></div>
          </li>

          <li>
              <time>15:40</time>
              <div>
                <span>编程、生活(20min)</span><br>
                <span>Ask Me Anything(20min)</span>
                <p>张延瑞</p>
             </div>
          </li>

          <li>
            <time>16:25</time>
            <div>
              <span>我的选择和成长(20min)</span><br>
              <span>Ask Me Anything(20min)</span>
              <p>李智维</p>
            </div>
          </li>

          <li>
            <time>17:00</time>
            <div>
              <span>分组交流</span>
              <p>各嘉宾和参会者分组交流</p>
            </div>
          </li>

          <li>
            <time>18:30</time>
            <div><span>结束</span></div>
          </li>
        </ul>
      </div>
    </section>

    <section id="ticket" class="ticket">
      <div class="ticket__content">
        <h1 class="title">购买门票</h1>

        <div class="ticket__card">
          <h3>注意事项</h3>
          <p class="ticket__detail">
            为保证您的权利，在购买成功后我们会向您发送一条短信，请您确认，本活动所得用于支付活动费用，Code Review 秉承平台原则，不收取额外费用。
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

        <p class="ticket__tips">现场我们会拍摄一些照片，别忘了活动结束后来看哦</p>

      </div>

    </section>

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
        font-size 14px
        line-height 20px
        margin 0 10px

  .header
    span(1)
    background-color white
    position absolute
    bottom 0
    box-shadow 0px 0px 5px rgba(0, 0, 0, 0.3)
    padding 10px
    height 60px

    .sm_nav
      span(0.2, offset: 0.1)
      display none
      +below(500px)
        display inline-block
      height 40px
      vertical-align middle
      .header__btn
        span(1/6)
        padding-top 9px
        text-align center
        a
          cursor pointer
          text-decoration none
          color #4d4d4d
          font-size 20px
          &:hover
            color #5399fc
            text-decoration none
      ul
        span(1)
        display none
        box-sizing border-box
        text-align left
        position absolute
        bottom 60px
        left 0
        list-style-type none
        margin 0
        padding-left 40px
        padding-top 5px
        padding-bottom 5px
        height 210px
        background white
        border-bottom solid 1px #ccc
        border-top solid 1px #ccc
        li
          span(0.8)
          padding-top 5px
          padding-bottom 5px
          line-height 30px
          vertical-align middle
          height 40px
          a
            font-size 16px

    .header__nav
      span(0.42, offset:0.29)
      +below(1024px)
        span(0.6, offset:0.1)
      +below(500px)
        display none
      height 40px
      .header__btn
        span(1/5)
        padding-top 8px
        text-align center
        a
          cursor pointer
          text-decoration none
          color #4d4d4d
          font-size 16px
          &:hover
            color #5399fc
            text-decoration none
      .highlight
        padding-top 5px
        a
          background-color #5399fc
          color white
          display inline-block
          padding 5px
          width 140px
          border-radius 16px
          &:hover
            color white
            background-color #64a3fc
  .speaker
    layout2()
    +below(1200px)
      layout2_sm()
    color #34495e
    h1
      background-image url("../img/event/speaker_bg.png")
    .speaker__card
      span(1/2)
      +below(768px)
        span(1/2)
      +below(500px)
        span(1)
      height 500px
      padding 10px
      .speaker__content
        span(1)
        +below(500px)
          padding 10px
        padding 40px
        padding-top 10px
        h4.name
          font-weight 700
          margin-bottom 20px
          font-size 18px
        p.detail
          text-align left
          line-height 22px
          margin-top 20px
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
        center(500px)
        +below(768px)
          center(300px)
        list-style none
        display block
        background-color white
        margin-top 30px
        li.lunch
          div
            span
              color #2C6700
        li
          span(1)
          height 100px
          border-bottom 2px solid #f8f8f8
          text-align left
          padding-left 50px
          +below(768px)
            padding-left 10px
          time
            display inline-block
            color: #111;
            line-height 100px
            font-weight: bold;
            font-size: 32px;
            vertical-align: middle;
            width 30%
            +below(768px)
              font-size 20px
              width 20%
          div
            display inline-block
            width 65%
            +below(768px)
              width 75%
            text-align right
            vertical-align middle
            span
              color black
              line-height 28px
              font-size 20px
              +below(1200px)
                font-size 18px
            p
              color #999
              line-height 28px
              font-size 18px
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
    .ticket__tips
      font-size 20px
      margin 100px 0
      color #6E7A83
      line-height 25px

  footer
    span(1)
    color white
    vertical-align middle

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
      overlayStatus: false
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
