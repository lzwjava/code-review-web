<template>
    <div class="main-container">
        <div class="header-area">
            <h1 class="title">{{order.review.title}}</h1>
            <div class="intro">
                <img src="../img/icon/clock.png">
                <span class="review-time">{{order.review.created}}</span>
                <img src="../img/icon/reward.png">
                <span>54</span>
                <img src="../img/icon/small-pen.png">
                <span><a :href="'./reviewer.html?id=' + order.reviewer.id">{{order.reviewer.username}}</a></span>
             </div>
        </div>

        <div class="order-area">
          <h3>用户需求一览</h3>
          <div class="row">
            <span>申请者</span>
            <span class="right">{{order.learner.username}}</span>
          </div>
          <div class="row">
            <span>项目大致代码行数</span>
            <span class="right">{{order.codeLines}}</span>
          </div>
          <div class="row">
            <span>项目 GitHub 地址</span>
            <span class="right">{{order.gitHubUrl}}</span>
          </div>
          <div class="row">
            <span>项目备注</span>
            <p class="remark">{{order.remark}}</p>
          </div>

        </div>

        <div class="content-area">
            <markdown :content="order.review.content" :show="true"></markdown>
        </div>

        <div class="bottom-area" @click="overlayStatus = true">
            <button class="btn btn-green btn-reward">
                <img src="../img/icon/white-reward.png">
                <span>打赏支持</span>
            </button>
        </div>

        <overlay :overlay.sync="overlayStatus">
            <reward-form :order="order"></reward-form>
        </overlay>
    </div>
</template>

<script type="text/javascript">

import Overlay from '../components/overlay.vue'
import util from '../common/util'
import serviceUrl from "../common/serviceUrl.js"
import Markdown from "../components/markdown.vue"
import RewardForm from '../components/reward-form.vue'

var debug = require('debug')('article');

window.document.title = "Review";

export default {
    components: {
        'markdown': Markdown,
        'overlay': Overlay,
        'reward-form': RewardForm
    },
    data () {
        return {
            overlayStatus: false,
            order: {
                learner: {},
                review: {
                    content: ''
                },
                reviewer: {}
            }
        }
    },
    computed: {
    },
    methods: {
    },
    created() {
        var params = util.getSearchParameters()
        if (!params.id) {
            util.show(this, 'error', '请提供 id 参数');
            return;
        }
        this.$http.get(serviceUrl.ordersView, {
            orderId: params.id
        }).then((resp) => {
            if (util.filterError(this, resp)) {
                debug('%j', resp.data.result);
                this.order = resp.data.result;
            }
        }, util.httpErrorFn(this));
    }
}

</script>


<style lang="stylus">
@import "../stylus/variables.styl"

body
    background #fff

.header-area
    max-width 900px
    margin 0px auto
    text-align center
    h1.title
        font-size 2.2rem
        margin 20px 0px
    .intro
        img
            width 18px
            height 18px
        span
            margin-right 20px
            line-height 24px
            font-size 20px

.bottom-area
.order-area
.content-area
    max-width 700px
    margin 40px auto

.order-area
  padding 30px
  background #FFFFFF
  border 1px solid rgba(0,0,0,0.15)
  border-radius 3px
  h3
    font-size 18px
  .row
    margin-top 30px
    color gray
    .right
      float right
      color light-dark
    p.remark
      color light-dark
      margin-top 15px

.content-area
  margin-top 50px

.bottom-area
    .btn-reward
        padding 15px 35px
        img
            width 18px
            height 18px
            margin-right 10px
        span
            line-height 18px
            font-size 18px

</style>
