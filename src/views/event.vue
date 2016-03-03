<template>
  <div>
    <section class="info">
      <div class="info__content"><img src="../img/event/logo.png" class="info__logo">
        <p class="info__subtitle"><span class="info__down">Code Review</span>第一次线下活动</p>
        <p class="info__date">2016年3月12日·北京 科技寺创业空间·北新桥店</p>
        <div class="info__btn"><a href="https://github.com/atConf" target="_blank">相关信息</a></div>
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
        </div>
        <div class="header__social">
          <div class="header__social__btn"><a href="http://weibo.com/atswift" target="_blank"><i class="fa fa-weibo"></i></a></div>
          <div class="header__social__btn"><a href="https://github.com/atConf/atswift" target="_blank"><i class="fa fa-github"></i></a></div>
        </div>
      </header>
    </section>
    <section id="intro" class="intro">
      <div class="intro__content">
        <h1>大会介绍</h1>
        <div class="intro__card"><img src="../img/event/intro1_red.png">
          <h3 class="intro__reason">非营利</h3>
          <p class="intro__detail">@Swift 是由 @Conf 团队组织的一场<b>非营利</b>的技术大会，所有收入全部用于大会本身支出，包括会场租赁、嘉宾差旅、参会者福利等等。</p>
        </div>
        <div class="intro__card"><img src="../img/event/intro2.png">
          <h3 class="intro__reason">开发者 to 开发者</h3>
          <p class="intro__detail">这是一场由开发者做给开发者的技术盛宴，我们和你一样是开发者，你喜欢的你想要的也同样是我们所追求的。</p>
        </div>
        <div class="intro__card"><img src="../img/event/intro3.png">
          <h3 class="intro__reason">高质量</h3>
          <p class="intro__detail">所有的演讲嘉宾和演讲内容都会经过严格筛选，保证大家听到的是纯技术干货。</p>
        </div>
      </div>
    </section>
    <section id="speaker" class="speaker">
      <h1>演讲嘉宾</h1>
      <div class="speaker__card r b">
        <div class="speaker__content">
          <h4 class="name">包涵卿</h4><a href="https://twitter.com/hankbao" target="_blank"><img src="../img/event/baohanqing.jpg"></a>
          <p class="detail">瀑布 IM 客户端技术负责人。前 PPTV 趣点项目 iOS 负责人，曾经独自开发 PPTV Mac 版。在 GitHub 和 Twitter 上的 ID 是 @hankbao.</p>
        </div>
      </div>
      <div class="speaker__card b">
        <div class="speaker__content">
          <h4 class="name">CHRIS EIDHOF</h4><a href="http://www.eidhof.nl/" target="_blank"><img src="../img/event/chris.jpg"></a>
          <p class="detail">Chris, 生活在德国柏林的荷兰开发者。他把大部分时间都花在开发 iOS 和 Mac 应用上，作品包括 <a href="http://decksetapp.com" target="_blank">Deckset</a> 和 <a href="http://www.getscenery.com" target="_blank">Scenery</a>. Chris 还创办了 <a href="http://www.uikonf.com" target="_blank">UIKonf</a> 和 <a href="http://www.objc.io" target="_blank">objc.io</a>. 此外，他还是一位作者，著有 <a href="http://www.objc.io/books/fpinswift" target="_blank">Functional Programming in Swift</a>, 目前正在编写 <a href="http://www.objc.io/books/" target="_blank">Advanced Swift</a>.</p>
        </div>
      </div>
      <div class="speaker__card b l">
        <div class="speaker__content">
          <h4 class="name">傅若愚</h4><a href="https://github.com/lingoer" target="_blank"><img src="../img/event/furuoyu.jpg"></a>
          <p class="detail">移动开发者，ThoughtWorks 高级咨询师/Tech Lead，SwiftyJSON 作者。业余喜读书，文史哲无所禁忌，爱美食与啤酒，凡酒约，从不拒绝，爱睡懒觉，周末从不在下午 2 点前起床。总之，是个充满缺点与怪癖的家伙。</p>
        </div>
      </div>
    </section>
    <section id="agenda" class="agenda">
      <div class="agenda__content">
        <h1>大会议程</h1>
        <h4>*暂定，后续会不断更新</h4>
        <ul class="agenda__list">
          <li>
            <time>08:30</time>
            <div><span>签到</span></div>
          </li>
          <li>
            <time>09:20</time>
            <div><span>开场</span>
              <p>梁杰</p>
            </div>
          </li>
          <li>
            <time>09:30</time>
            <div><span>Programming with Structs</span>
              <p>Chris Eidhof</p>
            </div>
          </li>
          <li>
            <time>10:20</time>
            <div><span>越过 OC 与 Swift 间的鸿沟</span>
              <p>傅若愚</p>
            </div>
          </li>
          <li>
            <time>11:10</time>
            <div><span>Swift Style</span>
              <p>Greg Heo</p>
            </div>
          </li>
          <li class="lunch">
            <time>12:00</time>
            <div><span>午餐</span></div>
          </li>
          <li>
            <time>13:20</time>
            <div><span>Swift 中的面向协议编程</span>
              <p>李洁信</p>
            </div>
          </li>
          <li>
            <time>14:00</time>
            <div><span>如何打造一个让人愉快的框架</span>
              <p>王巍</p>
            </div>
          </li>
          <li>
            <time>14:40</time>
            <div><span>Swift 函数式编程实践</span>
              <p>包涵卿</p>
            </div>
          </li>
          <li>
            <time>15:20</time>
            <div><span>茶歇</span></div>
          </li>
          <li>
            <time>15:50</time>
            <div><span>Swift，改善既有代码的设计</span>
              <p>翁阳</p>
            </div>
          </li>
          <li>
            <time>16:30</time>
            <div><span>Faster App，用 Swift 打造一款流畅的 App</span>
              <p>周楷雯</p>
            </div>
          </li>
          <li>
            <time>17:30</time>
            <div><span>结束</span></div>
          </li>
        </ul>
      </div>
    </section>

    <section id="ticket" class="ticket">
      <button type="button" name="button" @click="showAttend">我要报名</button>
    </section>

    <section class="map">
      <div class="map__content">
        <h1>会场位置</h1>
        <h4>北航新主楼·会议中心</h4>
        <div id="map__container"></div>
      </div>
    </section>

    <overlay :overlay.sync="overlayStatus">
      <event-form :event="event"></event-form>
    </overlay>
  </div>
