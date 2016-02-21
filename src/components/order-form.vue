<template>
  <div class="modal-container absolute-center" @click="stop($event)">

    <div class="modal">
      <form action="/" @submit="addOrder" v-show="!qrpay">
        <div class="form-line">
          <label>打赏费用</label>
          <input v-model="reward" class="reward-input"></input>
          <span>元</span>
        </div>
        <!-- <div class="form-line row">
          <input type="radio" name="pay" value="wechat" v-model="payType" />
          <label>微信支付</label>
          <input type="radio" name="pay" value="alipay" v-model="payType" />
          <label>支付宝支付</label>
        </div> -->
        <div class="form-line">
          <label class="form-label">项目 GitHub 地址</label>
          <div class="github-input">
            <span>github.com / </span><input  required v-model="gitHubUrl" placeholder="user / repo"></input>
          </div>
        </div>
        <div class="form-line">
          <label class="form-label">Review 大致代码行数</label>
          <input required type="number" v-model="codeLines" class="code-line"></input>行
        </div>
        <div class="form-line remark-div">
          <label class="form-label">问题简介</label>
          <textarea v-model="remark"></textarea>
          <p>请简要描述您的问题</p>
        </div>
        <div style="text-align: center">
          <button class="confirm-btn">申请 Code Review</button>
        </div>
      </form>

      <div class="pay-region" v-show="qrpay">

          <div class="pay-desc">
            <p class="title">打赏</p>
            <p class="tips">您的申请已创建，请按照支付提示完成打赏</p>
            <p class="amount"><span>¥</span> {{reward}}</p>
          </div>
      </div>
    </div>

    <div class="modal bg">
      <div class="belt">
        <button class="btn-cancel" @click="close">取消</button>
      </div>
    </div>

  </div>


</template>

<script type="text/javascript">
import serviceUrl from "../common/serviceUrl.js"
import util from '../common/util'
import Loading from '../components/loading.vue'
import pingpp from '../common/pingpp-pc.js'

var debug = require('debug')('order-form');
module.exports = {
  components: {
    loading : Loading
  },
  data: function () {
    return {
      gitHubUrl: '',
      codeLines: 0,
      remark: '',
      reward: 20,
      qrpay: false,
      qrcode: '',
      payType: 'alipay'
    };
  },
  props: {
    show: {
      twoWay: true
    },
    mode: {
      default: 'create'
    },
    order: {
      default: null
    },
    reviewerId: {
      default: null
    }
  },
  methods: {
    stop (e){
        e.stopPropagation();
    },
    close () {
      this.$parent.overlay = false;
    },
    addOrder (e) {
      e.preventDefault();
      this.$http.post(serviceUrl.ordersAdd, {
        gitHubUrl: 'https://github.com/'+this.gitHubUrl,
        codeLines: this.codeLines,
        remark: this.remark,
        reviewerId: this.reviewerId,
        amount: this.reward * 100,
      }).then((resp) => {
        if (util.filterError(this, resp)) {
          var order = resp.data.result;
          debug(order);
          util.show(this, 'success', '申请成功, 请支付打赏额');
          this.qrpay = true;
          this.payOrder(order);
        }
      }, util.httpErrorFn(this));
    },
    payOrder (order) {
      this.$http.post(serviceUrl.ordersReward.replace(/:id/, order.orderId), {
        amount: order.amount * 100
      }).then((resp) => {
        debug(resp.data)
        window.pingppPc.createPayment(resp.data, function (result, err) {
          if (err != null) {
            util.show(this, 'error', err)
          } else {

          }
        });
        // this.qrcode = resp.data.credential.alipay_qr;
        // this.$broadcast('loaded');
        //window.open(this.qrcode, '_blank');
      }, util.httpErrorFn(this))
    }
  },
  created () {
    if (typeof this.mode !=='undefined' && this.mode == 'pay') {
      this.qrpay = true;
      if(this.order.orderId){
        this.payOrder(this.order);
      }
    }
  },
  ready() {
  },
  attached () {
    debug('attached');
  }
};

</script>

<style lang="stylus">
@import '../stylus/variables.styl';
.modal-container
  width 870px
  height 600px
  display flex
  flex-deriction row
  background-color #FDFFFF
  border-radius 2px
  box-shadow 0 2px 8px rgba(0, 0, 0, .33)
  transition all .3s ease

  .modal
    flex 1 1
    position relative
    &.bg
      background url('../img/love-program.jpg')
      background-size 100% 100%
    .belt
      height 50px
      background rgba(0,0,0,.11)
      margin-top 35px
      text-align right
      padding-right 30px
      .btn-cancel
        color #fff
        font-size 1rem
        height 45px
        &:after
          content '×'
          font-size 24px
          margin-left 5px
    form
      padding 35px 0
    .form-line
      padding 10px 45px
      &.row
        height 50px
        line-height 30px
        label
          vertical-align super
          margin-right 10px
        input
          height 100%
      &:first-child
        height 50px
        background #F1F5F6
        line-height 30px
        text-align right
        label
          float left
        .reward-input
          width 50px
          text-align right
          padding-right 5px
          height 100%
      input
        outline none
        border 1px solid rgba(40,47,49,.3)
        height 40px
        font-size 1rem
        color rgba(40,47,49,.8)
      .code-line
        width 65px
        text-indent: 10px;

    .form-label
      display block
      opacity 0.6
      font-size 14px
      color textColor
      line-height 25px

    .github-input
      line-height 40px
      height 40px
      span
        opacity .8
      input
        width 240px
        text-indent 10px
        font-family Raleway

    .remark-div
      textarea
        width 100%
        resize none
        height 164px
        padding 10px
        border 1px solid rgba(40,47,49,.3)
        color rgba(40,47,49,.8)
        font-size 1rem
      p
        font-size 12px
        opacity .8

    .confirm-btn
      btn(blue, white, 1,220,50)

    .pay-region
      text-align center

    .pay-desc
      width 200px
      margin 150px auto
      p.title
        font-size 25px
      p.amount
        font-size 20px
        span
          color #33C96F
      p.tips
        margin 100px 0px
        line-height 150%
      img
        margin-top 20px
        margin-bottom 20px
        width 200px
        height 200px


</style>
