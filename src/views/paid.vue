<template>
    <div class="main-container">
      <div class="paid-tips">
        <span v-if="type== 'order'">打赏成功, 已将您的申请通知给了大神。大神处理申请后，将短信通知您，也可查看 <a href="./order.html">订单列表</a> 。</span>
        <div v-if="type== 'event'">
          <div class="">
            支付成功，您已报名活动。感谢您的参与，我们交流会上见。另外可加下微信:
          </div>
          <img src="../img/event/event_qrcode.jpg" />
        </div>
        <div v-if="type== 'workshop'">
          <div class="">
            支付成功，您已报名成功。请加入研讨班微信群:
          </div>
          <img src="../img/workshop/workshop_qrcode.jpg" />
        </div>

      </div>
    </div>
</template>

<script type="text/javascript">

import util from '../common/util'
import serviceUrl from "../common/serviceUrl.js"
import MarkdownArea from "../components/markdown-area.vue"

var debug = require('debug')('paid');

export default {
    components: {
    },
    data () {
        return {
          type: 'order'
        }
    },
    computed: {
    },
    methods: {
    },
    created() {
      var params = util.getSearchParameters();
      if (params.type) {
        this.type = params.type;
      }
    }
}

</script>


<style lang="stylus">

.main-container
  height 600px

.paid-tips
  text-align center
  a
    text-decoration underline
    color #00f
  img
    width 300px
    margin-top 100px

</style>
