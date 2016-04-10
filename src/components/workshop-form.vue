<template >
  <div class="modal-container absolute-center" @click="stop($event)">
    <div class="belt">
      <button class="btn-cancel" @click="close">取消</button>
    </div>

    <div class="area-container">
          <div class="attend-area" v-show="mode =='attend'">
            <h2>报名须知</h2>
            <ul>
              <li>暂时只支持支付宝支付</li>
              <li>如果支付遇到问题，请联系报名页的咨询电话</li>
              <li>研讨班信息如有改动，将短信通知您，请确保当前登录账号的手机号 {{currentUser().mobilePhoneNumber }}可用</li>
            </ul>
            <button class="btn btn-blue btn-attend" @click="attend">确认报名</button>
          </div>

          <div class="pay-area" v-show="mode == 'pay'">
            <p>
              请按照提示完成支付
            </p>
          </div>
    </div>

  </div>

</template>

<style lang="stylus">

.modal-container
  width 300px
  height 420px
  background-color #FDFFFF
  border-radius 2px
  box-shadow 0 2px 8px rgba(0, 0, 0, .33)
  .belt
    height 50px
    background #f1f5f6
    margin-top 35px
    text-align right
    padding-right 30px
    .btn-cancel
      font-size 16px
      height 45px
      &:after
        content '×'
        font-size 24px
        margin-left 5px
  .area-container
    padding 20px
    .attend-area
      h2
        font-size 20px
      ul
        text-align left
        list-style-type disc
        padding-left 15px
        li
          margin 5px 0
          line-height 25px
      .btn-attend
      .btn-pay
        margin-top 30px
        padding 10px
    .pay-area
      p
        margin-top 100px

</style>

<script type="text/javascript">
import serviceUrl from '../common/serviceUrl'
import util from '../common/util'
import pingpp from '../common/pingpp-pc.js'
var debug = require('debug')('workshop-form');

export default {
  props: ['workshop', 'type'],
  data () {
    return {
      mode: 'attend'
    }
  },
  methods: {
    stop (e){
        e.stopPropagation();
    },
    close () {
      this.$parent.overlay = false;
    },
    currentUser() {
      return util.getLocalUser();
    },
    attend() {
      var user = util.getLocalUser();
      if (!user.username){
        util.show(this, 'error', '未登录，请登录之后再报名');
        return;
      }
      this.forwardPay();
    },
    forwardPay() {
      this.mode = 'pay';
      this.payWorkshop(this.workshop.workshopId);
    },
    payWorkshop(workshopId) {
      var params = {};
      if (this.type == 'part') {
        params.type = this.type
      }
      debug('type: %j', this.type)
      this.$http.post(serviceUrl.workshopPay.replace(/:id/, workshopId), params).then((resp) => {
        if (resp.data && resp.data.credential) {
          window.pingppPc.createPayment(resp.data, function (result, err) {
            if (err != null) {
              util.show(this, 'error', err)
            } else {
            }
          });
        } else {
          util.show(this, 'error', resp.data.error);
        }
      }, util.httpErrorFn(this))
    },
  },
  created () {

  },
  ready () {
    debug('ready');
    debug('type: %j', this.type)
  }
}

</script>