</template>

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
      this.$http.get(serviceUrl.userEvent.replace(/:id/, eventId))
       .then((resp) => {

       }, util.httpErrorFn(this));
    }
  }
};

</script>


<style lang="stylus">
@import '../../node_modules/jeet/stylus/jeet'
@import '../../node_modules/rupture/rupture/index.styl'

$font-main = "lato", 'Microsoft YaHei', "微软雅黑", "STXihei", "华文细黑", "sans-serif";

*
  font-family $font-main
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
  .info
    span(1)

    letter-spacing 3px
    background-image url("../img/event/bg_bw.jpg")
    height 700px
    background-attachment fixed
    background-size contain
    background-position 0 0
    text-align center
    font-size 2rem
    +below(500px)
      font-size 1rem
    color white
    .info__content
      width 60rem
      +below(500px)
        width 30rem
        margin-left -15rem
        margin-top -10rem
      height 30rem
      position absolute
      top 50%
      left 50%
      margin-left -30rem
      margin-top -15rem
    .info__content__qr
      width 60rem
      +below(500px)
        width 26rem
        margin-left -13rem
        margin-top -15rem
      height 35rem
      overflow auto
      position absolute
      top 50%
      left 50%
      margin-left -30rem
      margin-top -20rem
    .info__logo
      +below(500px)
        height (6.5*0.618)rem
        width (24*0.618)rem
      height 6.5rem
      width 24rem

      text-align center
      margin-bottom 2rem
    img.qrcode
      center(20rem)
      margin-top 1rem
      margin-bottom 4rem
    img.vip
      border 10px groove gold
    .info__subtitle
      letter-spacing 2px
      font-size 5rem
      +below(500px)
        font-size 2rem
      .info__down
        font-family arial
        font-weight normal
    .info__btn
      padding-top 1rem
      a
        cursor pointer
        text-decoration none
        background-color #5399fc
        color white
        display inline-block
        line-height 6rem
        vertical-align middle
        width 36rem
        +below(500px)
          width 20rem
        height 6rem
        border-radius 25rem
        font-size 3rem
        &:hover
          color white
          background-color #64a3fc

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

    .header__social
      span(0.22, offset: 0.07)
      +below(1024px)
        span(0.3)
      +below(500px)
        span(0.6)
      height 4rem
      .header__social__btn
        col(1/5)
        padding 1rem
        width 3rem
        text-align center
        a
          cursor pointer
          text-decoration none
          color #4d4d4d
          font-size 1.9rem
          &:hover
            color #5399fc
            text-decoration none
          i
            font-size 2rem
          img
            width 2rem

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
    .speaker__card
      span(1/3)
      +below(768px)
        span(1/2)
      +below(500px)
        span(1)
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
        p.detail
          text-align left
          line-height 2.2rem
          margin-top 2rem
      img
        width 152px
        height 152px
        border-radius 117px

  .intro
    span(1)
    color #34495e
    background-color #f8f8f8
    div.intro__content
      layout1()
      +below(1200px)
        layout1_sm()
    h1
      center(40rem)
      margin-top 6rem
      margin-bottom 3rem
      font-weight bold
      text-align center
    .intro__card
      span(1/3)
      +below(500px)
        span(1)
      padding 2rem
      img
        width 40%
      h3.intro__reason
        margin-bottom 2rem
      p.intro__detail
        margin-top 2rem
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
    h1
      center(50rem)
      margin-top 6rem
      margin-bottom 2rem
      font-weight bold
      text-align center
    h4
      center(10rem)
      border solid 1px #FB7B4E
      border-radius 4px
      font-size 1.5rem
      text-align center
      margin-bottom 1rem
      color #FB7B4E
      .number
        font-weight 700
        color #FB7B4E
        font-family "Constantia" "Georgia"
        font-size 22px
        font-style italic

    p
      span(0.6, offset:0.2)
      // FIXME the jeet doesn't offer a way to change right offset
      margin-right: 20%
      +below(500px)
        span(1)
    .blank
      margin-bottom 3rem
    .hand
      center(10rem)
      img
        width 100%
    ul
      span(0.6, offset:0.2)
      +below(500px)
        span(1)
        text-align left
      line-height 2rem
      font-size 1.6rem
      text-align left
    .ticket__btn
      span(1)
      text-align center
      margin-top 1rem
      margin-bottom 5rem
      a
        cursor pointer
        text-decoration none
        background-color #5399fc
        color white
        display inline-block
        vertical-align middle
        line-height 6rem
        width 36rem
        +below(500px)
          width 25rem
        height 6rem
        border-radius 25rem
        text-align center
        font-size 3rem
        &:hover
          color white
          background-color #64a3fc
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
      height 40rem
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
