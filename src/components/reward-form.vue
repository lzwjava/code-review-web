<template>
    <div class="reward-form" @click="stop">

        <button type="button" class="close" @click="close">X</button>

        <form @submit="rewardSubmit" v-show="!qrpay">
            <div class="form-line">
              <label>打赏费用</label>
              <div class="reward-input">
                <input v-model="reward"></input>元
              </div>
              <div class="form-line">
                <input type="radio" name="pay" value="wechat" checked="checked" />微信支付
                <input type="radio" name="pay" value="alipay" />支付宝支付
              </div>
            </div>
            <button class="btn btn-green">打赏</button>
        </form>

        <div class="pay-region" v-show="qrpay">

          <div class="pay-desc">
            <p class="title">扫一扫付款</p>
            <img :src="qrcode">
            <p class="amount"><span>¥</span> {{reward}}</p>
          </div>
        </div>

    </div>
</template>

<script type="text/javascript">

import serviceUrl from "../common/serviceUrl.js"
import util from '../common/util'
var debug = require('debug')('reward-form');

export default {
    props: ['order'],
    data () {
        return {
            qrpay: false,
            qrcode: '',
            reward: 1
        }
    },
    methods: {
        stop (e) {
            e.stopPropagation();
        },
        close () {
            this.$parent.overlay = false;
        },
        rewardSubmit (e) {
            debug('rewardSubmit');
            e.preventDefault();
            var user = util.getLocalUser()
            debug('user: %j', user);
            if (!user.username) {
                alert('弹出注册 form ')
            } else {
                this.$http.post(serviceUrl.ordersReward, {
                  orderId:this.order.orderId,
                  amount: this.reward * 1000
                }).then((resp) => {
                    if (resp.data && resp.data.credential) {
                        debug('%j', resp.data)
                        this.qrpay = true;
                        this.qrcode = resp.data.credential.alipay_qr;
                        window.open(this.qrcode, '_blank');
                    } else {
                        util.show(this, 'error', resp.data.error);
                    }
                }, util.httpErrorFn(this))
            }
        }
    }
}

</script>

<style lang="stylus">

.reward-form
    background white
    width 300px
    height 300px
    position absolute
    left 50%
    top 50%
    margin-left -150px
    margin-top -150px

.pay-region
  text-align center  

.pay-desc
  width 200px
  margin 10px auto
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