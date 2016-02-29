<template>
  <section class="reset-password" @click="stop($event)">
    <button type="button" class="cancel" @click="cancel"></button>
    <h2>{{actionTitle}}密码</h2>
    <div class="form">
      <form v-show="mode == 'request'" v-on:submit.prevent="requestReset">
        <ul class="row">
          <li>
            <input type="text" class="phone" v-model="phone" placeholder="手机号码" required>
            <span class="icon-Phone icon"></span>
          </li>
        </ul>
        <button class="btn-send" type="submit">发送验证码</button>
      </form>

      <form v-show="mode == 'reset'" v-on:submit.prevent="reset">
        <ul class="row">
          <li>
            <input type="text" v-model="smsCode" placeholder="验证码" required>
            <span class="icon-Verify icon"></span>
          </li>

          <li>
            <input type="password"  class="password" v-model="password" placeholder="密码" required>
            <span class="icon-Password icon"></span>
          </li>
        </ul>

        <button class="btn-reset" type="submit">{{actionTitle}}密码</button>
      </form>

    </div>
  </section>
</template>

<style lang="stylus">
import "../font/iconfont.css"

blue = #1CB2EF
green = #33C96F

.reset-password
  background white
  width 500px
  border-radius 3px
  height 525px
  padding 50px
  box-shadow 0px 13px 21px 7px rgba(0,0,0,.1)
  -webkit-box-shadow 0px 13px 21px 7px rgba(0,0,0,.1)
  position absolute
  left 50%
  top 50%
  margin -250px 0 0 -250px
  .cancel
    position absolute
    right 20px
    top 20px
  p
    font-size 0.8rem
    text-align center
    strong
      color blue
  h2
    font-size 1.5rem
    text-align center
  .form
    border-top 1px solid #E9EAEC
    padding 30px 0 10px 0
    margin-top 20px
    p
      color blue
      margin-bottom 20px
    button
      width 100%
      height 55px
      color white
      font-size 1rem
      text-align center
      line-height 55px
      background green
      border-radius 3px
      -webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
      box-shaodw 0px 1px 0px rgba(255,255,255,0.15) inset,0px 1px 2px rgba(0,0,0,0.15)
      border 1px solid #31B766
      &.btn-send
        margin-top 100px
  ul
    width 100%
    border-radius 3px
    margin-top 100px
    li
      height 57px
      margin-bottom 10px
    input
      width 100%
      height 55px
      margin-top 1px
      border 1px solid rgba(40,47,49,.3)
      outline none
      font-size 14px
      text-indent 53px
      &:focus
        border 1px solid #1CB2EF
        + .icon
          color #08B1F6
          opacity 1

</style>

<script type="text/javascript">

var debug = require('debug')('reset-password');
import serviceUrl from '../common/serviceUrl';
import util from '../common/util';
import md5 from 'blueimp-md5'

  export default {
    components: {

    },
    props: ['action'],
    data () {
      return {
        phone:'',
        password: '',
        mode: 'request',
        smsCode: ''
      }
    },
    computed: {
      actionTitle () {
        if (this.action == 'change') {
          return '修改';
        } else {
          return '重置';
        }
      }
    },
    methods: {
      cancel () {
				this.$parent.overlay = false;
			},
      stop (e){
				e.stopPropagation();
			},
      requestReset() {
        this.$http.post(serviceUrl.requestResetPassword, {
          mobilePhoneNumber: this.phone
        }).then((resp) => {
          if (util.filterError(this, resp)) {
            this.mode = 'reset';
          }
        }, util.httpErrorFn(this))
      },
      reset() {
        this.$http.post(serviceUrl.resetPassword, {
          mobilePhoneNumber: this.phone,
          smsCode: this.smsCode,
          password: md5(this.password)
        }).then((resp) => {
          debug('resp: %j', resp.data);
          if (util.filterError(this, resp)) {
            var user = resp.data.result;
            util.updateNavUser(this, user);
            util.show(this, 'success', this.actionTitle + '成功');
            this.cancel();
          }
        }, util.httpErrorFn(this));
      }
    },
    created() {
    }

  }

</script>
