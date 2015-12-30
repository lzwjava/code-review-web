<template>
  <div>
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
            <form action="/" @submit="addOrder">
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
          </div>
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
      gitHubUrl: 'https://github.com/lzwjava/Reveal-In-GitHub',
      codeLines: 0,
      remark: '麻烦了',
      reward: 8
    };
  },
  props: {
    show: {
      twoWay: true
    },
    reviewerId: String
  },
  methods: {
    addOrder (e) {
      e.preventDefault();
      debug('reviewerId:' + this.reviewerId);      
      this.$http.post(serviceUrl.ordersAdd, {
        gitHubUrl: this.gitHubUrl,
        codeLines: this.codeLines,
        remark: this.remark,
        reviewerId: this.reviewerId
      }).then((resp) => {
        if (util.filterError(this, resp)) {
          util.show(this, 'success', '申请成功, 请支付打赏额');
        }
      }, util.httpErrorFn(this));
    }
  },
  created () {
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

</style>
