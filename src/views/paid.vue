<template>
    <div class="main-container">
      <div class="paid-tips">
        打赏成功, 已将您的申请通知给了大神。大神处理申请后，将短信通知您，也可查看 <a href="./order.html">订单列表</a> 。
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
        }
    },
    computed: {

    },
    methods: {
    },
    created() {

    }
}

</script>


<style lang="stylus">

.paid-tips
  text-align center
  a
    text-decoration underline
    color #00f

</style>
