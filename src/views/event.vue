<template>
  <div>
    <section class="info">
      <div class="info__content">
        <p class="info__subtitle"><span class="info__down">Code Review</span><br>第一次线下活动</p>
        <p class="info__detail">
          亲爱的朋友们，我们一起相约科技寺，参与、分享并交流代码。<br>
          你可以带着问题来，这些问题可以是和本次大会内容相关的，也可以是无关的。<br>
          比如，你平时写代码碰到的问题，想知道如何快速提高等等。 Ask me anything。
        </p>
      </div>
      <header class="header">
        <div class="sm_nav">
          <div class="header__btn"><a><i class="fa fa-bars"></i></a></div>
          <ul class="sm_btns">
            <li><a href="#intro">大会介绍</a></li>
            <li><a href="#speaker">演讲嘉宾</a></li>
            <li><a href="#agenda">大会议程</a></li>
          </ul>
        </div>
        <div class="header__nav">
          <div class="header__btn"><a href="#intro">大会介绍</a></div>
          <div class="header__btn"><a href="#speaker">演讲嘉宾</a></div>
          <div class="header__btn"><a href="#agenda">大会议程</a></div>
          <div class="header__btn"><a href="#ticket">报名参加</a></div>
          <div class="header__btn"><a href="#map">会场位置</a></div>
        </div>
      </header>
    </section>
    <section id="intro" class="intro">
      <div class="intro__content">
        <h1>活动详情</h1>
        <div class="intro__card">
          <h3 class="intro__reason">时间</h3>
          <p class="intro__detail">1:30pm - 6pm</p>
        </div>
        <div class="intro__card">
          <h3 class="intro__reason">地点</h3>
          <p class="intro__detail">科技寺创业空间<br>北新桥店</p>
        </div>
        <div class="intro__card">
          <h3 class="intro__reason">费用</h3>
          <p class="intro__detail">¥288</p>
        </div>
      </div>
    </section>
    <section id="speaker" class="speaker">
      <h1>演讲嘉宾</h1>
       <div class="speaker-list">
        <div class="speaker__card r b">
          <div class="speaker__content">
            <h4 class="name">陈宜龙</h4>
            <img src="../img/event/ios_programmer.jpg">
            <p class="detail">你可能不熟悉陈宜龙，但不会不知道 <a href="http://weibo.com/u/1692391497" target="_blank">iOS 程序犭袁</a>。
              热爱分享，崇尚开源精神，对新技术有狂热的追求。
              著有《iOS 9 适配系列教程》、《iOS 面试题集锦》、《CYLTabBarController》等 <a href="https://github.com/ChenYilong" target="_blank">教程和框架</a>，均获得数千 Star。</p>
          </div>
        </div>
        <div class="speaker__card b">
          <div class="speaker__content">
            <h4 class="name">臧其龙</h4>
            <img src="../img/event/yeguchen.jpg">
            <p class="detail">微博 <a href="http://weibo.com/u/1438670852" target="_blank">@叶孤城</a>。现为探探 iOS 客户端开发，
              曾就职于 Camera360、流利说。对动画交互，图像，视频处理颇有心得。
              热爱分享，热爱 iOS 圈子，为大家提供了 <a href="http://reviewcode.cn/">Code Review 平台</a>。</p>
          </div>
        </div>
        <div class="speaker__card b l">
          <div class="speaker__content">
            <h4 class="name">张延瑞</h4>
            <img src="../img/event/yanrui.jpg">
            <p class="detail">微博 <a href="http://weibo.com/u/1764965604">@张延瑞</a> 。耕耘于 iOS 开发多年。就职于 Camera360、乐视。
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
        <div class="speaker__card b">
          <div class="speaker__content">
            <h4 class="name">李智维</h4>
            <img src="../img/event/lzwjava_avatar.jpg">
            <p class="detail">微博 <a href="http://weibo.com/zhiweilee" target="_blank">@lzwjava</a>。95 年出生的他，初中接触了编程，大二辍学加入 LeanCloud，20 岁已能月入过万。他并未止步，辞职创业搞起了 <a href="http://reviewcode.cn/">Code Review 平台</a>，负责大部分的技术开发。业余时间也开源了一些 <a href="https://github.com/lzwjava">项目</a>。</p>
          </div>
        </div>

      </div>
      <!-- <div class="speaker-list">

      </div> -->

    </section>
    <section id="agenda" class="agenda">
      <div class="agenda__content">
        <h1>大会议程</h1>
        <h4>*暂定，后续会不断更新</h4>
        <ul class="agenda__list">
          <li>
            <time>13:10</time>
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
            <time>14:30</time>
            <div>
              <span>IM 的那些事——XMPP、Socket、SDK(20min)</span><br>
              <span>Ask Me Anything(20min)</span>
              <p>陈宜龙</p>
            </div>
          </li>

          <li>
            <time>15:20</time>
            <div><span>茶歇</span></div>
          </li>

          <li>
            <time>15:40</time>
            <div>
              <span>我这一路的选择和成长(20min)</span><br>
              <span>Ask Me Anything(20min)</span>
              <p>李智维</p>
            </div>
          </li>

          <li>
            <time>16:30</time>
            <div>
              <span>分组交流</span>
              <p>各嘉宾和参会者分组交流</p>
            </div>
          </li>

          <li>
            <time>18:00</time>
            <div><span>结束</span></div>
          </li>
        </ul>
      </div>
    </section>

    <section id="ticket" class="ticket">
      <div class="ticket__content">
        <h1>报名参加</h1>
        <img src="../img/event/ticket.png"/>
        <p>参会门票</p>
        <p class="price">¥{{event.amount | moneyAsYuan}}</p>
        <button class="btn-attend" @click="showAttend">我要报名</button>
      </div>

    </section>

    <section id="map" class="map">
      <div class="map__content">
        <h1>会场位置</h1>
        <h4>北航新主楼·会议中心</h4>
        <div id="map__container">
          <img src="../img/map.jpg" alt="">
        </div>
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

