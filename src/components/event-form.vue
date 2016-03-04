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
              <li>报名后如果不能立刻支付，可以再次点击“我要报名”完成支付</li>
              <li>大会信息如有改动，将短信通知您，请确保当前登录账号的手机号可用</li>
            </ul>
            <button v-if="event.status == 'none'" class="btn btn-blue btn-attend" @click="attend">确认报名</button>

            <button v-if="event.status == 'attended'" class="btn btn-blue btn-pay" @click="forwardPay">完成支付</button>
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
var debug = require('debug')('event-form');

export default {
  props: ['event'],
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
    attend() {
      var user = util.getLocalUser();
      if (!user.username){
        util.show(this, 'error', '未登录，请登录之后再报名');
        return;
      }
      this.$http.post(serviceUrl.eventAttend.replace(/:id/, this.event.eventId))
       .then((resp) => {
         if (util.filterError(this, resp)) {
           this.forwardPay();
         }
       }, util.httpErrorFn(this))
    },
    forwardPay() {
      this.mode = 'pay';
      this.payEvent(this.event.eventId);
    },
    payEvent(eventId) {
      this.$http.post(serviceUrl.attendancePay.replace(/:id/, eventId)).then((resp) => {
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
  }
}

</script>
