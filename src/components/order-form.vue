<template>
  <div class="modal-mask" v-show="show">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="left-modal">

          <div class="belt">
            <button class="btn-cancel"
              @click="show = false">
              取消申请
            </button>
          </div>

        </div>

        <div class="right-modal">
          <form action="/">
            <div class="form-line">
              <label>打赏费用</label>
              <input></input>
              元
            </div>
            <div class="form-line">
              <input type="radio" name="pay" value="wechat" checked="checked" />微信支付
              <input type="radio" name="pay" value="alipay" />支付宝支付
            </div>
            <div class="form-line">
              <label>项目 GitHub 地址</label>
              <input></input>
            </div>
            <div class="form-line">
              <label>Review 大致代码行数</label>
              <input type="number"></input>
            </div>
            <div class="form-line">
              <label>备注</label>
              <input></input>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

var debug = require('debug')('components');
module.exports = {
  data: function () {
    return {

    };
  },
  props: {
    show: {
      towWay: true
    }
  }
};

</script>

<style lang="stylus">

.modal-mask
  position fixed
  z-index 9998
  top 0
  left 0
  width 100%
  height 100%
  background-color rgba(0, 0, 0, .5)
  transition opacity .3s ease
  display table

.modal-wrapper
  display table-cell
  vertical-align middle

.modal-container
  width 800px
  height 600px  
  margin 0px auto
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

</style>
