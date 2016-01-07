<template>
    <div class="reward-form absolute-center" @click="stop">

        <button type="button" class="close" @click="close">×</button>

        <div class="reviewer-region">
            <user-avatar :user="order.reviewer"></user-avatar>
            <p class="gray-text">“送人玫瑰，手有余香”</p>
            <p class="gray-text">谢谢支持，您的打赏是作者的动力</p>
        </div>

        <form @submit="rewardSubmit" v-show="!qrpay">
            <div class="form-line">
              <input class="reward-input" v-model="reward" placeholder="￥5" type="number" min="1"></input>
            </div>
            <div class="form-line">
              <input class="pay-radio" type="radio" name="pay" value="wechat" checked="checked" />
              <label>微信支付</label>
              <input class="pay-radio" type="radio" name="pay" value="alipay" />
              <label>支付宝支付</label>
            </div>
            <div class="action">
                <button class="btn btn-blue">立即打赏</button>
                <p class="gray-text">本网站不收取任何费用，打赏金额全部支付给大神</p>
            </div>
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
import UserAvatar from "../components/user-avatar.vue"
import util from '../common/util'
var debug = require('debug')('reward-form');

export default {
    components: {
        'user-avatar': UserAvatar
    },
    props: ['order'],
    data () {
        return {
            qrpay: false,
            qrcode: '',
            reward: ''
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
                this.$http.post(serviceUrl.ordersReward.replace(/:id/, this.order.orderId),{
                  amount: this.reward * 100
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
@import "../stylus/variables.styl"

.gray-text
    color gray

.reward-form
    background white
    width 350px
    height 480px
    .close
        float right
        margin 10px 10px 0 0
        font-size 22px
        line-height 15px
    .reviewer-region
        text-align  center
        margin-top 50px
        .avatar
            width 96px
            height 96px
            margin-bottom 20px
        p
            margin-top 10px
    form
        margin-top 50px
        width 100%
        padding 0px 20px
        .form-line
            margin 10px 0
        .reward-input
            height 55px
            width 100%
            font-size 22px
            border 1px solid rgba(40,47,49,.3)
        .pay-radio
            width 40px
            height 40px
            margin auto 0
            -webkit-appearance none
            border none
            outline none
            appearance none
            &:before
                content url('../other/radio.svg')
            &:checked:before
                content url('../other/radio-checked.svg')
        label
            position relative
            bottom 12px
        .action
            margin-top 20px
            text-align center
            button
                width 90%
                padding 10px 50px
            p
                font-size 12px
                margin-top 10px

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