*
  -webkit-text-size-adjust none
  -webkit-transform-origin-x 0

html
  font-size 62.5%
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
  font-size 1.6rem
  background #fff
  .info
    span(1)
    letter-spacing 3px
    position relative
    background url("../img/event/info_bg.jpg") no-repeat
    height 700px
    background-size contain
    background-position center
    text-align center
    font-size 2rem
    +below(500px)
      font-size 1rem
    color #282F31
    .info__content
      width 60rem
      +below(500px)
        width 30rem
        margin-left -15rem
        margin-top -10rem
        top 45%
      height 30rem
      position absolute
      top 50%
      left 50%
      margin-left -30rem
      margin-top -15rem
    .info__subtitle
      letter-spacing 2px
      font-size 5rem
      margin-bottom 2rem
      line-height 6rem
      +below(500px)
        font-size 3rem
        line-height 3.5rem
      .info__down
        font-family arial
        font-weight normal
    .info__detail
      margin-top 30px
      font-size 1.6rem
      color #6E7A83
      line-height 3rem
      +below(500px)
        font-size 1.4rem
        line-height 2rem
        margin 0 1rem

  .header
    span(1)
    background-color white
    position absolute
    bottom 0
    box-shadow 0px 0px 0.5rem rgba(0, 0, 0, 0.3)
    padding 1rem
    height 6rem

    .sm_nav
      span(0.2, offset: 0.1)
      display none
      +below(500px)
        display inline-block
      height 4rem
      vertical-align middle
      .header__btn
        span(1/6)
        padding-top 0.9rem
        text-align center
        a
          cursor pointer
          text-decoration none
          color #4d4d4d
          font-size 2rem
          &:hover
            color #5399fc
            text-decoration none
      ul
        span(1)
        display none
        box-sizing border-box
        text-align left
        position absolute
        bottom 6rem
        left 0
        list-style-type none
        margin 0
        padding-left 4rem
        padding-top 0.5rem
        padding-bottom 0.5rem
        height 21rem
        background white
        border-bottom solid 1px #ccc
        border-top solid 1px #ccc
        li
          span(0.8)
          padding-top 0.5rem
          padding-bottom 0.5rem
          line-height 3rem
          vertical-align middle
          height 4rem
          a
            font-size 1.6rem

    .header__nav
      span(0.42, offset:0.29)
      +below(1024px)
        span(0.6, offset:0.1)
      +below(500px)
        display none
      height 4rem
      .header__btn
        span(1/5)
        padding-top 0.8rem
        text-align center
        a
          cursor pointer
          text-decoration none
          color #4d4d4d
          font-size 1.6rem
          &:hover
            color #5399fc
            text-decoration none
      .highlight
        padding-top 0.5rem
        a
          background-color #5399fc
          color white
          display inline-block
          padding 0.5rem
          width 14rem
          border-radius 1.6rem
          &:hover
            color white
            background-color #64a3fc
  .speaker
    layout1()
    +below(1200px)
      layout1_sm()
    color #34495e
    h1
      center(30rem)
      margin-top 6rem
      margin-bottom 3rem
      font-weight bold
      text-align center
    // .speaker-list
    //   display flex
    //   display -webkit-flex
    //   justify-content center
    //   &:before, &:after
    //     content " "
    //     display table
    //   &:after
    //     clear: both
    .speaker__card
      span(1/3)
      +below(768px)
        span(1/2)
      +below(500px)
        span(1)
      height 500px
      padding 1rem
      .speaker__content
        span(1)
        +below(500px)
          padding 1rem
        padding 4rem
        padding-top 1rem
        h4.name
          font-weight 700
          margin-bottom 2rem
          font-size 18px
        p.detail
          text-align left
          line-height 2.2rem
          margin-top 2rem
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
      center(30rem)
      margin-top 6rem
      margin-bottom 3rem
      font-weight 300
      text-align center
      font-size 36px
      height 4.5rem
      color #1CB2EF
      background-image url("../img/event/intro_bg.png")
      background-repeat no-repeat
      background-position center bottom
    .intro__card
      span(1/3)
      +below(500px)
        span(1)
      padding 2rem
      h3.intro__reason
        margin-bottom 2rem
        font-size 20px
        color #E24B47
        line-height 40px
      p.intro__detail
        margin-top 2rem
        line-height 25px
  .agenda
    span(1)
    color #34495e
    background-color #f8f8f8
    padding-bottom 5rem
    div.agenda__content
      layout2()
      +below(1200px)
        layout2_sm()
      h1
        center(30rem)
        margin-top 6rem
        margin-bottom 3rem
        font-weight bold
        text-align center
      .agenda__list
        center(50rem)
        +below(768px)
          center(30rem)
        list-style none
        display block
        background-color white
        margin-top 3rem
        li.lottery
          div
            span
              color red
        li.lunch
          div
            span
              color #2C6700
        li
          span(1)
          height 10rem
          border-bottom 2px solid #f8f8f8
          text-align left
          padding-left 5rem
          +below(768px)
            padding-left 1rem
          time
            display inline-block
            color: #111;
            line-height 10rem
            font-weight: bold;
            font-size: 3.2rem;
            vertical-align: middle;
            width 30%
            +below(768px)
              font-size 2rem
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
              line-height 2rem
              font-size 2rem
              +below(1200px)
                font-size 1.8rem
            p
              color #999
              line-height 2rem
              font-size 1.8rem
  .ticket
    layout2()
    +below(1200px)
      layout2_sm()
    color #34495e
    text-align left
    letter-spacing 1px
    .ticket__content
      text-align center
      img
        +below(768px)
          width 80%
      h1
        center(40rem)
        margin-top 6rem
        margin-bottom 3rem
        font-weight bold
        text-align center
      .price
        overflow visible
        padding 0
        color #d73940
        font-size 20px
  .map
    span(1)
    color #34495e
    background-color #f8f8f8
    padding-bottom 6rem
    div.map__content
      layout2()
      +below(1200px)
        layout2_sm()
    div#map__container
      center(120rem)
      margin-top 3rem
      background-size contain
      background-image url('../img/map.jpg')
      img
        width 100%
    h1
      center(40rem)
      margin-top 6rem
      margin-bottom 3rem
      font-weight bold
      text-align center
  footer
    span(1)
    background-color black
    color white
    padding 2rem
    vertical-align middle
    div.main
      span(0.6, offset:0.2)
      +below(1200px)
        span(0.8, offset:0.1)
      +below(500px)
        span(1)
      div
        span(1/5)
        a
          color #aaa
          text-decoration none
      div.long
        span(2/5)

.disabled {
  cursor: not-allowed;
  opacity: .65;
}

</style>


<script type="text/javascript">

import util from '../common/util'
import serviceUrl from '../common/serviceUrl'
import Loading from '../components/loading.vue'
import EventForm from '../components/event-form.vue'
import Overlay from '../components/overlay.vue'

var debug = require('debug')('event');

module.exports = {
  components: {
    'event-form': EventForm,
    overlay: Overlay
  },
  data: function() {
    return {
      event:{},
      overlayStatus: false
    };
  },
  methods: {
    showAttend() {
      var user = util.getLocalUser();
      if (!user.username) {
        // show 登录 form
      } else {
        this.overlayStatus = true;
      }
    }
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
    this.$http.get(serviceUrl.eventGet.replace(/:id/, eventId))
      .then((resp)=> {
        if (util.filterError(this, resp)) {
          this.event = resp.data.result;
          debug('event: %j', this.event);
        }
      }, util.httpErrorFn(this));
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
