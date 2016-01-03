<template>
    <div class="reward-form absolute-center" @click="stop">

        <button type="button" class="close" @click="close">X</button>

        <div class="reviewer-region">
            <user-avatar :user="order.reviewer"></user-avatar>
            <p class="gray-text">“送人玫瑰，手有余香”<br>谢谢支持，您的打赏是作者的动力</p>
        </div>

        <form @submit="rewardSubmit" v-show="!qrpay">
            <div class="form-line">
              <input class="reward-input" v-model="reward" placeholder="￥5" type="number"></input>
            </div>
            <div class="form-line">
              <input type="radio" name="pay" value="wechat" checked="checked" />微信支付
              <input type="radio" name="pay" value="alipay" />支付宝支付
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

.absolute-center
    margin auto
    position absolute
    top 0
    left 0
    bottom 0
    right 0

.gray-text
    color gray

.reward-form
    background white
    width 350px
    height 450px
    .close
        float right
        margin 10px 10px 0 0
    .reviewer-region
        text-align  center
        margin-top 60px
        .avatar
            width 96px
            height 96px
        p
            margin-top 30px
    form
        margin-top 30px
        width 100%
        padding 0px 20px
        .reward-input
            height 55px
            width 100%
        .action
            margin-top 30px
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