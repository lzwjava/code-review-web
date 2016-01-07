<template>
  <div class="modal-container absolute-center" @click="stop($event)">

    <div class="left-modal">

      <div class="belt">
        <button class="btn-cancel"
          @click="close">
          取消申请
        </button>
      </div>

    </div>

    <div class="right-modal">

      <form action="/" @submit="addOrder" v-show="!qrpay">
        <div class="form-line">
          <label>打赏费用</label>
          <div class="reward-input">
            <input v-model="reward"></input>元
          </div>
        </div>
        <div class="form-line">
          <input type="radio" name="pay" value="wechat" checked="checked" />微信支付
          <input type="radio" name="pay" value="alipay" />支付宝支付
        </div>
        <div class="form-line">
          <label class="form-label">项目 GitHub 地址</label>
          <input class="github-input" required v-model="gitHubUrl" placeholder="https://github.com/user/repo"></input>
        </div>
        <div class="form-line">
          <label class="form-label">Review 大致代码行数</label>
          <input required type="number" v-model="codeLines"></input>行
        </div>
        <div class="form-line remark-div">
          <label class="form-label">备注</label>
          <textarea v-model="remark"></textarea>
        </div>
        <button class="btn-common btn-blue confirm-btn">申请 Code Review</button>
      </form>

      <div class="pay-region" v-show="qrpay">

        <div class="pay-desc">
          <p class="title">扫一扫付款</p>
          <img :src="qrcode">
          <p class="amount"><span>¥</span> {{reward}}</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script type="text/javascript">
import serviceUrl from "../common/serviceUrl.js"
import util from '../common/util'
var debug = require('debug')('order-form');
module.exports = {
  data: function () {
    return {
      gitHubUrl: 'https://github.com/akring/octokit.swift',
      codeLines: 3000,
      remark: '麻烦了',
      reward: 8,
      qrpay: false,
      qrcode: ''
    };
  },
  props: {
    show: {
      twoWay: true
    },
    reviewerId: {}
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
        gitHubUrl: this.gitHubUrl,
        codeLines: this.codeLines,
        remark: this.remark,
        reviewerId: this.reviewerId
      }).then((resp) => {
        if (util.filterError(this, resp)) {
          var order = resp.data.result;
          debug(order);
          util.show(this, 'success', '申请成功, 请支付打赏额');
          this.$http.post(serviceUrl.ordersReward.replace(/:id/, order.orderId), {
            amount: this.reward * 100
          }).then((resp) => {
            debug(resp.data)
            this.qrpay = true;
            this.qrcode = resp.data.credential.alipay_qr;
            window.open(this.qrcode, '_blank');
          }, util.httpErrorFn(this))
        }
      }, util.httpErrorFn(this));
    }
  },
  created () {
    debug('reviewerId:' + this.reviewerId);
  }
};

</script>

<style lang="stylus">

.modal-container
  width 800px
  height 600px
  background-color #fff
  border-radius 2px
  box-shadow 0 2px 8px rgba(0, 0, 0, .33)
  transition all .3s ease
  font-family Helvetica, Arial, sans-serif

.left-modal
  width 55%
  height 100%
  float left
  background url('../img/love-program.png')
  background-size 100% 100%

.right-modal
  width 45%
  height 100%
  float left
  padding 20px

.btn-cancel
  float left
  color #fff
  margin-top 50px
  margin-left 50px
  font-size 20px
  line-height 32px

.btn-cancel:before
  content '×'
  font-size 30px

.form-line
  width 100%
  padding 10px 20px
  input
    padding 10px

.form-label
  display block
  margin-bottom 10px
  opacity 0.6
  font-size 14px
  color #282F31
  line-height 32px

.reward-input
  float right
  width 40%
  input
    width 80px
    text-align right

.github-input
  width 100%

.remark-div
  textarea
    width 100%
    height 130px
    padding 5px

.confirm-btn
  padding 15px
  margin 0 auto
  display block

.pay-region
  text-align center

.pay-desc
  width 200px
  margin 150px auto
  p.amount
    font-size 20px
    span
      color #33C96F
  img
    margin-top 20px
    margin-bottom 20px
    width 200px
    height 200px


</style>
